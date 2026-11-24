import { tipForDate } from "./tips";

// Homepage box: 今日のワーホリ豆知識 / Working holiday tip of the day.
export default function HomeTip() {
  const t = tipForDate();
  return (
    <section className="homePhrase homeTip" aria-label="Working holiday tip of the day">
      <div className="homePhraseCard">
        <div className="homePhraseLabel">
          <span className="kicker">TODAY&apos;S TIP</span>
          <b>今日のワーホリ豆知識</b>
          <small className="homeTipTag">{t.tag}</small>
        </div>
        <div className="homePhraseBody">
          <strong className="homeTipTitle">{t.titleJa}</strong>
          <p className="homePhraseMeaning">{t.bodyJa}</p>
          <p className="homePhraseExample"><span lang="en">{t.en}</span></p>
        </div>
        <div className="homePhraseLinks">
          <a href={t.link} target={t.link.startsWith("https://audaisuki.com") ? undefined : "_blank"} rel="noreferrer">{t.linkLabel} →</a>
          <a href="/tips">豆知識をもっと見る / More tips →</a>
          <a href="/classifieds?c=question">質問箱で聞く / Ask the community →</a>
        </div>
      </div>
    </section>
  );
}
