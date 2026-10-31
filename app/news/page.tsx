import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'オーストラリアニュース（日本語） | AU大好き',
  description: 'オーストラリアの最新ニュースを毎日日本語で。ワーホリ、留学生、在住日本人のための暮らし・安全・仕事・ビザ関連ニュース。',
  alternates: { canonical: 'https://audaisuki.com/news' },
  openGraph: { type: 'website', url: 'https://audaisuki.com/news', siteName: 'AU大好き', title: 'オーストラリアニュース（日本語） | AU大好き', locale: 'ja_AU' },
};

// Refresh every 30 minutes; the Japanese summaries are written twice a day.
export const revalidate = 1800;

type Item = {
  id: string;
  titleJa: string;
  summaryJa: string;
  tag: string;
  titleEn: string;
  source: string;
  link: string;
  publishedAt: string;
};

const FEED = 'https://www.downundervoices.com/api/audaisuki/news';

function sourceName(s: string) {
  if (!s.startsWith('http')) return s;
  if (s.includes('abc.net.au')) return 'ABC News';
  if (s.includes('sbs.com.au')) return 'SBS News';
  try {
    return new URL(s).hostname.replace(/^www\./, '');
  } catch {
    return 'News';
  }
}

function jaDate(iso: string) {
  return new Intl.DateTimeFormat('ja-JP', { timeZone: 'Australia/Sydney', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
}

async function getNews(): Promise<Item[]> {
  try {
    const r = await fetch(FEED, { next: { revalidate: 1800 } });
    if (!r.ok) return [];
    const data = (await r.json()) as { items?: Item[] };
    return data.items || [];
  } catch {
    return [];
  }
}

export default async function NewsPage() {
  const items = await getNews();
  return (
    <div className="officialHub">
      <header className="officialHubHeader">
        <a href="/" className="officialHubBrand">AuDaisuki <span>オーストラリア大好き</span></a>
        <div>🇯🇵 <span>オーストラリアのニュースを日本語で</span> 🇦🇺</div>
      </header>
      <main className="officialHubMain">
        <div className="officialHubIntro">
          <span className="kicker">AUSTRALIA NEWS IN JAPANESE</span>
          <h1>オーストラリアニュース<br /><small>Today&apos;s Australian news, in Japanese</small></h1>
          <p>ワーキングホリデー、留学生、在住の日本人のために、オーストラリアの最新ニュースを毎日日本語でお届けします。</p>
          <p className="en">Short Japanese summaries of the day&apos;s Australian news, updated twice a day, with a link to the full English story.</p>
        </div>

        <section>
          <div className="hubSectionHead">
            <div><span className="kicker">LATEST</span><h2>最新ニュース / Latest</h2></div>
            <small>全文（英語）は各記事のリンクから / Full English story via each link.</small>
          </div>
          {items.length === 0 ? (
            <p>ニュースを準備中です。しばらくしてからもう一度ご覧ください。 / News is being prepared — please check back soon.</p>
          ) : (
            <div className="hubUpdateList">
              {items.map((n) => (
                <a href={n.link} target="_blank" rel="noopener" key={n.id}>
                  <div className="hubUpdateMeta">
                    <time>{jaDate(n.publishedAt)}</time>
                    <span>{n.tag}</span>
                    <span>{sourceName(n.source)}</span>
                  </div>
                  <h3>{n.titleJa}</h3>
                  <b>{n.titleEn}</b>
                  <p>{n.summaryJa}</p>
                  <small>英語の記事を読む / Read in English ↗</small>
                </a>
              ))}
            </div>
          )}
        </section>

        <section className="hubDisclaimer">
          <b>ご注意 / Please note</b>
          <p>
            日本語の要約はAIの補助で作成し、元の英語記事の内容に基づいています。重要な判断の前には、必ず元の記事や公式情報をご確認ください。
            Japanese summaries are prepared with AI assistance from the original English reports. Always check the original story or official
            sources before making important decisions.
          </p>
        </section>
        <a className="legalBack" href="/">← AuDaisuki ホーム / Back to home</a>
      </main>
    </div>
  );
}
