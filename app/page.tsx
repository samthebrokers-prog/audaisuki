import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { ja: "ホーム", en: "Home", href: "#top" },
  { ja: "仕事", en: "Jobs", href: "/classifieds" },
  { ja: "住まい", en: "Housing", href: "/classifieds" },
  { ja: "売買", en: "Buy & Sell", href: "/classifieds" },
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
  {name:"LAMP HAIR",ja:"日本人スタイリスト・日本のヘア技術",en:"Japanese stylists and Japanese hair technology",type:"ヘアサロン / Hair",place:"Sydney, NSW",web:"https://www.lamphair.com.au/",instagram:"https://www.instagram.com/lamp_hair/"},
  {name:"Sumi Nails",ja:"日本式ネイル・おもてなし",en:"Japanese nail salon and omotenashi service",type:"ネイル / Nails",place:"Sydney, NSW",web:"https://suminails.com/"},
  {name:"Genki Mart",ja:"日本食材・食品スーパー",en:"Japanese groceries with Brisbane and Sydney stores",type:"食料品 / Grocery",place:"QLD + Sydney",web:"https://genkimart.com.au/",instagram:"https://www.instagram.com/genkimart/"},
  {name:"ASSORT Melbourne",ja:"日本式ヘアデザイン・日英対応",en:"Japanese hairdressing with Japanese/English service",type:"ヘアサロン / Hair",place:"Collingwood, VIC",web:"https://au.assort-hair.com/",instagram:"https://www.instagram.com/assort_melbourne/"},
  {name:"KOMEYUI",ja:"日本食文化を伝えるレストラン",en:"Japanese restaurant featured by JETRO",type:"レストラン / Restaurant",place:"South Melbourne, VIC",web:"https://komeyui.com.au/",instagram:"https://www.instagram.com/komeyui_melb/",facebook:"https://www.facebook.com/Komeyui/"},
  {name:"hair plus",ja:"日本人美容師経営・日本語対応",en:"Japanese-stylist-owned salon with Japanese service",type:"ヘアサロン / Hair",place:"Perth, WA",web:"https://www.hairplus-perth.com/"},
  {name:"Sono Japanese Restaurant",ja:"伝統的な日本料理",en:"Traditional Japanese dining at Portside Wharf",type:"レストラン / Restaurant",place:"Hamilton, QLD",web:"https://sonorestaurant.com.au/",instagram:"https://www.instagram.com/sono_restaurant/"},
  {name:"Itoshin",ja:"京都に着想を得た日本料理",en:"Kyoto-inspired Japanese restaurant",type:"レストラン / Restaurant",place:"Mermaid Beach, QLD",web:"https://www.itoshin.com.au/",instagram:"https://www.instagram.com/itoshinjapaneserestaurant/"},
];

const missions = [
  {city:"キャンベラ / Canberra",name:"在オーストラリア日本国大使館 / Embassy of Japan",area:"管轄 Jurisdiction: ACT",address:"112 Empire Circuit, Yarralumla ACT 2600",phone:"(02) 6273 3244",href:"https://www.au.emb-japan.go.jp/"},
  {city:"シドニー / Sydney",name:"在シドニー日本国総領事館 / Consulate-General",area:"管轄 Jurisdiction: NSW & NT",address:"Level 12, 1 O'Connell Street, Sydney NSW 2000",phone:"(02) 9250 1000",href:"https://www.sydney.au.emb-japan.go.jp/"},
  {city:"メルボルン / Melbourne",name:"在メルボルン日本国総領事館 / Consulate-General",area:"管轄 Jurisdiction: VIC, TAS & SA",address:"25th Floor, 570 Bourke Street, Melbourne VIC 3000",phone:"(03) 9679 4510",href:"https://www.melbourne.au.emb-japan.go.jp/"},
  {city:"ブリスベン / Brisbane",name:"在ブリスベン日本国総領事館 / Consulate-General",area:"管轄 Jurisdiction: QLD (excluding Cairns office area)",address:"Level 17, 12 Creek Street, Brisbane QLD 4000",phone:"(07) 3221 5188",href:"https://www.brisbane.au.emb-japan.go.jp/"},
  {city:"パース / Perth",name:"在パース日本国総領事館 / Consulate-General",area:"管轄 Jurisdiction: WA",address:"U22 / Level 2, 111 Colin Street, West Perth WA 6005",phone:"(08) 9480 1800",href:"https://www.perth.au.emb-japan.go.jp/"},
  {city:"ケアンズ / Cairns",name:"在ケアンズ領事事務所 / Consular Office of Japan",area:"管轄 Jurisdiction: North & Far North QLD",address:"Level 15, Cairns Corporate Tower, 15 Lake Street, Cairns QLD 4870",phone:"(07) 4051 5177",href:"https://www.brisbane.au.emb-japan.go.jp/itpr_en/about_cairns.html"},
];

const officialNews = [
  {date:"2026.09.18",region:"Australia",kind:"募集 / Opportunity",titleJa:"2027年JETプログラム応募受付開始",titleEn:"Applications open for the 2027 JET Programme",source:"在オーストラリア日本国大使館 / Embassy of Japan",href:"https://www.au.emb-japan.go.jp/itpr_en/education_jet_en.html"},
  {date:"2026.09.11",region:"Australia",kind:"イベント / Events",titleJa:"日豪友好協力基本条約署名50周年イベントカレンダー",titleEn:"50th Anniversary Japan–Australia events calendar",source:"在オーストラリア日本国大使館 / Embassy of Japan",href:"https://www.au.emb-japan.go.jp/itprtop_en/11_000001_02160.html"},
  {date:"2026.09.01",region:"NT / Darwin",kind:"領事 / Consular",titleJa:"ダーウィン領事出張サービスのお知らせ",titleEn:"Darwin consular outreach service notice",source:"在シドニー日本国総領事館 / Sydney Consulate-General",href:"https://www.sydney.au.emb-japan.go.jp/index_j.htm"},
  {date:"2026.08.25",region:"NSW / NT",kind:"旅券 / Passport",titleJa:"マイナポータルからのパスポートオンライン申請開始",titleEn:"Online passport applications via Mynaportal",source:"在シドニー日本国総領事館 / Sydney Consulate-General",href:"https://www.sydney.au.emb-japan.go.jp/itpr_ja/my_number_passport.html"},
  {date:"2026.09.14",region:"VIC / TAS / SA",kind:"ビザ / Visa",titleJa:"ビザ・渡航情報を更新",titleEn:"Visa & Travel information updated",source:"在メルボルン日本国総領事館 / Melbourne Consulate-General",href:"https://www.melbourne.au.emb-japan.go.jp/itpr_en/consular.html"},
  {date:"2026.09",region:"QLD",kind:"地域情報 / Community",titleJa:"ブリスベン総領事館「Consulate Updates」9月号",titleEn:"Brisbane Consulate Updates — September issue",source:"在ブリスベン日本国総領事館 / Brisbane Consulate-General",href:"https://www.brisbane.au.emb-japan.go.jp/itpr_en/jicc_newsletters.html"},
  {date:"2026.09.18",region:"WA / Perth",kind:"日豪交流 / Community",titleJa:"兵庫県・西オーストラリア州 姉妹提携45周年関連訪問",titleEn:"Hyogo–Western Australia sister-state 45th anniversary visit",source:"在パース日本国総領事館 / Perth Consulate-General",href:"https://www.perth.au.emb-japan.go.jp/itpr_en/11_000001_00878.html"},
];

const upcomingJapanEvents = [
  {date:"23–30 Sep",place:"Perth, WA",titleJa:"UWA柔道クラブ 日豪柔道交流",titleEn:"UWA Judo Club Legacy Japan–Australia Judo Exchange"},
  {date:"24 Sep",place:"Adelaide, SA",titleJa:"日本映画上映「The Making of a Japanese」",titleEn:"Japanese Film Screening: The Making of a Japanese"},
  {date:"26 Sep–20 Dec",place:"Australia",titleJa:"日本映画祭オーストラリア 2026",titleEn:"Japanese Film Festival Australia 2026"},
];

const corporateNames=["ANA 全日本空輸","Japan Airlines 日本航空","Mitsubishi Australia 三菱商事","Mitsui & Co. 三井物産","Sumitomo Australia 住友商事","ITOCHU Australia 伊藤忠","Marubeni Australia 丸紅","Sony Australia ソニー","Panasonic Australia パナソニック","MUFG Bank 三菱UFJ銀行","Mizuho Bank みずほ銀行","SMBC 三井住友銀行"];

const communityPathways = [
  ["💼","求人・仕事","Jobs","仕事情報・求人掲示板を探せます。","/classifieds"],
  ["🏠","住まい","Housing","シェアハウス・住まい情報の掲示板へ進めます。","/classifieds"],
  ["🛍️","売ります・買います","Buy & Sell","家具・家電・生活用品などの売買掲示板へ進めます。","/classifieds"],
  ["🤝","友達・仲間","Friends & Community","各都市の日本人会、学校、日豪交流団体を確認できます。","/locations"],
];

export default function Home(){return <>
<header id="top"><div className="utility"><span>🇯🇵 Japan × Australia 🇦🇺</span><span className="utilityRight"><LanguageSwitcher/><span className="utilitySep">｜</span><a className="loginLink" href="/login">ログイン / Login</a></span></div>
<div className="brandRow"><a className="brand" href="#top" aria-label="AU大好き home"><strong>AU<span>大好き</span></strong><small>オーストラリア生活・コミュニティ情報<br/><i>Australia life & community portal</i></small></a><a className="postButton" href="/contact">＋ 掲載する <span>Post</span></a></div>
<nav aria-label="Main navigation">{navItems.map(item=><a key={item.ja} href={item.href}><b className="jaOnly">{item.ja}</b><small className="enOnly">{item.en}</small></a>)}</nav>
<div className="locations" aria-label="Location filter"><b>📍 地域 / Location</b>{areas.map(area=><a className="locationChip" key={area.href} href={area.href}>{area.label}</a>)}</div></header>
<main>
<section className="hero"><div className="heroCopy"><div className="eyebrow">日本人のオーストラリア生活を、もっと身近に。 / Australia, closer to Japan.</div><h1>暮らす。働く。<br/>食べる。つながる。</h1><p className="jp jaOnly">仕事、住まい、生活サービス、日本食、コミュニティ、そして大使館・領事館からの公式情報まで。</p><p className="en enOnly">Jobs, housing, Japanese-speaking services, food, community and official Embassy & Consulate information — all in one place.</p><div className="heroActions"><a href="#businesses" className="primary">日本語サービスを探す <span>Find Japanese services</span></a><a href="#embassy" className="secondary">大使館・領事館 <span>Official contacts</span></a></div></div>
<aside className="quick"><figure className="quickPhoto"><img src="https://images.unsplash.com/photo-1766323108378-8d101fa9f9ee?auto=format&fit=crop&q=78&w=1200" alt="People dining near the Sydney Opera House in Australia" loading="eager"/><figcaption>🇯🇵 日本とオーストラリアを、もっと近くに。 <span>Japan × Australia</span></figcaption></figure><h2>よく使う情報 <small>Quick access</small></h2><a href="/classifieds">💼 仕事・求人掲示板 <span>Jobs & classifieds</span></a><a href="/classifieds">🏠 住まい・掲示板 <span>Housing & classifieds</span></a><a href="#businesses">✂️ 日本語対応サービス <span>Japanese-speaking</span></a><a href="#embassy">🇯🇵 大使館・領事館 <span>Consular help</span></a><a href="/official-news">📣 公式お知らせ <span>Official notices</span></a></aside></section>
<section className="dailyNeeds" aria-label="Australia life essentials"><div className="dailyNeedsHead"><span className="kicker">AUSTRALIA LIFE / 毎日使う情報</span><h2>オーストラリア生活で、今知りたいこと。</h2><p>ビザ、仕事、住まい、友達、英語、食べる。日本人の「今日必要」にすぐ届く入口です。</p></div><div className="dailyNeedsGrid"><a href="/official-news"><span>🛂</span><b>ビザ・ワーホリ</b><small>Visa & Working Holiday</small><em>公式・領事情報</em></a><a href="/classifieds"><span>💼</span><b>仕事を探す</b><small>Jobs & local resources</small><em>求人掲示板を見る</em></a><a href="/classifieds"><span>🏠</span><b>住まいを探す</b><small>Housing & local life</small><em>地域情報を見る</em></a><a href="/locations"><span>🤝</span><b>友達・仲間</b><small>Friends & Community</small><em>地域団体を探す</em></a><a href="/locations"><span>🗣️</span><b>英語・語学交換</b><small>Language & Community</small><em>地域団体を見る</em></a><a href="#businesses"><span>🍜</span><b>日本食・買い物</b><small>Food & Shopping</small><em>店舗・サービス</em></a><a href="#embassy"><span>📣</span><b>大使館・領事館</b><small>Embassy & Consulates</small><em>公式のお知らせ</em></a><a href="/locations"><span>📍</span><b>都市から探す</b><small>Sydney・Melbourne・Brisbane・Perth</small><em>地域情報</em></a></div></section>
<section className="homeNews" aria-label="Latest news"><div className="homeNewsHead"><div><span className="kicker">LATEST / NEW</span><h2>最新ニュース <small>Australia × Japan News</small></h2></div><a href="/official-news">ニュース一覧 / All news →</a></div><div className="homeNewsGrid"><a className="homeNewsLead" href={officialNews[0].href} target="_blank" rel="noreferrer"><span className="newFlag">NEW</span><time>{officialNews[0].date}</time><strong>{officialNews[0].titleJa}</strong><b>{officialNews[0].titleEn}</b><small>{officialNews[0].source}</small></a><div className="homeNewsList">{officialNews.slice(1,5).map(news=><a href={news.href} target="_blank" rel="noreferrer" key={"home-"+news.date+news.titleJa}><div><span>{news.region}</span><time>{news.date}</time></div><strong>{news.titleJa}</strong><b>{news.titleEn}</b><em>NEW</em></a>)}</div></div></section>
<section className="visualStory" aria-label="Japan Australia community"><article><img src="https://images.unsplash.com/photo-1751337034616-576f197c0860?auto=format&fit=crop&q=76&w=1200" alt="Japanese restaurant interior with chefs at work" loading="lazy"/><div><b>食べる / Eat</b><span>日本の味をオーストラリアで<br/>Japanese food across Australia</span></div></article><article><img src="https://images.unsplash.com/photo-1641352347307-4fd2c8af1702?auto=format&fit=crop&q=76&w=1200" alt="Japanese sushi served at a restaurant in Brisbane" loading="lazy"/><div><b>見つける / Discover</b><span>レストラン・ショップ・サービス<br/>Restaurants, shops & services</span></div></article><article><img src="https://images.unsplash.com/photo-1766323108378-8d101fa9f9ee?auto=format&fit=crop&q=76&w=1200" alt="Sydney Opera House and people enjoying the waterfront" loading="lazy"/><div><b>つながる / Connect</b><span>仕事・暮らし・コミュニティ<br/>Work, life & community</span></div></article></section>
<section id="businesses" className="section"><div className="sectionHead"><div><span className="kicker">DIRECTORY</span><h2>日本語で探せるビジネス <small>Japanese Business & Services</small></h2><p>公式サイトや公開情報を確認した店舗・サービスから掲載を開始しています。</p></div><a className="textLink" href="#companies">日系企業も見る / Corporate directory →</a></div><div className="categoryChips">{["美容 Hair & Beauty","ネイル Nails","日本食 Japanese Food","食料品 Grocery","医療 Health","会計・法律 Professional","教育 Education"].map(x=><span key={x}>{x}</span>)}</div><div className="businessGrid">{directory.map(b=><article className="businessCard" key={b.name}><div className="cardTop"><span className="badge">{b.type}</span><span className="checked">✓ 公開情報確認 / Checked</span></div><h3>{b.name}</h3><p className="place">📍 {b.place}</p><p className="jp jaOnly">{b.ja}</p><p className="en enOnly">{b.en}</p><div className="links"><a href={b.web} target="_blank" rel="noreferrer">Website ↗</a>{"instagram" in b&&b.instagram?<a href={b.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>:null}{"facebook" in b&&b.facebook?<a href={b.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>:null}</div></article>)}</div><div className="directoryNote"><b>店舗オーナーの方へ / Business owners</b><span>掲載情報の修正・追加、写真、求人、イベント情報はお問い合わせから受け付けています。</span><a href="/contact">掲載情報を送る / Send listing information →</a></div></section>
<section id="companies" className="section corporateSection"><div className="sectionHead"><div><span className="kicker">JAPAN × AUSTRALIA</span><h2>日系企業・主要団体 <small>Japanese Companies & Organisations</small></h2><p>公開されている一次情報を基に案内します。</p></div></div><div className="companyCloud">{corporateNames.map(name=><span key={name}>{name}</span>)}</div><div className="orgGrid"><a href="https://jcci.org.au/member-links/" target="_blank" rel="noreferrer"><b>シドニー日本商工会議所</b><small>Japan Chamber of Commerce & Industry, Sydney</small></a><a href="https://www.jetro.go.jp/australia/" target="_blank" rel="noreferrer"><b>JETRO シドニー</b><small>Japan External Trade Organization</small></a><a href="https://jpf.org.au/" target="_blank" rel="noreferrer"><b>国際交流基金シドニー日本文化センター</b><small>The Japan Foundation, Sydney</small></a><a href="https://www.japan.travel/en/au/" target="_blank" rel="noreferrer"><b>JNTO</b><small>Japan National Tourism Organization</small></a></div></section>
<section id="embassy" className="section embassySection"><div className="sectionHead"><div><span className="kicker">OFFICIAL JAPAN</span><h2>日本大使館・総領事館 <small>Embassy & Consulates in Australia</small></h2></div></div><div className="missionGrid">{missions.map(m=><article className="missionCard" key={m.city}><h3>{m.city}</h3><b>{m.name}</b><p className="jurisdiction">{m.area}</p><p>{m.address}</p><p>☎ {m.phone}</p><a href={m.href} target="_blank" rel="noreferrer">公式サイト / Official website ↗</a></article>)}</div><div className="officialDisclaimer">AU大好きは日本政府・大使館・総領事館とは独立したコミュニティサイトです。緊急時・申請手続は必ず各公館の公式サイトをご利用ください。</div></section>
<section id="official-news" className="section newsSection"><div className="sectionHead"><div><span className="kicker">OFFICIAL JAPAN × COMMUNITY</span><h2>大使館・領事館ニュース <small>Embassy, Consulate & Community Updates</small></h2></div><a className="officialMore" href="/official-news">すべて見る / View official hub →</a></div><div className="eventStrip"><div className="eventStripTitle"><b>イベント / Events</b><span>Japan–Australia event calendar</span></div>{upcomingJapanEvents.map(e=><article key={e.date+e.titleJa}><time>{e.date}</time><b>{e.titleJa}</b><span>{e.titleEn}</span><small>📍 {e.place}</small></article>)}</div><div className="newsList">{officialNews.map(n=><a href={n.href} target="_blank" rel="noreferrer" key={n.date+n.titleJa}><time>{n.date}</time><div><div className="newsMeta"><span>{n.region}</span><span>{n.kind}</span></div><b>{n.titleJa}</b><span>{n.titleEn}</span><small>公式情報 / Official source: {n.source}</small></div><strong>↗</strong></a>)}</div></section>
<section id="classifieds" className="section"><div className="sectionHead"><div><span className="kicker">COMMUNITY</span><h2>生活・コミュニティ入口 <small>Community & Local Resources</small></h2><p>空の「Coming Soon」ではなく、現在利用できる地域情報・団体・お問い合わせへ直接つなぎます。</p></div><a className="textLink" href="/locations">全国の地域ページ / Browse regions →</a></div><div className="classifiedGrid">{communityPathways.map(([icon,ja,en,desc,href])=><article key={ja}><span>{icon}</span><h3>{ja}<small>{en}</small></h3><p>{desc}</p><a href={href}>今使える情報を見る / Explore now →</a></article>)}</div></section>
</main>
<footer><div className="footerBrand"><b>AuDaisuki <span>オーストラリア大好き</span> <em>🇯🇵 🇦🇺</em></b><p>オーストラリアで暮らす日本人と、日本に興味のあるオーストラリアのためのコミュニティポータル。<br/><span>Japanese community & information portal for Australia.</span></p></div><div className="footerLinks"><a href="/about">このサイトについて / About</a><a href="/privacy">プライバシー / Privacy</a><a href="/terms">利用規約 / Terms</a><a href="/contact">お問い合わせ / Contact</a><a href="/accessibility">アクセシビリティ / Accessibility</a><a href="#embassy">大使館・領事館 / Embassy</a></div><p className="independenceNote">Independent Japanese–Australian community website. Not affiliated with the Government of Japan, the Embassy of Japan, or any Australian government authority.</p><small>© 2026 Audaisuki. Independent community portal.</small></footer>
</>;}