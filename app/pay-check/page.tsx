import type { Metadata } from 'next';
import PayChecker from './checker';
import { AU, NZ } from './rates';
import '../tools.css';

export const metadata: Metadata = {
  title: '給料チェック｜オーストラリア・NZの最低賃金と手取り計算 | AU大好き',
  description:
    'あなたの時給は最低賃金以上？オーストラリアとニュージーランドの最新の最低賃金・ワーホリ税率・手取りの目安を日本語で無料チェック。Fair Work・ATO・IRDの公式情報に基づく計算ツール。',
  alternates: { canonical: 'https://audaisuki.com/pay-check' },
  openGraph: {
    type: 'website',
    url: 'https://audaisuki.com/pay-check',
    siteName: 'AU大好き',
    title: '給料チェック｜あなたの時給は最低賃金以上？',
    description: 'オーストラリア・NZの最低賃金と手取りの目安を日本語で無料チェック。',
    locale: 'ja_AU',
  },
};

export default function PayCheckPage() {
  return (
    <div className="officialHub">
      <header className="officialHubHeader">
        <a href="/" className="officialHubBrand">AuDaisuki <span>オーストラリア大好き</span></a>
        <div>🇦🇺 <span>給料チェック</span> 🇳🇿</div>
      </header>
      <main className="officialHubMain">
        <div className="officialHubIntro">
          <span className="kicker">PAY CHECKER / 給料チェック</span>
          <h1>あなたの時給は大丈夫？<br /><small>Check your pay against the legal minimum</small></h1>
          <p>オーストラリアとニュージーランドの最新の最低賃金と比べて、あなたの時給が法律の基準を下回っていないかをチェックできます。手取りの目安も計算します。</p>
          <p className="en">Free, in Japanese, based on official Fair Work, ATO, Employment NZ and IRD figures. Nothing you enter is saved.</p>
        </div>

        <PayChecker />

        <section className="toolNote">
          <h2>この計算について / About this estimate</h2>
          <ul>
            <li><b>これは目安です。</b>税金・保険料は1年間同じ条件で働いた場合の概算で、実際の給与明細や確定申告の結果とは異なることがあります。</li>
            <li><b>オーストラリア：</b>最低時給は A${AU.minWage.toFixed(2)}（カジュアルは25%加算で A${AU.casualMinWage.toFixed(2)}）です（{AU.label}）。ただし、ほとんどの仕事は職種ごとの「アワード」でこれより高い時給や週末・深夜の割増が決められています。必ず Fair Work のツールで確認してください。ワーホリの税率は、ATOに登録した雇用主の場合、年間A$45,000まで15%です。登録していない雇用主の場合は、より高い税率で源泉徴収されます。</li>
            <li><b>ニュージーランド：</b>大人（16歳以上）の最低時給は NZ${NZ.minWage.toFixed(2)}、スターティングアウト・トレーニング賃金は NZ${NZ.startingOutWage.toFixed(2)} です（{NZ.label}）。所得税は主な仕事の税コード「M」で計算しています。2つ目の仕事など、税コードが違う場合は金額が変わります。</li>
            <li>入力した金額はどこにも保存・送信されません。</li>
            <li>この情報は一般的な案内であり、法律・税務のアドバイスではありません。</li>
          </ul>
        </section>

        <section className="toolNote">
          <h2>公式情報 / Official sources</h2>
          <ul className="sourceList">
            {[...AU.sources, ...NZ.sources].map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener">{s.label} ↗</a></li>
            ))}
          </ul>
          <p className="updated">最終確認日：2026年11月12日 / Last checked 12 November 2026</p>
        </section>

        <section className="toolCrossLink">
          <a href="/customs-guide">📦 <b>オーストラリア・NZへの引越し・荷物・車の輸入ガイド</b><small>Moving belongings and vehicles — customs guide in Japanese →</small></a>
        </section>

        <a className="legalBack" href="/">← AuDaisuki ホーム / Back to home</a>
      </main>
    </div>
  );
}
