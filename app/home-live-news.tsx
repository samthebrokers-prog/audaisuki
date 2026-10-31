// Homepage "Latest news" block: today's Australian news in Japanese,
// written twice a day by the shared news system (refreshes every 30 min).
type Item = { id: string; titleJa: string; titleEn: string; tag: string; link: string; publishedAt: string };

const FEED = 'https://www.downundervoices.com/api/audaisuki/news';

function jaDate(iso: string) {
  return new Intl.DateTimeFormat('ja-JP', { timeZone: 'Australia/Sydney', month: 'numeric', day: 'numeric' }).format(new Date(iso));
}

export default async function HomeLiveNews() {
  let items: Item[] = [];
  try {
    const r = await fetch(FEED, { next: { revalidate: 1800 } });
    if (r.ok) items = ((await r.json()) as { items?: Item[] }).items || [];
  } catch {
    items = [];
  }
  if (!items.length) return null;
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
          <b>{lead.titleEn}</b>
          <small>{lead.tag}</small>
        </a>
        <div className="homeNewsList">
          {rest.slice(0, 4).map((n) => (
            <a href="/news" key={n.id}>
              <div><span>{n.tag}</span><time>{jaDate(n.publishedAt)}</time></div>
              <strong>{n.titleJa}</strong>
              <b>{n.titleEn}</b>
              <em>NEW</em>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
