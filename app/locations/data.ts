export type Resource = {
  name: string;
  type: string;
  description: string;
  href: string;
};

export type Region = {
  slug: string;
  short: string;
  ja: string;
  en: string;
  state: string;
  city: string;
  introJa: string;
  introEn: string;
  consularName: string;
  consularArea: string;
  consularUrl: string;
  localBusinesses: Array<{name:string; type:string; place:string; href:string}>;
  communityResources: Resource[];
  focus: string[];
};

export const regions: Region[] = [
  {
    slug: "australia",
    short: "全国",
    ja: "オーストラリア全国",
    en: "Australia-wide",
    state: "Australia",
    city: "Nationwide",
    introJa: "州をまたいで仕事、住まい、日本語サービス、日本食、イベント、領事情報を探せる全国入口です。",
    introEn: "The national starting point for jobs, housing, Japanese-speaking services, food, events and consular information across Australia.",
    consularName: "Embassy & Consulates of Japan in Australia",
    consularArea: "ACT, NSW, NT, VIC, TAS, SA, QLD and WA",
    consularUrl: "https://www.au.emb-japan.go.jp/",
    localBusinesses: [],
    communityResources: [
      {name:"Japan Foundation Community Organisations Map",type:"全国ディレクトリ / National directory",description:"Japanese community groups, language schools, libraries, cultural organisations and other Japan-related resources across Australia.",href:"https://sydney.jpf.go.jp/japan-related-community-organisations-in-australia/"},
      {name:"National Federation of Australia Japan Societies",type:"全国団体 / National network",description:"National network linking Australia–Japan societies and community activities across states and territories.",href:"https://austjapanfed.org.au/"},
      {name:"Japanese Film Festival Australia",type:"文化 / Culture",description:"National Japanese film programme visiting major Australian cities.",href:"https://jffau.jpf.go.jp/"}
    ],
    focus: ["Jobs across Australia","Housing by state","Japanese-speaking services","Japanese food & groceries","Events & community","Embassy & consular guidance"]
  },
  {
    slug: "nsw-sydney",
    short: "NSW",
    ja: "ニューサウスウェールズ / シドニー",
    en: "New South Wales / Sydney",
    state: "NSW",
    city: "Sydney",
    introJa: "シドニーを中心に、仕事、住まい、日本語サービス、日本食、コミュニティ、領事情報をまとめます。",
    introEn: "A Sydney and NSW community gateway for jobs, housing, Japanese services, food, events and official consular information.",
    consularName: "Consulate-General of Japan in Sydney",
    consularArea: "NSW & Northern Territory",
    consularUrl: "https://www.sydney.au.emb-japan.go.jp/",
    localBusinesses: [
      {name:"LAMP HAIR",type:"Hair / 美容",place:"Sydney, NSW",href:"https://www.lamphair.com.au/"},
      {name:"Sumi Nails",type:"Nails / ネイル",place:"Sydney, NSW",href:"https://suminails.com/"},
      {name:"Genki Mart",type:"Grocery / 日本食材",place:"Sydney, NSW",href:"https://genkimart.com.au/"}
    ],
    communityResources: [
      {name:"Japan Club of Sydney (JCS)",type:"日本人会 / Community",description:"Non-profit Japanese community organisation with social activities, newsletters, cultural events and family support.",href:"https://www.japanclubofsydney.org/english/"},
      {name:"JCS Japanese Schools",type:"教育 / Education",description:"Weekend Japanese schools serving children across Sydney, including City, Dundas and Edgecliff.",href:"https://www.japanclubofsydney.org/school/"},
      {name:"Australia-Japan Society of NSW",type:"日豪交流 / Australia–Japan",description:"Business, social, cultural and language-exchange activities connecting Australian and Japanese communities in NSW.",href:"https://australiajapansocietyofnsw.org.au/"}
    ],
    focus: ["Sydney jobs","Share housing","Japanese beauty","Japanese groceries","Community events","Sydney consular services"]
  },
  {
    slug: "vic-melbourne",
    short: "VIC",
    ja: "ビクトリア / メルボルン",
    en: "Victoria / Melbourne",
    state: "VIC",
    city: "Melbourne",
    introJa: "メルボルンとビクトリア州の日本人・日豪コミュニティ向け地域ページです。",
    introEn: "Local information for the Japanese and Japan–Australia community in Melbourne and Victoria.",
    consularName: "Consulate-General of Japan in Melbourne",
    consularArea: "Victoria, Tasmania & South Australia",
    consularUrl: "https://www.melbourne.au.emb-japan.go.jp/",
    localBusinesses: [
      {name:"ASSORT Melbourne",type:"Hair / 美容",place:"Collingwood, VIC",href:"https://au.assort-hair.com/"},
      {name:"KOMEYUI",type:"Restaurant / 日本食",place:"South Melbourne, VIC",href:"https://komeyui.com.au/"}
    ],
    communityResources: [
      {name:"Japanese School of Melbourne",type:"教育 / Education",description:"Japanese school supporting primary and junior-high education for Japanese families in Melbourne.",href:"https://jsm.vic.edu.au/"},
      {name:"Australia Japan Business Council of Victoria",type:"日豪交流 / Community & business",description:"Independent non-profit connecting business, education, culture and community across Victoria and Japan.",href:"https://ajbcv.com.au/"},
      {name:"Japan Foundation Community Organisations Map",type:"地域検索 / Local directory",description:"Use the national map to find Melbourne-area Japanese clubs, schools and cultural organisations.",href:"https://sydney.jpf.go.jp/japan-related-community-organisations-in-australia/"}
    ],
    focus: ["Melbourne jobs","Housing","Japanese hair & beauty","Japanese restaurants","Events & culture","Melbourne consular services"]
  },
  {
    slug: "qld-brisbane",
    short: "QLD",
    ja: "クイーンズランド / ブリスベン",
    en: "Queensland / Brisbane",
    state: "QLD",
    city: "Brisbane",
    introJa: "ブリスベンを中心に、暮らし、日本語サービス、日本食、イベント、領事情報を集めます。",
    introEn: "A Brisbane-focused hub for living, Japanese-speaking services, food, community events and consular information.",
    consularName: "Consulate-General of Japan in Brisbane",
    consularArea: "Queensland",
    consularUrl: "https://www.brisbane.au.emb-japan.go.jp/",
    localBusinesses: [
      {name:"Genki Mart",type:"Grocery / 日本食材",place:"Brisbane, QLD",href:"https://genkimart.com.au/"},
      {name:"Sono Japanese Restaurant",type:"Restaurant / 日本食",place:"Hamilton, QLD",href:"https://sonorestaurant.com.au/"}
    ],
    communityResources: [
      {name:"Australia-Japan Society Queensland",type:"日豪交流 / Community",description:"Long-running non-profit with cultural, social, educational and Japan-related events in Queensland.",href:"https://austjpnsoc.asn.au/"},
      {name:"AJS Queensland Events",type:"イベント / Events",description:"Current Brisbane and Queensland Japanese cultural events, language and community activities.",href:"https://austjpnsoc.asn.au/"},
      {name:"Japan Foundation Community Organisations Map",type:"地域検索 / Local directory",description:"Find Brisbane-area Japanese clubs, language groups, schools and community organisations.",href:"https://sydney.jpf.go.jp/japan-related-community-organisations-in-australia/"}
    ],
    focus: ["Brisbane jobs","Housing","Japanese groceries","Japanese restaurants","Community events","Brisbane consular services"]
  },
  {
    slug: "qld-gold-coast",
    short: "Gold Coast",
    ja: "クイーンズランド / ゴールドコースト",
    en: "Queensland / Gold Coast",
    state: "QLD",
    city: "Gold Coast",
    introJa: "ゴールドコーストで暮らす日本人向けに、仕事、住まい、日本食、サービス、イベント情報を育てていく地域ページです。",
    introEn: "A growing Gold Coast page for Japanese residents and the wider community, covering work, housing, food, services and events.",
    consularName: "Consulate-General of Japan in Brisbane",
    consularArea: "Queensland",
    consularUrl: "https://www.brisbane.au.emb-japan.go.jp/",
    localBusinesses: [
      {name:"Itoshin",type:"Restaurant / 日本食",place:"Mermaid Beach, QLD",href:"https://www.itoshin.com.au/"}
    ],
    communityResources: [
      {name:"Japanese Society of Gold Coast",type:"日本人会 / Community",description:"Japanese community organisation providing local support, community news, events and education on the Gold Coast.",href:"https://jsgc.org.au/"},
      {name:"Japanese Supplementary School – Southern Cross",type:"教育 / Education",description:"Japanese supplementary education and school information published through the Japanese Society of Gold Coast.",href:"https://jsgc.org.au/"},
      {name:"Japan Foundation Community Organisations Map",type:"地域検索 / Local directory",description:"Find more Japanese community, education and culture resources around the Gold Coast.",href:"https://sydney.jpf.go.jp/japan-related-community-organisations-in-australia/"}
    ],
    focus: ["Gold Coast jobs","Share housing","Japanese restaurants","Beauty & services","Local events","Queensland consular information"]
  },
  {
    slug: "wa-perth",
    short: "WA",
    ja: "西オーストラリア / パース",
    en: "Western Australia / Perth",
    state: "WA",
    city: "Perth",
    introJa: "パースと西オーストラリア州の日本人コミュニティ向けに、生活と地域情報をまとめます。",
    introEn: "A Perth and WA community page for practical living information, Japanese services, events and official updates.",
    consularName: "Consulate-General of Japan in Perth",
    consularArea: "Western Australia",
    consularUrl: "https://www.perth.au.emb-japan.go.jp/",
    localBusinesses: [
      {name:"hair plus",type:"Hair / 美容",place:"Perth, WA",href:"https://www.hairplus-perth.com/"}
    ],
    communityResources: [
      {name:"Japanese Association of Western Australia",type:"日本人会 / Community",description:"Japanese community organisation supporting networking, culture, education and Japanese families in WA.",href:"https://www.wanihonjinkai.com/english/"},
      {name:"Australia-Japan Society of Western Australia",type:"日豪交流 / Australia–Japan",description:"Volunteer organisation promoting community and cultural links between Western Australia and Japan.",href:"https://www.ajswa.com.au/"},
      {name:"Japanese School in Perth",type:"教育 / Education",description:"Japanese primary and junior-high education in Perth, with school visits and enrolment information.",href:"https://jsp.wa.edu.au/"},
      {name:"Weekend Japanese School in Perth",type:"教育 / Weekend school",description:"Weekend Japanese-language classes with Saturday and Sunday programmes.",href:"https://wjsperth.org/"}
    ],
    focus: ["Perth jobs","Housing","Japanese services","Food & groceries","WA community events","Perth consular services"]
  },
  {
    slug: "sa-adelaide",
    short: "SA",
    ja: "南オーストラリア / アデレード",
    en: "South Australia / Adelaide",
    state: "SA",
    city: "Adelaide",
    introJa: "アデレードと南オーストラリア州の日本人・日豪コミュニティ情報をまとめる地域ページです。",
    introEn: "Local information for Japanese residents and Japan–Australia community life in Adelaide and South Australia.",
    consularName: "Consulate-General of Japan in Melbourne",
    consularArea: "Victoria, Tasmania & South Australia",
    consularUrl: "https://www.melbourne.au.emb-japan.go.jp/",
    localBusinesses: [],
    communityResources: [
      {name:"Australia Japan Association of South Australia",type:"日豪交流 / Community",description:"Community association with Japanese-English conversation and social activities for people connected with Japan.",href:"https://ajaofsa.blogspot.com/"},
      {name:"Japan Australia Friendship Association",type:"友好・文化 / Friendship & culture",description:"South Australian volunteer organisation focused on informal social and cultural friendship between Australians and Japanese.",href:"https://www.jafa.asn.au/"},
      {name:"Japan Foundation Community Organisations Map",type:"地域検索 / Local directory",description:"Find Adelaide and South Australia Japanese language, cultural and community organisations.",href:"https://sydney.jpf.go.jp/japan-related-community-organisations-in-australia/"}
    ],
    focus: ["Adelaide jobs","Housing","Japanese food","Community groups","Cultural events","Consular information"]
  },
  {
    slug: "act-canberra",
    short: "ACT",
    ja: "ACT / キャンベラ",
    en: "ACT / Canberra",
    state: "ACT",
    city: "Canberra",
    introJa: "キャンベラの生活、コミュニティ、イベント、日本関連機関への入口です。",
    introEn: "A Canberra gateway for community life, events, Japanese connections and Embassy information.",
    consularName: "Embassy of Japan in Australia",
    consularArea: "Australian Capital Territory",
    consularUrl: "https://www.au.emb-japan.go.jp/",
    localBusinesses: [],
    communityResources: [
      {name:"Canberra Japan Club",type:"日本人会 / Community",description:"Community group supporting Japanese residents and families, Japanese-language activities, talks, clubs and cultural events.",href:"https://www.canberrajapanclub.org.au/en/about"},
      {name:"Australia Japan Society – ACT",type:"日豪交流 / Australia–Japan",description:"ACT society connecting people with an interest in Australia–Japan relations, culture and community activities.",href:"https://ajsact.com.au/"},
      {name:"Embassy of Japan – Canberra",type:"大使館 / Embassy",description:"Official Embassy information, cultural programmes and consular guidance for ACT residents.",href:"https://www.au.emb-japan.go.jp/"}
    ],
    focus: ["Canberra jobs","Housing","Japanese community","Culture & events","Embassy information","Study & exchange"]
  },
  {
    slug: "tas-tasmania",
    short: "TAS",
    ja: "タスマニア",
    en: "Tasmania",
    state: "TAS",
    city: "Tasmania",
    introJa: "タスマニア在住の日本人向けに、生活、地域サービス、イベント、領事情報をまとめていきます。",
    introEn: "A growing Tasmania page for Japanese residents, local services, community events and consular guidance.",
    consularName: "Consulate-General of Japan in Melbourne",
    consularArea: "Victoria, Tasmania & South Australia",
    consularUrl: "https://www.melbourne.au.emb-japan.go.jp/",
    localBusinesses: [],
    communityResources: [
      {name:"Australia-Japan Society of Tasmania",type:"日豪交流 / Community",description:"Non-political, non-profit society organising educational, cultural, social and community activities in Tasmania.",href:"https://www.ajstas.org.au/"},
      {name:"Japan Club Tasmania",type:"日本人会 / Community",description:"Local club for Japanese nationals living in Tasmania, listed through the Australia-Japan Society of Tasmania.",href:"https://www.ajstas.org.au/links"},
      {name:"Japan Foundation Community Organisations Map",type:"地域検索 / Local directory",description:"Search for Japanese community, education and cultural organisations in Tasmania.",href:"https://sydney.jpf.go.jp/japan-related-community-organisations-in-australia/"}
    ],
    focus: ["Tasmania jobs","Housing","Japanese services","Local community","Events","Consular guidance"]
  },
  {
    slug: "nt-darwin",
    short: "NT",
    ja: "ノーザンテリトリー / ダーウィン",
    en: "Northern Territory / Darwin",
    state: "NT",
    city: "Darwin",
    introJa: "ダーウィンとノーザンテリトリーの日本人向けに、生活情報と領事出張サービスなど重要情報をまとめます。",
    introEn: "A Darwin and NT hub for practical community information, including regional consular outreach notices.",
    consularName: "Consulate-General of Japan in Sydney",
    consularArea: "NSW & Northern Territory",
    consularUrl: "https://www.sydney.au.emb-japan.go.jp/",
    localBusinesses: [],
    communityResources: [
      {name:"Australian Japanese Association of the Northern Territory (AJANT)",type:"日本人会・日豪交流 / Community",description:"Darwin-based non-profit supporting friendship, new arrivals, Japanese culture, language and community connections in the NT.",href:"https://austjapanfed.org.au/australian-japanese-association-of-the-northern-territory/"},
      {name:"Sydney Consulate-General – NT information",type:"領事 / Consular",description:"The Sydney Consulate-General is responsible for the Northern Territory and publishes consular outreach and service information.",href:"https://www.sydney.au.emb-japan.go.jp/"},
      {name:"Japan Foundation Community Organisations Map",type:"地域検索 / Local directory",description:"National map for finding Japanese-related organisations and services relevant to Northern Territory residents.",href:"https://sydney.jpf.go.jp/japan-related-community-organisations-in-australia/"}
    ],
    focus: ["Darwin jobs","Housing","Japanese services","Community notices","Consular outreach","NT events"]
  }
];

export const regionBySlug = Object.fromEntries(regions.map(region => [region.slug, region])) as Record<string, Region>;
