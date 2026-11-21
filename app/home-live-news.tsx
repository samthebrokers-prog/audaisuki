// Homepage "Latest news" block: today's Australian news in Japanese,
// written daily by the AU大好き news job (refreshes every 30 min).
import { getNews, type NewsItem } from './news/get-news';

function jaDate(iso: string) {
  return new Intl.DateTimeFormat('ja-JP', { timeZone: 'Australia/Sydney', month: 'numeric', day: 'numeric' }).format(new Date(iso));
}

export default async function HomeLiveNews() {
  const items: NewsItem[] = await getNews();
  if (!items.length) return null;
  // Don't show old news as "NEW" (e.g. while the daily news writer is switched off).
  if (Date.now() - Date.parse(items[0].publishedAt) > 4 * 86_400_000) return null;
  const [lead, ...rest] = items;
  return (
    <section className="homeNews" aria-label="Latest news">
      <div className="homeNewsHead">
        <div>
          <span className="kicker">LATEST / NEW</span>
          <h2>最新ニュース <small>Australia news in Japanese</small></h2>
        </div>
        <a href="/news">ニュース一覧 / All news →</a>
      </div>
      <div className="homeNewsGrid">
        <a className="homeNewsLead" href="/news">
          <span className="newFlag">NEW</span>
          <time>{jaDate(lead.publishedAt)}</time>
          <strong>{lead.titleJa}</strong>
          {lead.titleEn ? <b>{lead.titleEn}</b> : null}
          <small>{lead.tag}</small>
        </a>
        <div className="homeNewsList">
          {rest.slice(0, 4).map((n) => (
            <a href="/news" key={n.id}>
              <div><span>{n.tag}</span><time>{jaDate(n.publishedAt)}</time></div>
              <strong>{n.titleJa}</strong>
              {n.titleEn ? <b>{n.titleEn}</b> : null}
              <em>NEW</em>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
