export const metadata = {
  title: "Official Japan Updates | AuDaisuki",
  description: "Embassy, consulate, passport, visa, safety and Japan–Australia community updates for people across Australia."
};

const updates = [
  {
    date: "18 Sep 2026",
    region: "NSW / NT",
    category: "Police Certificate",
    ja: "警察証明の受取状況を更新",
    en: "Sydney police certificate collection status updated",
    note: "The Sydney Consulate-General says certificates applied for by 30 July 2026 have arrived. Collection does not require an online appointment; eligible distant NSW and NT residents may use the postal collection option described by the Consulate.",
    href: "https://www.sydney.au.emb-japan.go.jp/itpr_en/police_certificate.html",
    source: "Consulate-General of Japan in Sydney"
  },
  {
    date: "15 Sep 2026",
    region: "QLD",
    category: "Working Holiday Visa",
    ja: "ワーキングホリデービザ予約困難時の案内",
    en: "Working Holiday visa appointment guidance",
    note: "Brisbane advises applicants intending to depart Australia by 25 November 2026 who cannot obtain an appointment to email the Visa Section with the requested details. Later departures should continue checking the online booking system.",
    href: "https://www.brisbane.au.emb-japan.go.jp/itpr_en/visa_visa_wh.html",
    source: "Consulate-General of Japan in Brisbane"
  },
  {
    date: "18 Sep 2026",
    region: "Australia",
    category: "Opportunity",
    ja: "2027年JETプログラム応募受付開始",
    en: "Applications open for the 2027 JET Programme",
    note: "Australian applications are open. The Embassy states the deadline is 5:00 pm Thursday 5 November 2026 (AEDT).",
    href: "https://www.au.emb-japan.go.jp/itpr_en/education_jet_en.html",
    source: "Embassy of Japan in Australia"
  },
  {
    date: "11 Sep 2026",
    region: "Australia",
    category: "Events",
    ja: "日豪友好協力基本条約署名50周年イベントカレンダー",
    en: "50th Anniversary Japan–Australia Events Calendar",
    note: "Official calendar covering Japan-related events across Australian states and territories.",
    href: "https://www.au.emb-japan.go.jp/itprtop_en/11_000001_02160.html",
    source: "Embassy of Japan in Australia"
  },
  {
    date: "1 Sep 2026",
    region: "NT / Darwin",
    category: "Consular",
    ja: "ダーウィン領事出張サービス",
    en: "Darwin consular outreach service",
    note: "Sydney Consulate-General publishes outreach notices for residents of the Northern Territory.",
    href: "https://www.sydney.au.emb-japan.go.jp/index_j.htm",
    source: "Consulate-General of Japan in Sydney"
  },
  {
    date: "25 Aug 2026",
    region: "NSW / NT",
    category: "Passport",
    ja: "マイナポータルからのパスポートオンライン申請",
    en: "Online passport applications through Mynaportal",
    note: "Eligible holders of a valid My Number Card for overseas residents can use the online process described by the Sydney Consulate-General.",
    href: "https://www.sydney.au.emb-japan.go.jp/itpr_ja/my_number_passport.html",
    source: "Consulate-General of Japan in Sydney"
  },
  {
    date: "14 Sep 2026",
    region: "VIC / TAS / SA",
    category: "Visa & Travel",
    ja: "ビザ・渡航情報",
    en: "Visa & Travel information",
    note: "Melbourne Consulate-General's current visa and travel information hub.",
    href: "https://www.melbourne.au.emb-japan.go.jp/itpr_en/consular.html",
    source: "Consulate-General of Japan in Melbourne"
  },
  {
    date: "Sep 2026",
    region: "QLD",
    category: "Newsletter",
    ja: "「Consulate Updates」9月号",
    en: "Consulate Updates — September issue",
    note: "Queensland events, programs, scholarships, contests and Japan-related community information.",
    href: "https://www.brisbane.au.emb-japan.go.jp/itpr_en/jicc_newsletters.html",
    source: "Consulate-General of Japan in Brisbane"
  },
  {
    date: "18 Sep 2026",
    region: "WA / Perth",
    category: "Community",
    ja: "兵庫県・西オーストラリア州 姉妹提携45周年関連訪問",
    en: "Hyogo–Western Australia sister-state 45th anniversary visit",
    note: "Official Perth Consulate-General community and bilateral exchange update.",
    href: "https://www.perth.au.emb-japan.go.jp/itpr_en/11_000001_00878.html",
    source: "Consulate-General of Japan in Perth"
  }
];

const missions = [
  ["ACT / Canberra","Embassy of Japan","ACT","https://www.au.emb-japan.go.jp/"],
  ["NSW / Sydney","Consulate-General of Japan in Sydney","NSW & NT","https://www.sydney.au.emb-japan.go.jp/"],
  ["VIC / Melbourne","Consulate-General of Japan in Melbourne","VIC, TAS & SA","https://www.melbourne.au.emb-japan.go.jp/"],
  ["QLD / Brisbane","Consulate-General of Japan in Brisbane","Queensland","https://www.brisbane.au.emb-japan.go.jp/"],
  ["WA / Perth","Consulate-General of Japan in Perth","Western Australia","https://www.perth.au.emb-japan.go.jp/"],
  ["QLD / Cairns","Consular Office of Japan in Cairns","North & Far North Queensland","https://www.brisbane.au.emb-japan.go.jp/itpr_en/about_cairns.html"]
];

const serviceLinks = [
  ["🛂","旅券 / Passport","Passport applications, renewals and collection information are handled by the mission responsible for your area."],
  ["🛬","ビザ・渡航 / Visa & Travel","Current visa, eVISA, working holiday and travel guidance from the responsible Japanese mission."],
  ["📢","安全・注意喚起 / Safety Alerts","Scam warnings, travel and local safety information published by Japanese diplomatic missions."],
  ["🚐","領事出張 / Consular Outreach","Regional consular visits can be especially important for people living far from a Consulate-General."],
  ["🎓","留学・JET・奨学金 / Study & JET","Official opportunities, scholarships, education and exchange programmes."],
  ["🎌","イベント / Events","Japan–Australia festivals, cultural events, screenings, talks and community activities."]
];

export default function OfficialNewsPage() {
  return (
    <div className="officialHub">
      <header className="officialHubHeader">
        <a href="/" className="officialHubBrand">AuDaisuki <span>オーストラリア大好き</span></a>
        <div>🇯🇵 <span>Official Japan information guide</span> 🇦🇺</div>
      </header>

      <main className="officialHubMain">
        <div className="officialHubIntro">
          <span className="kicker">OFFICIAL JAPAN × AUSTRALIA</span>
          <h1>大使館・領事館・生活情報<br/><small>Embassy, Consulate & Community Updates</small></h1>
          <p>オーストラリアで暮らす日本人や日豪コミュニティが必要とする情報を、公式公館へのリンクとともに整理しています。</p>
          <p className="en">A practical gateway to official consular notices, passports, visas, safety information, opportunities and community events.</p>
          <div className="hubReview">最終確認 / Last reviewed: <b>23 September 2026</b></div>
        </div>

        <section className="hubImportant">
          <h2>よく使う情報 / Essential services</h2>
          <div className="hubServiceGrid">
            {serviceLinks.map(([icon, title, text]) => (
              <article key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="hubSectionHead">
            <div>
              <span className="kicker">LATEST</span>
              <h2>公式アップデート / Official Updates</h2>
            </div>
            <small>Official-source links open in a new tab.</small>
          </div>
          <div className="hubUpdateList">
            {updates.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.date + item.ja}>
                <div className="hubUpdateMeta">
                  <time>{item.date}</time>
                  <span>{item.region}</span>
                  <span>{item.category}</span>
                </div>
                <h3>{item.ja}</h3>
                <b>{item.en}</b>
                <p>{item.note}</p>
                <small>Official source: {item.source} ↗</small>
              </a>
            ))}
          </div>
        </section>

        <section className="hubEvents">
          <div className="hubSectionHead">
            <div>
              <span className="kicker">COMING UP</span>
              <h2>近日開催 / Upcoming Japan–Australia Events</h2>
            </div>
          </div>
          <div className="hubEventGrid">
            <article><time>23–30 Sep</time><h3>UWA柔道クラブ 日豪柔道交流</h3><p>UWA Judo Club Legacy Japan–Australia Judo Exchange</p><small>📍 Perth, WA</small></article>
            <article><time>24 Sep</time><h3>日本映画上映</h3><p>Japanese Film Screening: The Making of a Japanese</p><small>📍 Adelaide, SA</small></article>
            <article><time>26 Sep–20 Dec</time><h3>日本映画祭オーストラリア 2026</h3><p>Japanese Film Festival Australia 2026</p><small>📍 Canberra, Perth, Melbourne, Brisbane & Sydney</small></article>
          </div>
          <a className="hubCalendarLink" href="https://www.au.emb-japan.go.jp/itprtop_en/11_000001_02160.html" target="_blank" rel="noreferrer">大使館の公式イベントカレンダーを見る / View the Embassy's official events calendar ↗</a>
        </section>

        <section>
          <div className="hubSectionHead">
            <div>
              <span className="kicker">FIND YOUR OFFICE</span>
              <h2>お住まいの地域の公館 / Your Embassy or Consulate</h2>
            </div>
          </div>
          <div className="hubMissionGrid">
            {missions.map(([region,name,jurisdiction,href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={region}>
                <b>{region}</b>
                <h3>{name}</h3>
                <p>Jurisdiction: {jurisdiction}</p>
                <span>公式サイト / Official website ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="hubDisclaimer">
          <b>重要 / Important</b>
          <p>AuDaisuki is an independent community website and is not affiliated with the Government of Japan, the Embassy of Japan, any Consulate-General, or any Australian government authority. We provide links and short summaries for convenience. Always confirm urgent, legal, visa, passport and consular matters on the relevant official website.</p>
        </section>

        <a className="legalBack" href="/">← AuDaisuki ホーム / Back to home</a>
      </main>
    </div>
  );
}
