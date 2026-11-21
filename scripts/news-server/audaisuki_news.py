#!/usr/bin/env python3
"""AU大好き news job for our own BinaryLane server — free, no paid AI or API.

Runs from cron every 3 hours:
  1. Reads free English RSS feeds (ABC News, SBS News).
  2. Keeps stories that matter to Japanese people in Australia
     (visas, work and pay, rent, weather/bushfire, safety, transport, health, Japan).
  3. Translates the headline and first sentence into Japanese OFFLINE with
     Argos Translate (open source, runs on this server, no account, no bill).
  4. Writes audaisuki-news.json into a public web folder. The website reads it.

Usage:  python3 audaisuki_news.py --out /path/to/public_html/audaisuki-news.json
Test:   python3 audaisuki_news.py --out /tmp/test.json --dry-run   (no translation)
"""
import argparse
import email.utils
import html
import json
import os
import re
import sys
import tempfile
import time
import urllib.request

FEEDS = [
    ("ABC News", "https://www.abc.net.au/news/feed/51120/rss.xml"),   # Top stories
    ("ABC News", "https://www.abc.net.au/news/feed/45910/rss.xml"),   # Just In
    ("SBS News", "https://www.sbs.com.au/news/topic/australia/feed"),
]

# What Japanese working-holiday makers, students and residents care about.
TOPICS = [
    ("ビザ / Visa", r"\bvisa|working holiday|backpacker|migra|immigra|international student|home affairs"),
    ("仕事 / Work", r"\bwage|pay rise|minimum wage|fair work|employ|jobs?\b|worker|award rate|superannuation"),
    ("暮らし / Life", r"\brent|rental|housing|cost of living|price|grocer|supermarket|interest rate|petrol|electricity|tax"),
    ("安全・天気 / Safety & weather", r"\bbushfire|fire danger|heatwave|storm|flood|cyclone|warning|evacuat|weather|bureau of meteorology|shark|scam"),
    ("交通 / Transport", r"\btrain|bus\b|airport|flight|qantas|virgin|road rule|licen[cs]e|fine\b"),
    ("健康 / Health", r"\bhealth|hospital|vaccin|measles|covid|flu\b|medicare|outbreak"),
    ("日本 / Japan", r"\bjapan|japanese|tokyo|osaka"),
]
# Stories we do not run (crime and tragedy), unless they are safety warnings above.
SKIP = re.compile(r"\b(murder|killed|dies|died|death|dead|stabb|shoot|rape|assault|court|sentenced|jail|charged|accused|crash)\b", re.I)

UA = "AuDaisuki-News/1.0 (+https://audaisuki.com/news)"


def fetch(url, max_bytes=600_000):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/rss+xml, application/xml"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read(max_bytes).decode("utf-8", "replace")


def clean(s):
    s = re.sub(r"<!\[CDATA\[([\s\S]*?)\]\]>", r"\1", s or "")
    s = html.unescape(html.unescape(s))
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()


def field(item, tag):
    m = re.search(rf"<{tag}(?:\s[^>]*)?>([\s\S]*?)</{tag}>", item, re.I)
    return clean(m.group(1)) if m else ""


def parse(xml):
    for item in re.findall(r"<item\b[\s\S]*?</item>", xml, re.I):
        yield {
            "title": field(item, "title"),
            "link": field(item, "link"),
            "description": field(item, "description"),
            "pubDate": field(item, "pubDate"),
        }


def to_iso(d):
    try:
        return email.utils.parsedate_to_datetime(d).isoformat()
    except Exception:
        return ""


def topic(text):
    for tag, pattern in TOPICS:
        if re.search(pattern, text, re.I):
            return tag
    return None


def first_sentence(s, limit=240):
    s = s.split(". ")[0].strip()
    return (s if s.endswith(".") else s + ".")[:limit]


def load_translator():
    """Argos Translate English -> Japanese (offline). Returns None if not installed."""
    try:
        import argostranslate.translate as tr
    except ImportError:
        return None
    langs = tr.get_installed_languages()
    en = next((l for l in langs if l.code == "en"), None)
    ja = next((l for l in langs if l.code == "ja"), None)
    if not en or not ja:
        return None
    t = en.get_translation(ja)
    return t.translate if t else None


def build(translate, limit=20, max_age_days=4):
    seen, items = set(), []
    now = time.time()
    for source, url in FEEDS:
        try:
            xml = fetch(url)
        except Exception as e:  # one broken feed must not stop the job
            print(f"WARN {source} {url}: {e}", file=sys.stderr)
            continue
        for it in parse(xml):
            title, link = it["title"], it["link"]
            if not title or not link or link in seen:
                continue
            text = f"{title} {it['description']}"
            tag = topic(text)
            if not tag or (SKIP.search(title) and tag != "安全・天気 / Safety & weather"):
                continue
            published = to_iso(it["pubDate"])
            if not published:
                continue
            ts = email.utils.parsedate_to_datetime(it["pubDate"]).timestamp()
            if now - ts > max_age_days * 86400:
                continue
            seen.add(link)
            summary_en = first_sentence(it["description"]) if it["description"] else ""
            title_ja = translate(title) if translate else ""
            summary_ja = translate(summary_en) if (translate and summary_en) else ""
            if translate and not title_ja:
                continue
            items.append({
                "id": "bl-" + re.sub(r"[^a-z0-9]+", "-", link.lower())[-60:].strip("-"),
                "titleJa": title_ja or title,
                "summaryJa": ("（機械翻訳）" + summary_ja) if summary_ja else "（英語の記事です）",
                "tag": tag,
                "titleEn": title,
                "easyEn": summary_en,
                "source": source,
                "link": link,
                "publishedAt": published,
                "_ts": ts,
            })
    items.sort(key=lambda x: x["_ts"], reverse=True)
    for x in items:
        x.pop("_ts", None)
    return items[:limit]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True, help="where to write audaisuki-news.json")
    ap.add_argument("--dry-run", action="store_true", help="skip translation (for testing)")
    args = ap.parse_args()

    translate = None if args.dry_run else load_translator()
    if not args.dry_run and translate is None:
        sys.exit("Argos Translate (en->ja) is not installed. Run install.sh first.")

    items = build(translate)
    if not items and os.path.exists(args.out):
        print("No stories found this run; keeping the previous file.")
        return
    data = {"generatedAt": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "items": items}
    # Write atomically so the website never reads a half-written file.
    folder = os.path.dirname(os.path.abspath(args.out))
    fd, tmp = tempfile.mkstemp(dir=folder, suffix=".tmp")
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    os.chmod(tmp, 0o644)
    os.replace(tmp, args.out)
    print(f"Wrote {len(items)} stories to {args.out}")


if __name__ == "__main__":
    main()
