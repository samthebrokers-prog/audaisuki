import type { Metadata } from 'next';
import { recentTips, tips } from '../tips';

export const metadata: Metadata = {
  title: 'ワーホリ豆知識・オーストラリア生活のコツ | AU大好き',
  description: 'オーストラリアのワーホリ・留学生のための生活の豆知識を毎日ひとつ。税金（TFN）、給料、スーパー、ビザ、住まい、安全、健康の基本を公式情報へのリンク付きで紹介。',
  alternates: { canonical: 'https://audaisuki.com/tips' },
  openGraph: { type: 'website', url: 'https://audaisuki.com/tips', siteName: 'AU大好き', title: 'ワーホリ豆知識 | AU大好き', locale: 'ja_AU' },
};

// The tip changes every day at midnight Perth time.
export const revalidate = 1800;

function jaDay(d: Date) {
  return new Intl.DateTimeFormat('ja-JP', { timeZone: 'Australia/Perth', month: 'numeric', day: 'numeric', weekday: 'short' }).format(d);
}

export default function TipsPage() {
  const recent = recentTips(7);
  const shown = new Set(recent.map((r) => r.tip.titleJa));
  const others = tips.filter((t) => !shown.has(t.titleJa));
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '28px 16px 60px', fontFamily: 'inherit', color: '#1d2b38' }}>
      <p><a href="/" style={{ color: '#e23b43', fontWeight: 800 }}>← AU大好き トップ / Home</a></p>
      <h1 style={{ color: '#143c68', margin: '10px 0 4px' }}>ワーホリ豆知識<br /><small style={{ fontSize: 16, color: '#5a6b7a' }}>Working holiday tips — a new one every day</small></h1>
      <p style={{ color: '#3d4f60' }}>オーストラリアで暮らす・働く日本人のための基本情報です。ルールは変わることがあるので、大切なことは必ずリンク先の公式サイトで確認してください。</p>
      <h2 style={{ color: '#143c68', marginTop: 28 }}>今週の豆知識 <small style={{ fontSize: 14, color: '#5a6b7a' }}>This week</small></h2>
      {recent.map(({ date, tip }, i) => (
        <TipCard key={tip.titleJa} tip={tip} label={i === 0 ? `今日 ${jaDay(date)}` : jaDay(date)} highlight={i === 0} />
      ))}
      {others.length > 0 && <h2 style={{ color: '#143c68', marginTop: 28 }}>その他の豆知識 <small style={{ fontSize: 14, color: '#5a6b7a' }}>More tips</small></h2>}
      {others.map((tip) => <TipCard key={tip.titleJa} tip={tip} />)}
      <p style={{ marginTop: 28, padding: 16, background: '#fff8e6', border: '1px solid #f1d9a0', borderRadius: 12 }}>
        🙋 わからないことは <a href="/classifieds?c=question" style={{ color: '#e23b43', fontWeight: 800 }}>お助け質問箱</a> で、オーストラリアにいる日本人に聞いてみましょう。<br />
        <small>Ask other Japanese people in Australia on our free Q&amp;A board.</small>
      </p>
      <p style={{ fontSize: 12, color: '#788895', marginTop: 18 }}>AU大好きは独立したコミュニティサイトです。法律・税金・ビザについての正式な助言ではありません。 / General information only, not legal, tax or migration advice.</p>
    </main>
  );
}

function TipCard({ tip, label, highlight }: { tip: (typeof tips)[number]; label?: string; highlight?: boolean }) {
  const external = !tip.link.startsWith('https://audaisuki.com');
  return (
    <article style={{ margin: '12px 0', padding: '16px 18px', borderRadius: 12, background: highlight ? 'linear-gradient(135deg,#fff8e6,#fff)' : '#fff', border: `1px solid ${highlight ? '#f1d9a0' : '#e3e8ee'}`, borderLeft: `6px solid ${highlight ? '#f2a516' : '#143c68'}` }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#8a5a00' }}>{label ? `${label} ・ ` : ''}{tip.tag}</div>
      <h3 style={{ margin: '4px 0 6px', color: '#143c68' }}>{tip.titleJa}</h3>
      <p style={{ margin: '0 0 6px' }}>{tip.bodyJa}</p>
      <p lang="en" style={{ margin: '0 0 8px', fontStyle: 'italic', color: '#3d4f60' }}>{tip.en}</p>
      <a href={tip.link} target={external ? '_blank' : undefined} rel="noreferrer" style={{ color: '#e23b43', fontWeight: 800, fontSize: 13 }}>{tip.linkLabel}{external ? ' ↗' : ' →'}</a>
    </article>
  );
}
