import LanguageSwitcher from "./LanguageSwitcher";\n\nconst navItems = [
  { ja: "ホーム", en: "Home", href: "#top" },
  { ja: "仕事", en: "Jobs", href: "#classifieds" },
  { ja: "住まい", en: "Housing", href: "#classifieds" },
  { ja: "売買", en: "Buy & Sell", href: "#classifieds" },
  { ja: "美容・生活", en: "Beauty & Life", href: "#businesses" },
  { ja: "グルメ", en: "Food", href: "#businesses" },
  { ja: "日系ビジネス", en: "Japanese Business", href: "#companies" },
  { ja: "大使館・領事館", en: "Embassy & Consulates", href: "#embassy" },
  { ja: "ニュース", en: "News", href: "/official-news" },
  { ja: "イベント", en: "Events", href: "#official-news" },
];

const areas = [
  { label: "全国 / Australia", href: "/locations/australia" },
  { label: "NSW / Sydney", href: "/locations/nsw-sydney" },
  { label: "VIC / Melbourne", href: "/locations/vic-melbourne" },
  { label: "QLD / Brisbane", href: "/locations/qld-brisbane" },
  { label: "QLD / Gold Coast", href: "/locations/qld-gold-coast" },
  { label: "WA / Perth", href: "/locations/wa-perth" },
  { label: "SA / Adelaide", href: "/locations/sa-adelaide" },
  { label: "ACT / Canberra", href: "/locations/act-canberra" },
  { label: "TAS / Tasmania", href: "/locations/tas-tasmania" },
  { label: "NT / Darwin", href: "/locations/nt-darwin" },
];

const directory = [
  {
    name: "LAMP HAIR",
    ja: "日本人スタイリスト・日本のヘア技術",
    en: "Japanese stylists and Japanese hair technology",
    type: "ヘアサロン / Hair",
    place: "Sydney, NSW",
    web: "https://www.lamphair.com.au/",
    instagram: "https://www.instagram.com/lamp_hair/",
  },
  {
    name: "Sumi Nails",
    ja: "日本式ネイル・おもてなし",
    en: "Japanese nail salon and omotenashi service",
    type: "ネイル / Nails",
    place: "Sydney, NSW",
    web: "https://suminails.com/",
  },
  {
    name: "Genki Mart",
    ja: "日本食材・食品スーパー",
    en: "Japanese groceries with Brisbane and Sydney stores",
    type: "食料品 / Grocery",
    place: "QLD + Sydney",
    web: "https://genkimart.com.au/",
    instagram: "https://www.instagram.com/genkimart/",
  },
  {
    name: "ASSORT Melbourne",
    ja: "日本式ヘアデザイン・日英対応",
    en: "Japanese hairdressing with Japanese/English service",
    type: "ヘアサロン / Hair",
    place: "Collingwood, VIC",
    web: "https://au.assort-hair.com/",
    instagram: "https://www.instagram.com/assort_melbourne/",
  },
  {
    name: "KOMEYUI",
    ja: "日本食文化を伝えるレストラン",
    en: "Japanese restaurant featured by JETRO",
    type: "レストラン / Restaurant",
    place: "South Melbourne, VIC",
    web: "https://komeyui.com.au/",
    instagram: "https://www.instagram.com/komeyui_melb/",
    facebook: "https://www.facebook.com/Komeyui/",
  },
  {
    name: "hair plus",
    ja: "日本人美容師経営・日本語対応",
    en: "Japanese-stylist-owned salon with Japanese service",
    type: "ヘアサロン / Hair",
    place: "Perth, WA",
    web: "https://www.hairplus-perth.com/",
  },
  {
    name: "Sono Japanese Restaurant",
    ja: "伝統的な日本料理",
    en: "Traditional Japanese dining at Portside Wharf",
    type: "レストラン / Restaurant",
    place: "Hamilton, QLD",
    web: "https://sonorestaurant.com.au/",
    instagram: "https://www.instagram.com/sono_restaurant/",
  },
  {
    name: "Itoshin",
    ja: "京都に着想を得た日本料理",
    en: "Kyoto-inspired Japanese restaurant",
    type: "レストラン / Restaurant",
    place: "Mermaid Beach, QLD",
    web: "https://www.itoshin.com.au/",
    instagram: "https://www.instagram.com/itoshinjapaneserestaurant/",
  },
];

const missions = [
  {
    city: "キャンベラ / Canberra",
    name: "在オーストラリア日本国大使館 / Embassy of Japan",
    area: "管轄 Jurisdiction: ACT",
    address: "112 Empire Circuit, Yarralumla ACT 2600",
    phone: "(02) 6273 3244",
    href: "https://www.au.emb-japan.go.jp/",
  },
  {
    city: "シドニー / Sydney",
    name: "在シドニー日本国総領事館 / Consulate-General",
    area: "管轄 Jurisdiction: NSW & NT",
    address: "Level 12, 1 O'Connell Street, Sydney NSW 2000",
    phone: "(02) 9250 1000",
    href: "https://www.sydney.au.emb-japan.go.jp/",
  },
  {
    city: "メルボルン / Melbourne",
    name: "在メルボルン日本国総領事館 / Consulate-General",
    area: "管轄 Jurisdiction: VIC, TAS & SA",
    address: "25th Floor, 570 Bourke Street, Melbourne VIC 3000",
    phone: "(03) 9679 4510",
    href: "https://www.melbourne.au.emb-japan.go.jp/",
  },
  {
    city: "ブリスベン / Brisbane",
    name: "在ブリスベン日本国総領事館 / Consulate-General",
    area: "管轄 Jurisdiction: QLD (excluding Cairns office area)",
    address: "Level 17, 12 Creek Street, Brisbane QLD 4000",
    phone: "(07) 3221 5188",
    href: "https://www.brisbane.au.emb-japan.go.jp/",
  },
  {
    city: "パース / Perth",
    name: "在パース日本国総領事館 / Consulate-General",
    area: "管轄 Jurisdiction: WA",
    address: "U22 / Level 2, 111 Colin Street, West Perth WA 6005",
    phone: "(08) 9480 1800",
    href: "https://www.perth.au.emb-japan.go.jp/",
  },
  {
    city: "ケアンズ / Cairns",
    name: "在ケアンズ領事事務所 / Consular Office of Japan",
    area: "管轄 Jurisdiction: North & Far North QLD",
    address: "Level 15, Cairns Corporate Tower, 15 Lake Street, Cairns QLD 4870",
    phone: "(07) 4051 5177",
    href: "https://www.brisbane.au.emb-japan.go.jp/itpr_en/about_cairns.html",
  },
];

const officialNews = [
  {
    date: "2026.09.18",
    region: "Australia",
    kind: "募集 / Opportunity",
    titleJa: "2027年JETプログラム応募受付開始",
    titleEn: "Applications open for the 2027 JET Programme",
    source: "在オーストラリア日本国大使館 / Embassy of Japan",
    href: "https://www.au.emb-japan.go.jp/itpr_en/education_jet_en.html",
  },
  {
    date: "2026.09.11",
    region: "Australia",
    kind: "イベント / Events",
    titleJa: "日豪友好協力基本条約署名50周年イベントカレンダー",
    titleEn: "50th Anniversary Japan–Australia events calendar",
    source: "在オーストラリア日本国大使館 / Embassy of Japan",
    href: "https://www.au.emb-japan.go.jp/itprtop_en/11_000001_02160.html",
  },
  {
    date: "2026.09.01",
    region: "NT / Darwin",
    kind: "領事 / Consular",
    titleJa: "ダーウィン領事出張サービスのお知らせ",
    titleEn: "Darwin consular outreach service notice",
    source: "在シドニー日本国総領事館 / Sydney Consulate-General",
    href: "https://www.sydney.au.emb-japan.go.jp/index_j.htm",
  },
  {
    date: "2026.08.25",
    region: "NSW / NT",
    kind: "旅券 / Passport",
    titleJa: "マイナポータルからのパスポートオンライン申請開始",
    titleEn: "Online passport applications via Mynaportal",
    source: "在シドニー日本国総領事館 / Sydney Consulate-General",
    href: "https://www.sydney.au.emb-japan.go.jp/itpr_ja/my_number_passport.html",
  },
  {
    date: "2026.09.14",
    region: "VIC / TAS / SA",
    kind: "ビザ / Visa",
    titleJa: "ビザ・渡航情報を更新",
    titleEn: "Visa & Travel information updated",
    source: "在メルボルン日本国総領事館 / Melbourne Consulate-General",
    href: "https://www.melbourne.au.emb-japan.go.jp/itpr_en/consular.html",
  },
  {
    date: "2026.09",
    region: "QLD",
    kind: "地域情報 / Community",
    titleJa: "ブリスベン総領事館「Consulate Updates」9月号",
    titleEn: "Brisbane Consulate Updates — September issue",
    source: "在ブリスベン日本国総領事館 / Brisbane Consulate-General",
    href: "https://www.brisbane.au.emb-japan.go.jp/itpr_en/jicc_newsletters.html",
  },
  {
    date: "2026.09.18",
    region: "WA / Perth",
    kind: "日豪交流 / Community",
    titleJa: "兵庫県・西オーストラリア州 姉妹提携45周年関連訪問",
    titleEn: "Hyogo–Western Australia sister-state 45th anniversary visit",
    source: "在パース日本国総領事館 / Perth Consulate-General",
    href: "https://www.perth.au.emb-japan.go.jp/itpr_en/11_000001_00878.html",
  },
];

const upcomingJapanEvents = [
  {
    date: "23–30 Sep",
    place: "Perth, WA",
    titleJa: "UWA柔道クラブ 日豪柔道交流",
    titleEn: "UWA Judo Club Legacy Japan–Australia Judo Exchange",
  },
  {
    date: "24 Sep",
    place: "Adelaide, SA",
    titleJa: "日本映画上映「The Making of a Japanese」",
    titleEn: "Japanese Film Screening: The Making of a Japanese",
  },
  {
    date: "26 Sep–20 Dec",
    place: "Australia",
    titleJa: "日本映画祭オーストラリア 2026",
    titleEn: "Japanese Film Festival Australia 2026",
  },
];

const corporateNames = [
  "ANA 全日本空輸",
  "Japan Airlines 日本航空",
  "Mitsubishi Australia 三菱商事",
  "Mitsui & Co. 三井物産",
  "Sumitomo Australia 住友商事",
  "ITOCHU Australia 伊藤忠",
  "Marubeni Australia 丸紅",
  "Sony Australia ソニー",
  "Panasonic Australia パナソニック",
  "MUFG Bank 三菱UFJ銀行",
  "Mizuho Bank みずほ銀行",
  "SMBC 三井住友銀行",
];

export default function Home() {
  return (
    <>
      <header id="top">
        <div className="utility">
          <span>🇯🇵 Japan × Australia 🇦🇺</span>
          <span className="utilityRight"><LanguageSwitcher/><span className="utilitySep">｜</span><a className="loginLink" href="/login">ログイン / Login</a></span>
        </div>

        <div className="brandRow">
          <a className="brand" href="#top" aria-label="AU大好き home">
            <strong>AU<span>大好き</span></strong>
            <small>オーストラリア生活・コミュニティ情報<br/><i>Australia life & community portal</i></small>
          </a>
          <a className="postButton" href="#classifieds">＋ 掲載する <span>Post</span></a>
        </div>

        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.ja} href={item.href}>
              <b className="jaOnly">{item.ja}</b>
              <small className="enOnly">{item.en}</small>
            </a>
          ))}
        </nav>

        <div className="locations" aria-label="Location filter">
          <b>📍 地域 / Location</b>
          {areas.map((area) => <a className="locationChip" key={area.href} href={area.href}>{area.label}</a>)}
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroCopy">
            <div className="eyebrow">日本人のオーストラリア生活を、もっと身近に。 / Australia, closer to Japan.</div>
            <h1>暮らす。働く。<br/>食べる。つながる。</h1>
            <p className="jp jaOnly">仕事、住まい、生活サービス、日本食、コミュニティ、そして大使館・領事館からの公式情報まで。</p>
            <p className="en enOnly">Jobs, housing, Japanese-speaking services, food, community and official Embassy & Consulate information — all in one place.</p>
            <div className="heroActions">
              <a href="#businesses" className="primary">日本語サービスを探す <span>Find Japanese services</span></a>
              <a href="#embassy" className="secondary">大使館・領事館 <span>Official contacts</span></a>
            </div>
          </div>
          <aside className="quick">
            <figure className="quickPhoto">
              <img
                src="https://images.unsplash.com/photo-1766323108378-8d101fa9f9ee?auto=format&fit=crop&q=78&w=1200"
                alt="People dining near the Sydney Opera House in Australia"
                loading="eager"
              />
              <figcaption>🇯🇵 日本とオーストラリアを、もっと近くに。 <span>Japan × Australia</span></figcaption>
            </figure>
            <h2>よく使う情報 <small>Quick access</small></h2>
            <a href="#classifieds">💼 仕事を探す <span>Jobs</span></a>
            <a href="#classifieds">🏠 住まいを探す <span>Housing</span></a>
            <a href="#businesses">✂️ 日本語対応サービス <span>Japanese-speaking</span></a>
            <a href="#embassy">🇯🇵 大使館・領事館 <span>Consular help</span></a>
            <a href="/official-news">📣 公式お知らせ <span>Official notices</span></a>
          </aside>
        </section>

        <section className="visualStory" aria-label="Japan Australia community">
          <article>
            <img
              src="https://images.unsplash.com/photo-1751337034616-576f197c0860?auto=format&fit=crop&q=76&w=1200"
              alt="Japanese restaurant interior with chefs at work"
              loading="lazy"
            />
            <div>
              <b>食べる / Eat</b>
              <span>日本の味をオーストラリアで<br/>Japanese food across Australia</span>
              <a href="https://unsplash.com/photos/customers-watch-chefs-working-in-a-japanese-restaurant-YNtE2GvjbOA" target="_blank" rel="noreferrer">Photo: Unsplash ↗</a>
            </div>
          </article>
          <article>
            <img
              src="https://images.unsplash.com/photo-1641352347307-4fd2c8af1702?auto=format&fit=crop&q=76&w=1200"
              alt="Japanese sushi served at a restaurant in Brisbane"
              loading="lazy"
            />
            <div>
              <b>見つける / Discover</b>
              <span>レストラン・ショップ・サービス<br/>Restaurants, shops & services</span>
              <a href="https://unsplash.com/photos/a-plate-of-food-on-a-wooden-table-35lbh8uLAok" target="_blank" rel="noreferrer">Photo: Unsplash ↗</a>
            </div>
          </article>
          <article>
            <img
              src="https://images.unsplash.com/photo-1766323108378-8d101fa9f9ee?auto=format&fit=crop&q=76&w=1200"
              alt="Sydney Opera House and people enjoying the waterfront"
              loading="lazy"
            />
            <div>
              <b>つながる / Connect</b>
              <span>仕事・暮らし・コミュニティ<br/>Work, life & community</span>
              <a href="https://unsplash.com/photos/people-dining-with-sydney-opera-house-in-background-MIdqb8Sq9_o" target="_blank" rel="noreferrer">Photo: Unsplash ↗</a>
            </div>
          </article>
        </section>

        <section id="businesses" className="section">
          <div className="sectionHead">
            <div>
              <span className="kicker">DIRECTORY</span>
              <h2>日本語で探せるビジネス <small>Japanese Business & Services</small></h2>
              <p>公式サイトや公開情報を確認した店舗・サービスから掲載を開始しています。</p>
              <p className="en">A curated starter directory using current public and official business information.</p>
            </div>
            <a className="textLink" href="#companies">日系企業も見る / Corporate directory →</a>
          </div>

          <div className="categoryChips">
            {["美容 Hair & Beauty","ネイル Nails","日本食 Japanese Food","食料品 Grocery","医療 Health","会計・法律 Professional","教育 Education"].map(x => <span key={x}>{x}</span>)}
          </div>

          <div className="businessGrid">
            {directory.map((business) => (
              <article className="businessCard" key={business.name}>
                <div className="cardTop">
                  <span className="badge">{business.type}</span>
                  <span className="checked">✓ 公開情報確認 / Checked</span>
                </div>
                <h3>{business.name}</h3>
                <p className="place">📍 {business.place}</p>
                <p className="jp jaOnly">{business.ja}</p>
                <p className="en enOnly">{business.en}</p>
                <div className="links">
                  <a href={business.web} target="_blank" rel="noreferrer">Website ↗</a>
                  {"instagram" in business && business.instagram ? <a href={business.instagram} target="_blank" rel="noreferrer">Instagram ↗</a> : null}
                  {"facebook" in business && business.facebook ? <a href={business.facebook} target="_blank" rel="noreferrer">Facebook ↗</a> : null}
                </div>
              </article>
            ))}
          </div>

          <div className="directoryNote">
            <b>店舗オーナーの方へ / Business owners</b>
            <span>掲載情報の修正・追加、写真、求人、イベント情報は今後「この掲載を管理 / Claim this listing」から申請できるようにします。</span>
          </div>
        </section>

        <section id="companies" className="section corporateSection">
          <div className="sectionHead">
            <div>
              <span className="kicker">JAPAN × AUSTRALIA</span>
              <h2>日系企業・主要団体 <small>Japanese Companies & Organisations</small></h2>
              <p>シドニー日本商工会議所の2026年公開会員情報など、信頼できる一次情報を基に案内します。</p>
            </div>
          </div>
          <div className="companyCloud">
            {corporateNames.map(name => <span key={name}>{name}</span>)}
          </div>
          <div className="orgGrid">
            <a href="https://jcci.org.au/member-links/" target="_blank" rel="noreferrer"><b>シドニー日本商工会議所</b><small>Japan Chamber of Commerce & Industry, Sydney</small></a>
            <a href="https://www.jetro.go.jp/australia/" target="_blank" rel="noreferrer"><b>JETRO シドニー</b><small>Japan External Trade Organization</small></a>
            <a href="https://jpf.org.au/" target="_blank" rel="noreferrer"><b>国際交流基金シドニー日本文化センター</b><small>The Japan Foundation, Sydney</small></a>
            <a href="https://www.japan.travel/en/au/" target="_blank" rel="noreferrer"><b>JNTO</b><small>Japan National Tourism Organization</small></a>
          </div>
          <p className="sourceNote">※ 企業名は推薦順位ではありません。公開されている現行の会員・組織情報から代表例を掲載しています。 / Company names are examples, not rankings or endorsements.</p>
        </section>

        <section id="embassy" className="section embassySection">
          <div className="sectionHead">
            <div>
              <span className="kicker">OFFICIAL JAPAN</span>
              <h2>日本大使館・総領事館 <small>Embassy & Consulates in Australia</small></h2>
              <p>お住まいの州・地域により管轄が異なります。旅券、証明、ビザ等は必ず管轄公館の最新案内をご確認ください。</p>
            </div>
          </div>
          <div className="missionGrid">
            {missions.map((mission) => (
              <article className="missionCard" key={mission.city}>
                <h3>{mission.city}</h3>
                <b>{mission.name}</b>
                <p className="jurisdiction">{mission.area}</p>
                <p>{mission.address}</p>
                <p>☎ {mission.phone}</p>
                <a href={mission.href} target="_blank" rel="noreferrer">公式サイト / Official website ↗</a>
              </article>
            ))}
          </div>
          <div className="officialDisclaimer">AU大好きは日本政府・大使館・総領事館とは独立したコミュニティサイトです。緊急時・申請手続は必ず各公館の公式サイトをご利用ください。<br/><span>Audaisuki is an independent community portal and is not affiliated with the Government of Japan. Always confirm consular procedures on the official mission website.</span></div>
        </section>

        <section id="official-news" className="section newsSection">
          <div className="sectionHead">
            <div>
              <span className="kicker">OFFICIAL JAPAN × COMMUNITY</span>
              <h2>大使館・領事館ニュース <small>Embassy, Consulate & Community Updates</small></h2>
              <p>生活に役立つ領事情報、旅券・ビザ、募集、地域イベントを公式ソースからまとめています。</p>
              <p className="officialEnglish">Practical official information for Japanese residents and the wider Japan–Australia community.</p>
            </div>
            <a className="officialMore" href="/official-news">すべて見る / View official hub →</a>
          </div>

          <div className="eventStrip">
            <div className="eventStripTitle"><b>今週から / Coming up</b><span>Official Japan–Australia event calendar</span></div>
            {upcomingJapanEvents.map((event) => (
              <article key={event.date + event.titleJa}>
                <time>{event.date}</time>
                <b>{event.titleJa}</b>
                <span>{event.titleEn}</span>
                <small>📍 {event.place}</small>
              </article>
            ))}
          </div>

          <div className="newsList">
            {officialNews.map((news) => (
              <a href={news.href} target="_blank" rel="noreferrer" key={news.date + news.titleJa}>
                <time>{news.date}</time>
                <div>
                  <div className="newsMeta"><span>{news.region}</span><span>{news.kind}</span></div>
                  <b>{news.titleJa}</b>
                  <span>{news.titleEn}</span>
                  <small>公式情報 / Official source: {news.source}</small>
                </div>
                <strong>↗</strong>
              </a>
            ))}
          </div>

          <div className="officialSourceLine">
            <span>最終確認 / Last reviewed: 21 Sep 2026</span>
            <a href="/official-news">地域別の領事館・重要手続を見る / Find your consulate & essential services →</a>
          </div>
        </section>

        <section id="classifieds" className="section">
          <div className="sectionHead">
            <div>
              <span className="kicker">COMMUNITY</span>
              <h2>クラシファイド・コミュニティ <small>Classifieds & Community</small></h2>
              <p>州 → 都市・地域 → サバーブで絞り込める全国共通の掲示板を準備しています。</p>
            </div>
          </div>
          <div className="classifiedGrid">
            {[
              ["💼","求人・仕事","Jobs","日本語求人、ローカル求人、企業採用"],
              ["🏠","住まい","Housing","シェア、賃貸、短期滞在"],
              ["🛍️","売ります・買います","Buy & Sell","家具、家電、車、自転車"],
              ["🤝","友達・仲間","Friends & Community","趣味、スポーツ、言語交換"],
            ].map(([icon,ja,en,desc]) => (
              <article key={ja}><span>{icon}</span><h3>{ja}<small>{en}</small></h3><p>{desc}</p><a href="#top">近日公開 / Coming soon</a></article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footerBrand">
          <b>AuDaisuki <span>オーストラリア大好き</span> <em>🇯🇵 🇦🇺</em></b>
          <p>オーストラリアで暮らす日本人と、日本に興味のあるオーストラリアのためのコミュニティポータル。<br/><span>Japanese community & information portal for Australia.</span></p>
        </div>
        <div className="footerLinks">
          <a href="/about">このサイトについて / About</a>
          <a href="/privacy">プライバシー / Privacy</a>
          <a href="/terms">利用規約 / Terms</a>
          <a href="/contact">お問い合わせ / Contact</a>
          <a href="/accessibility">アクセシビリティ / Accessibility</a>
          <a href="#embassy">大使館・領事館 / Embassy</a>
        </div>
        <p className="independenceNote">Independent Japanese–Australian community website. Not affiliated with the Government of Japan, the Embassy of Japan, or any Australian government authority.</p>
        <small>© 2026 Audaisuki. Independent community portal. Business and official information last reviewed September 2026.</small>
      </footer>
    </>
  );
}
