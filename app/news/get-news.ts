// Australian news in Japanese — free, no paid AI or API.
//
// Sources (merged, newest first):
// 1. SBS Japanese (SBSの日本語放送) RSS — Australian public broadcaster, already in Japanese.
// 2. MOFA 海外安全ホームページ RSS — Japan's official overseas safety notices (Australia / region-wide only).
// 3. BinaryLane news job (optional) — free offline translation of official English headlines,
//    served as JSON from our own server (see scripts/news-server/). Skipped if not reachable.
// 4. local-news.json — hand-picked stories.
// 5. Old shared feed (backup).
import local from './local-news.json';

export type NewsItem = {
  id: string;
  titleJa: string;
  summaryJa: string;
  tag: string;
  titleEn: string;
  easyEn?: string;
  words?: { en: string; ja: string }[];
  source: string;
  link: string;
  publishedAt: string;
};

const SBS_FEED = 'https://feeds.sbs.com.au/sbs-japanese';
const MOFA_FEED = 'https://www.anzen.mofa.go.jp/rss/news.xml';
const SERVER_FEED = process.env.AUDAISUKI_NEWS_JSON || '';
const OLD_FEED = 'https://www.downundervoices.com/api/audaisuki/news';
const MAX_AGE_DAYS = 21;

const JA = /[぀-ヿ一-鿿]/;
const jaCount = (s: string) => (s.match(/[぀-ヿ一-鿿]/g) || []).length;

function decode(s: string) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}
const clean = (s: string) => decode(decode(s)).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
function field(xml: string, tag: string) {
  const m = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i'));
  return m ? clean(m[1]) : '';
}

export type RssItem = { title: string; link: string; description: string; category: string; pubDate: string };

export function parseRss(xml: string): RssItem[] {
  return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map(([item]) => ({
    title: field(item, 'title'),
    link: field(item, 'link'),
    description: field(item, 'description') || field(item, 'itunes:summary'),
    category: field(item, 'category'),
    pubDate: field(item, 'pubDate'),
  }));
}

// Big feeds (SBS is ~2.6 MB): read only the first part, which holds the newest items.
async function readHead(url: string, maxBytes = 350_000): Promise<string> {
  const res = await fetch(url, {
    headers: { 'user-agent': 'AuDaisuki-News/1.0 (+https://audaisuki.com/news)', accept: 'application/rss+xml, application/xml, text/xml' },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok || !res.body) return '';
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (total < maxBytes) {
    const { done, value } = await reader.read();
    if (done || !value) break;
    chunks.push(value);
    total += value.length;
  }
  reader.cancel().catch(() => {});
  const buf = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) {
    buf.set(c, off);
    off += c.length;
  }
  return new TextDecoder('utf-8').decode(buf);
}

const fresh = (iso: string) => Date.now() - Date.parse(iso) < MAX_AGE_DAYS * 86_400_000;
const toIso = (d: string) => {
  const t = Date.parse(d);
  return Number.isNaN(t) ? '' : new Date(t).toISOString();
};

// SBS descriptions are usually "English text - 日本語テキスト"; keep the Japanese part.
function japanesePart(text: string) {
  const parts = text.split(/\s[-–—]\s/).map((p) => p.trim()).filter(Boolean);
  const best = parts.sort((a, b) => jaCount(b) - jaCount(a))[0] || '';
  return jaCount(best) >= 5 ? best : '';
}
const shorten = (s: string, n: number) => (s.length > n ? `${s.slice(0, n).replace(/[、。,.\s]+$/, '')}…` : s);
// Music, opera and recipe segments are not news.
const SBS_SKIP = /\((?:MF|FS)\s*\d+\)|（(?:MF|FS)\s*\d+）|VIVA!\s*Opera|Showa\s*100|プレイバック|playback/i;

export function sbsToNews(items: RssItem[]): NewsItem[] {
  const out: NewsItem[] = [];
  for (const it of items) {
    const publishedAt = toIso(it.pubDate);
    if (!publishedAt || !it.link || SBS_SKIP.test(it.title)) continue;
    const jaDesc = japanesePart(it.description);
    const titleJa = JA.test(it.title) ? it.title : shorten(jaDesc.split('。')[0] || '', 70);
    if (!titleJa) continue;
    const summary = jaDesc && jaDesc !== titleJa ? shorten(jaDesc, 220) : '';
    out.push({
      id: `sbs-${it.link.split('/').pop() || publishedAt}`,
      titleJa,
      summaryJa: summary || 'SBSの日本語放送（音声）。くわしくはリンク先でお聴きください。',
      tag: /ニュース|news/i.test(it.title) ? 'ニュース / News' : '暮らし・話題 / Life',
      titleEn: JA.test(it.title) ? '' : it.title,
      source: 'SBS日本語放送',
      link: it.link,
      publishedAt,
    });
  }
  return out;
}

// Only notices for Australia / Oceania, or region-wide (広域) warnings that also cover Australia.
const MOFA_KEEP = /オーストラリア|豪州|大洋州|広域|全世界|欧米等/;
export function mofaToNews(items: RssItem[]): NewsItem[] {
  return items
    .filter((it) => MOFA_KEEP.test(`${it.title} ${it.category} ${it.description}`))
    .map((it) => {
      const publishedAt = toIso(it.pubDate);
      return {
        id: `mofa-${it.link.split('/').pop() || publishedAt}`,
        titleJa: it.title,
        summaryJa: shorten(it.description || '外務省 海外安全ホームページのお知らせです。', 220),
        tag: '安全情報 / Safety',
        titleEn: '',
        source: '外務省 海外安全ホームページ',
        link: it.link,
        publishedAt,
      };
    })
    .filter((n) => n.publishedAt && n.link);
}

async function safe<T>(p: Promise<T>, fallback: T): Promise<T> {
  try {
    return await p;
  } catch {
    return fallback;
  }
}

async function jsonItems(url: string): Promise<NewsItem[]> {
  if (!url) return [];
  const r = await fetch(url, { signal: AbortSignal.timeout(8_000), next: { revalidate: 1800 } });
  if (!r.ok) return [];
  return ((await r.json()) as { items?: NewsItem[] }).items || [];
}

export async function getNews(): Promise<NewsItem[]> {
  const [sbs, mofa, server, old] = await Promise.all([
    safe(readHead(SBS_FEED).then((x) => sbsToNews(parseRss(x))), [] as NewsItem[]),
    safe(readHead(MOFA_FEED, 200_000).then((x) => mofaToNews(parseRss(x))), [] as NewsItem[]),
    safe(jsonItems(SERVER_FEED), [] as NewsItem[]),
    safe(jsonItems(OLD_FEED), [] as NewsItem[]),
  ]);
  const seen = new Set<string>();
  return [...(local.items as NewsItem[]), ...server, ...sbs, ...mofa, ...old]
    .filter((n) => n.publishedAt && fresh(n.publishedAt))
    .filter((n) => {
      const key = n.link || n.id;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 40);
}
