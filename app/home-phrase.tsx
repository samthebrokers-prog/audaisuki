import { phraseForDate } from "./phrases";

// Homepage box: 今日のオージー英語 / Aussie English phrase of the day.
export default function HomePhrase() {
  const p = phraseForDate();
  return (
    <section className="homePhrase" aria-label="Aussie English phrase of the day">
      <div className="homePhraseCard">
        <div className="homePhraseLabel">
          <span className="kicker">TODAY&apos;S AUSSIE ENGLISH</span>
          <b>今日のオージー英語</b>
        </div>
        <div className="homePhraseBody">
          <strong lang="en">{p.en}</strong>
          <p className="homePhraseMeaning">{p.ja}</p>
          <p className="homePhraseExample"><span lang="en">{p.example}</span><small>{p.exampleJa}</small></p>
          {p.tip ? <p className="homePhraseTip">💡 {p.tip}</p> : null}
        </div>
        <div className="homePhraseLinks">
          <a href="/english">英語を学ぶ / Learn English →</a>
          <a href="/classifieds?c=exchange">英語パートナーを探す / Find an English partner →</a>
        </div>
      </div>
    </section>
  );
}
