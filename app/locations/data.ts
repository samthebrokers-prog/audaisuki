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
    focus: ["Darwin jobs","Housing","Japanese services","Community notices","Consular outreach","NT events"]
  }
];

export const regionBySlug = Object.fromEntries(regions.map(region => [region.slug, region])) as Record<string, Region>;
