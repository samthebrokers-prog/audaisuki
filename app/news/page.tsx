import type { Metadata } from 'next';
import { getNews } from './get-news';

export const metadata: Metadata = {
  title: 'オーストラリアニュース（日本語） | AU大好き',
  description: 'オーストラリアの最新ニュースを毎日日本語で。ワーホリ、留学生、在住日本人のための暮らし・安全・仕事・ビザ関連ニュース。',
  alternates: { canonical: 'https://audaisuki.com/news' },
  openGraph: { type: 'website', url: 'https://audaisuki.com/news', siteName: 'AU大好き', title: 'オーストラリアニュース（日本語） | AU大好き', locale: 'ja_AU' },
};

// Refresh every 30 minutes; the Japanese summaries are written every day.
export const revalidate = 1800;



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
          <p className="en">Short Japanese summaries of the day&apos;s Australian news, updated every day, with an easy-English version, key words, and a link to the full English story.</p>
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
                  {n.titleEn ? <b>{n.titleEn}</b> : null}
                  <p>{n.summaryJa}</p>
                  {n.easyEn ? (
                    <div className="easyBox">
                      <span>EASY ENGLISH / やさしい英語</span>
                      <p className="easyEn" lang="en">{n.easyEn}</p>
                      {n.words?.length ? (
                        <ul className="easyWords">
                          {n.words.map((w) => <li key={w.en}><b lang="en">{w.en}</b> {w.ja}</li>)}
                        </ul>
                      ) : null}
                    </div>
                  ) : null}
                  <small>{n.titleEn ? '英語の記事を読む / Read in English ↗' : '元の記事を見る / Open the source ↗'}</small>
                </a>
              ))}
            </div>
          )}
        </section>

        <section className="hubDisclaimer">
          <b>ご注意 / Please note</b>
          <p>
            ニュースはSBSの日本語放送、外務省 海外安全ホームページ、オーストラリア政府などの公開情報から自動で集めています。英語の見出しの日本語訳は機械翻訳の場合があります。重要な判断の前には、必ず元の記事や公式情報をご確認ください。
            News is collected automatically from SBS Japanese, Japan's Ministry of Foreign Affairs and Australian official sources. Japanese versions of English headlines may be machine-translated. Always check the original story or official
            sources before making important decisions.
          </p>
        </section>
        <a className="legalBack" href="/">← AuDaisuki ホーム / Back to home</a>
      </main>
    </div>
  );
}
