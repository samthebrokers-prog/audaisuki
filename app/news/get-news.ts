// Australian news in Japanese. Items are written daily into local-news.json
// (by the AU大好き daily news job). The old shared feed is still read as a
// backup and merged in, newest first.
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

const FEED = 'https://www.downundervoices.com/api/audaisuki/news';

export async function getNews(): Promise<NewsItem[]> {
  let feed: NewsItem[] = [];
  try {
    const r = await fetch(FEED, { next: { revalidate: 1800 } });
    if (r.ok) feed = ((await r.json()) as { items?: NewsItem[] }).items || [];
  } catch {
    feed = [];
  }
  const seen = new Set<string>();
  return [...(local.items as NewsItem[]), ...feed]
    .filter((n) => {
      const key = n.link || n.id;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 40);
}
