import type { Metadata } from 'next';
import CusmodeReferral from './referral';
import '../tools.css';

export const metadata: Metadata = {
  title: 'オーストラリア・NZへの引越しと通関ガイド｜家財・車・手荷物 | AU大好き',
  description:
    'オーストラリアやニュージーランドへ引越す日本人のための通関ガイド。船便・航空便の家財（B534・NZCS 218）、車の輸入（輸入許可・免税条件）、空港での食品・薬の申告、検疫について公式情報をもとに日本語で解説。',
  alternates: { canonical: 'https://audaisuki.com/customs-guide' },
  openGraph: {
    type: 'website',
    url: 'https://audaisuki.com/customs-guide',
    siteName: 'AU大好き',
    title: 'オーストラリア・NZへの引越しと通関ガイド',
    description: '家財・車・手荷物の通関と検疫を日本語でわかりやすく。',
    locale: 'ja_AU',
  },
};

const sources = [
  { label: 'Australian Border Force — 家財の送付（Unaccompanied personal effects）', href: 'https://www.abf.gov.au/entering-and-leaving-australia/moving-to-australia/upe' },
  { label: 'ABF — B534 申告書（日本語版・参考用）', href: 'https://www.abf.gov.au/form-listing/forms/b534-japanese-revised.pdf' },
  { label: 'ABF — B534 申告書（英語版・提出用）', href: 'https://www.abf.gov.au/form-listing/forms/B534e.pdf' },
  { label: 'Department of Agriculture（DAFF）— 家財のバイオセキュリティ', href: 'https://www.agriculture.gov.au/travelling/moving-immigrating/personal_effects' },
  { label: 'Department of Infrastructure — 車の輸入（8つのステップ）', href: 'https://infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/importing-road-vehicle-australia/8-steps-importing-vehicle' },
  { label: 'Department of Infrastructure — 個人の車を家財として輸入する（Concessional RAV entry）', href: 'https://www.infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/importing-vehicle/concessional-rav-entry-approvals' },
  { label: 'NZ Customs — 家財（Household effects）', href: 'https://www.customs.govt.nz/personal/move-to-nz-permanently/household-effects' },
  { label: 'NZ Customs — 車・船・航空機（Vehicles, vessels and aircraft）', href: 'https://www.customs.govt.nz/personal/move-to-nz-permanently/vehicles-vessels-and-aircraft/' },
  { label: 'MPI — 家財と私物の輸入（バイオセキュリティ）', href: 'https://www.mpi.govt.nz/bring-send-to-nz/clearance-of-personal-goods-and-mail-to-nz/household-goods-and-personal-effects-importing-to-nz' },
];

export default function CustomsGuidePage() {
  return (
    <div className="officialHub">
      <header className="officialHubHeader">
        <a href="/" className="officialHubBrand">AuDaisuki <span>オーストラリア大好き</span></a>
        <div>🇦🇺 <span>引越し・通関ガイド</span> 🇳🇿</div>
      </header>
      <main className="officialHubMain guide">
        <div className="officialHubIntro">
          <span className="kicker">MOVING &amp; CUSTOMS GUIDE / 引越し・通関ガイド</span>
          <h1>オーストラリア・NZへの引越しと通関<br /><small>Bringing your belongings and vehicle — explained in Japanese</small></h1>
          <p>
            日本からオーストラリアやニュージーランドへ引越すときに、荷物や車をどうやって送り、税関（カスタムズ）と検疫（バイオセキュリティ）でどんな手続きが必要かを、
            両国の政府の公式情報をもとにまとめました。
          </p>
          <p className="en">Written with input from a licensed customs broker. Always confirm the latest rules on the official websites below before you ship.</p>
        </div>

        <nav className="guideToc" aria-label="目次">
          <a href="#airport">✈️ 空港で：手荷物の申告</a>
          <a href="#au-effects">🇦🇺 家財を送る（オーストラリア）</a>
          <a href="#nz-effects">🇳🇿 家財を送る（ニュージーランド）</a>
          <a href="#au-vehicle">🚗 車の輸入（オーストラリア）</a>
          <a href="#nz-vehicle">🚙 車の輸入（ニュージーランド）</a>
          <a href="#cusmode">💬 NZの通関の相談</a>
        </nav>

        <section id="airport" className="guideSection">
          <h2>✈️ 空港で：手荷物の申告</h2>
          <p>オーストラリアもニュージーランドも、自然や農業を守るための検疫がとても厳しい国です。</p>
          <ul>
            <li><b>食べ物は「迷ったら申告」。</b>日本の食品（肉・魚の加工品、乾物、お菓子、調味料など）は、入国カードで申告してください。申告すれば、問題のない物はそのまま持ち込めることが多く、持ち込めない物は空港で廃棄するだけで済みます。</li>
            <li><b>申告しないで見つかると罰金の対象</b>になり、ビザに影響する場合もあります。</li>
            <li>植物・種・土の付いた物（靴やアウトドア用品も）、動物由来の製品も申告が必要です。靴やキャンプ用品はきれいに洗ってから持って行きましょう。</li>
            <li>処方薬は、医師の処方箋や英文の説明書を一緒に持って行くと安心です。</li>
            <li>お酒やたばこには免税範囲があり、超える分には税金がかかります。</li>
          </ul>
        </section>

        <section id="au-effects" className="guideSection">
          <h2>🇦🇺 家財を船便・航空便で送る（オーストラリア）</h2>
          <p>本人と別に届く荷物（家具、衣類、生活用品など）は「Unaccompanied Personal Effects（UPE）」と呼ばれます。</p>
          <ol>
            <li><b>B534（Unaccompanied Personal Effects Statement）</b>という申告書で通関します。日本語版がありますが、<b>提出は英語で記入</b>する必要があります。</li>
            <li>パスポートのコピーと、<b>英語の荷物リスト（インベントリー）</b>を用意します。自分で梱包した場合は中身を英語で詳しく書きましょう。</li>
            <li>条件を満たす個人の家財は、関税や消費税（GST）がかからない場合があります。ただしB534では、<b>所有期間が12か月未満の物は申告が必要</b>で、関税・税金の対象になると定められています。ビザの種類によっても扱いが変わるため、ABFの公式ページで確認してください。</li>
            <li><b>家財はすべて検疫（DAFF）の検査対象</b>で、検査料がかかります。木製品・食品・アウトドア用品・使用済みの掃除機などは特に注意が必要です。土や汚れを落としてから梱包してください。</li>
            <li>お酒やたばこは家財と一緒に送っても課税されます。</li>
          </ol>
        </section>

        <section id="nz-effects" className="guideSection">
          <h2>🇳🇿 家財を船便・航空便で送る（ニュージーランド）</h2>
          <ol>
            <li><b>NZCS 218（Unaccompanied Personal Baggage Declaration）</b>に記入します。パスポートのコピー、<b>荷物リスト</b>、新しい物の<b>購入レシート</b>も必要です。</li>
            <li>バイオセキュリティ上注意が必要な物を送る場合は、MPIの「Personal Effects Supplementary Declaration」も記入すると手続きがスムーズです。</li>
            <li>関税・GST（15%）の免除（コンセッション）を受けるには、例えば<b>海外で90日以上所有・使用した個人用の物</b>であることなど、いくつかの条件があります。条件を満たさない物には関税とGSTがかかります。</li>
            <li>家財の荷物ごとに<b>Goods Levy（手数料）</b>がかかります。</li>
            <li>荷物はMPI認定の施設で検査されます。きれいな状態で送ることが、早く受け取るいちばんの近道です。</li>
          </ol>
        </section>

        <section id="au-vehicle" className="guideSection">
          <h2>🚗 車を輸入する（オーストラリア）</h2>
          <p className="warn"><b>重要：</b>オーストラリアでは、<b>船に積む前に政府の輸入許可（Import approval）を取らなければいけません</b>。許可なしに車を輸入することは法律違反です。</p>
          <ul>
            <li>申請はインフラ省のオンラインシステム「ROVER」で行います（申請料あり）。</li>
            <li>引越しで自分の車を持って行く場合の「個人の家財としての輸入（Concessional RAV entry approval）」には、主に次の条件があります：
              <ul>
                <li>海外に住んでいる間に購入した自分の車であること</li>
                <li>オーストラリアに永住目的で到着する前に、<b>12か月以上続けて所有</b>していること</li>
                <li>過去5年以内に同じ制度で車を輸入していないこと</li>
              </ul>
            </li>
            <li>ワーキングホリデーなど一時的な滞在の場合、この制度は使えません。</li>
            <li>許可を取った後も、オーストラリアの基準（ADR）を満たす改造や、州での登録手続きが必要です。車は検疫のため、<b>土や泥を完全に落とした状態</b>で送ってください。</li>
          </ul>
        </section>

        <section id="nz-vehicle" className="guideSection">
          <h2>🚙 車を輸入する（ニュージーランド）</h2>
          <ul>
            <li>初めてNZに移住する人などは、<b>出発（または船積み）の前に1年以上、海外で自分で所有・使用した車</b>であれば、関税とGSTが免除される場合があります（Concession Reference 80）。</li>
            <li>免除を受けると、一定期間（通常2年間）その車を売らないという<b>誓約書（Deed of Undertaking）</b>が必要です。</li>
            <li>条件を満たさない場合、乗用車の関税は0%ですが、<b>車の価格・運賃・保険の合計にGST 15%</b>がかかります。</li>
            <li>NZの安全・排出ガス基準を満たさない車は登録できません。<b>船積みの前に</b>、NZTA（NZ運輸局）の認定を受けた検査機関で基準を満たすか確認しましょう。</li>
            <li>到着後、MPIのバイオセキュリティ検査と構造検査（エントリー・サーティフィケーション）を受けてから登録します。車は<b>完全に清掃した状態</b>で送ってください。</li>
          </ul>
        </section>

        <CusmodeReferral />

        <section className="toolNote">
          <h2>ご注意 / Please note</h2>
          <ul>
            <li>このページは一般的な案内です。制度や条件は変わることがあり、個別の状況によって必要な手続きは異なります。荷物や車を送る前に、必ず下の公式サイトで最新情報を確認してください。</li>
            <li>この情報は法律・税務のアドバイスではありません。</li>
          </ul>
        </section>

        <section className="toolNote">
          <h2>公式情報 / Official sources</h2>
          <ul className="sourceList">
            {sources.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener">{s.label} ↗</a></li>
            ))}
          </ul>
          <p className="updated">最終確認日：2026年11月12日 / Last checked 12 November 2026</p>
        </section>

        <section className="toolCrossLink">
          <a href="/pay-check">💰 <b>給料チェック：あなたの時給は最低賃金以上？</b><small>Free pay checker for Australia and New Zealand →</small></a>
        </section>

        <a className="legalBack" href="/">← AuDaisuki ホーム / Back to home</a>
      </main>
    </div>
  );
}
