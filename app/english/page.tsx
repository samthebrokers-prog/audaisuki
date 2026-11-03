import type { Metadata } from 'next';
import { phraseForDate, recentPhrases } from '../phrases';

export const metadata: Metadata = {
  title: '英語を学ぶ・今日のオージー英語 | AU大好き',
  description: 'オーストラリアで使える英語を毎日ひとつ。オージー英語のフレーズ、やさしい英語のニュース、英語パートナー探し。ワーホリ・留学生のための英語学習ページ。',
  alternates: { canonical: 'https://audaisuki.com/english' },
  openGraph: { type: 'website', url: 'https://audaisuki.com/english', siteName: 'AU大好き', title: '英語を学ぶ・今日のオージー英語 | AU大好き', locale: 'ja_AU' },
};

// The phrase changes every day; the easy-English news is refreshed twice a day.
export const revalidate = 1800;

type NewsItem = { id: string; titleJa: string; titleEn: string; easyEn?: string; words?: { en: string; ja: string }[]; link: string };

const FEED = 'https://www.downundervoices.com/api/audaisuki/news';

async function getEasyNews(): Promise<NewsItem[]> {
  try {
    const r = await fetch(FEED, { next: { revalidate: 1800 } });
    if (!r.ok) return [];
    const data = (await r.json()) as { items?: NewsItem[] };
    return (data.items || []).filter((n) => n.easyEn).slice(0, 3);
  } catch {
    return [];
  }
}

function jaDay(d: Date) {
  return new Intl.DateTimeFormat('ja-JP', { timeZone: 'Australia/Perth', month: 'numeric', day: 'numeric', weekday: 'short' }).format(d);
}

export default async function EnglishPage() {
  const today = phraseForDate();
  const past = recentPhrases(7).slice(1);
  const news = await getEasyNews();

  return (
    <div className="officialHub">
      <header className="officialHubHeader">
        <a href="/" className="officialHubBrand">AuDaisuki <span>オーストラリア大好き</span></a>
        <div>🇯🇵 <span>オーストラリアで使える英語</span> 🇦🇺</div>
      </header>
      <main className="officialHubMain">
        <div className="officialHubIntro">
          <span className="kicker">LEARN ENGLISH IN AUSTRALIA</span>
          <h1>英語を学ぶ<br /><small>Everyday Aussie English, one phrase a day</small></h1>
          <p>オーストラリアの職場やシェアハウス、カフェで本当に使われる英語を、毎日ひとつずつ紹介します。</p>
          <p className="en">A new Aussie phrase every day, easy-English news, and English conversation partners.</p>
        </div>

        <section className="englishToday">
          <span className="kicker">TODAY / 今日のフレーズ</span>
          <strong lang="en">{today.en}</strong>
          <p className="englishMeaning">{today.ja}</p>
          <p className="englishExample"><span lang="en">{today.example}</span><small>{today.exampleJa}</small></p>
          {today.tip ? <p className="englishTip">💡 {today.tip}</p> : null}
        </section>

        <section>
          <div className="hubSectionHead">
            <div><span className="kicker">EASY ENGLISH NEWS</span><h2>やさしい英語でニュース / Learn English from the news</h2></div>
            <a href="/news">ニュース一覧 / All news →</a>
          </div>
          {news.length === 0 ? (
            <p>やさしい英語のニュースは1日2回更新されます。まもなく表示されます。 / Easy-English news is added twice a day — coming soon.</p>
          ) : (
            <div className="hubUpdateList">
              {news.map((n) => (
                <a href={n.link} target="_blank" rel="noopener" key={n.id}>
                  <h3>{n.titleJa}</h3>
                  <p className="easyEn" lang="en">{n.easyEn}</p>
                  {n.words?.length ? (
                    <ul className="easyWords">
                      {n.words.map((w) => <li key={w.en}><b lang="en">{w.en}</b> {w.ja}</li>)}
                    </ul>
                  ) : null}
                  <small>元の記事を読む / Read the full story ↗</small>
                </a>
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="hubSectionHead">
            <div><span className="kicker">PRACTISE</span><h2>英語を話す仲間を見つける / Find people to practise with</h2></div>
          </div>
          <div className="englishActions">
            <a href="/classifieds?c=exchange">🗣️ <b>言語交換の相手を探す</b><small>Language exchange — many Australians are learning Japanese too</small></a>
            <a href="/classifieds?c=english">📚 <b>英語を学ぶ掲示板</b><small>English study, tutors and study buddies</small></a>
          </div>
        </section>

        <section>
          <div className="hubSectionHead">
            <div><span className="kicker">THIS WEEK</span><h2>今週のフレーズ / This week&apos;s phrases</h2></div>
          </div>
          <div className="hubUpdateList englishPast">
            {past.map(({ date, phrase }) => (
              <article key={phrase.en + date.toISOString()}>
                <div className="hubUpdateMeta"><time>{jaDay(date)}</time></div>
                <h3 lang="en">{phrase.en}</h3>
                <p>{phrase.ja}</p>
                <small lang="en">{phrase.example}</small>
              </article>
            ))}
          </div>
        </section>

        <a className="legalBack" href="/">← AuDaisuki ホーム / Back to home</a>
      </main>
    </div>
  );
}
