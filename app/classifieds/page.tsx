export const metadata = {
  title: "クラシファイド掲示板 | Jobs, Housing, Buy & Sell | AU大好き",
  description: "オーストラリア在住・渡航予定の日本人向けクラシファイド。仕事、住まい、売買、友達・コミュニティ、イベント情報。"
};

const categories = [
  {icon:"💼", ja:"求人・仕事", en:"Jobs", text:"飲食、ホスピタリティ、オフィス、農業、専門職など。", href:"/contact?category=jobs"},
  {icon:"🏠", ja:"住まい", en:"Housing", text:"シェアハウス、ルーム、短期滞在、入居者募集。", href:"/contact?category=housing"},
  {icon:"🛍️", ja:"売ります・買います", en:"Buy & Sell", text:"家具、家電、生活用品、帰国セールなど。", href:"/contact?category=trade"},
  {icon:"🤝", ja:"友達・仲間", en:"Friends & Community", text:"スポーツ、旅行、言語交換、趣味、地域交流。", href:"/contact?category=friends"},
  {icon:"📣", ja:"イベント・お知らせ", en:"Events", text:"日本文化、地域イベント、コミュニティのお知らせ。", href:"/contact?category=events"},
  {icon:"🙋", ja:"ボランティア・交流", en:"Volunteer & Exchange", text:"ボランティア、文化交流、コミュニティ活動。", href:"/contact?category=volunteer"},
];

const regions=["Australia / 全国","Sydney / NSW","Melbourne / VIC","Brisbane / QLD","Gold Coast / QLD","Perth / WA","Adelaide / SA","Canberra / ACT","Tasmania / TAS","Darwin / NT"];

const usefulNow = [
  {tag:"求人 / Jobs", place:"Australia", title:"日本語対応の求人情報を探す", en:"Current Japanese-friendly jobs across Australia", note:"外部の公開求人情報。応募条件・給与・雇用主は応募前に必ず確認してください。", href:"https://www.nihonaustralia.com/ja/posts/jobs"},
  {tag:"仕事 / Opportunity", place:"Sydney / Melbourne", title:"国際交流基金シドニー — 採用・機会", en:"Japan Foundation Sydney — jobs and opportunities", note:"国際交流基金の公式募集ページ。", href:"https://sydney.jpf.go.jp/opportunities/work-with-us/"},
  {tag:"コミュニティ / Community", place:"Perth / WA", title:"パース日本人コミュニティ掲示板", en:"Perth Japanese community board", note:"求人、住まい、売買、質問など、WAの地域情報を確認できます。", href:"https://perthnews.com.au/"},
  {tag:"生活情報 / Community", place:"Australia", title:"日豪プレス — クラシファイド", en:"Nichigo Press community classifieds", note:"求人、住まい、売買、サークルなどの公開情報。", href:"https://nichigopress.jp/"},
];

export default function ClassifiedsPage(){return <div style={{maxWidth:1180,margin:"0 auto",padding:"0 20px 60px",fontFamily:"Arial, sans-serif",color:"#20242a"}}>
  <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 0",borderBottom:"1px solid #e6e6e6"}}>
    <a href="/" style={{fontWeight:900,fontSize:28,textDecoration:"none",color:"#c62828"}}>AU大好き <small style={{fontSize:13,color:"#555"}}>Australia Community</small></a>
    <a href="/contact?type=classified" style={{background:"#c62828",color:"white",padding:"12px 18px",borderRadius:8,textDecoration:"none",fontWeight:800}}>＋ 無料掲載 / Post Free</a>
  </header>

  <main>
    <section style={{padding:"42px 0 24px"}}>
      <div style={{fontSize:13,fontWeight:800,letterSpacing:1.4,color:"#c62828"}}>AUSTRALIA CLASSIFIEDS</div>
      <h1 style={{fontSize:"clamp(32px,5vw,54px)",margin:"8px 0 12px"}}>クラシファイド掲示板</h1>
      <p style={{fontSize:20,maxWidth:760,lineHeight:1.6,margin:"0 0 8px"}}>オーストラリアで暮らす日本人のための、仕事・住まい・売買・友達・イベント掲示板。</p>
      <p style={{fontSize:16,maxWidth:760,lineHeight:1.6,color:"#666"}}>Jobs, housing, buy & sell, friends and community notices for Japanese people living in or coming to Australia.</p>
    </section>

    <section aria-label="Regions" style={{display:"flex",gap:8,flexWrap:"wrap",padding:"10px 0 28px"}}>
      {regions.map(r=><span key={r} style={{border:"1px solid #ddd",borderRadius:20,padding:"8px 12px",fontSize:13,background:"#fff"}}>📍 {r}</span>)}
    </section>

    <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:16}}>
      {categories.map(c=><article key={c.en} style={{border:"1px solid #e3e3e3",borderRadius:12,padding:22,background:"#fff",boxShadow:"0 3px 14px rgba(0,0,0,.05)"}}>
        <div style={{fontSize:32}}>{c.icon}</div><h2 style={{margin:"10px 0 3px",fontSize:22}}>{c.ja}</h2><b style={{color:"#777"}}>{c.en}</b><p style={{lineHeight:1.6,minHeight:50}}>{c.text}</p>
        <a href={c.href} style={{color:"#b71c1c",fontWeight:800,textDecoration:"none"}}>このカテゴリーに掲載する / Post →</a>
      </article>)}
    </section>

    <section style={{marginTop:38}}>
      <div style={{fontSize:13,fontWeight:800,letterSpacing:1.3,color:"#c62828"}}>USEFUL NOW / 今使える情報</div>
      <h2 style={{fontSize:30,margin:"7px 0 6px"}}>現在利用できる仕事・生活・コミュニティ情報</h2>
      <p style={{color:"#666",lineHeight:1.6,maxWidth:820}}>AU大好き自身の投稿が増えるまで、確認できる公開情報への入口も掲載します。外部掲載はAU大好きによる推薦・保証ではありません。</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:14,marginTop:18}}>{usefulNow.map(x=><article key={x.href} style={{border:"1px solid #e4e4e4",borderRadius:10,padding:20,background:"#fff"}}><div style={{display:"flex",justifyContent:"space-between",gap:8,fontSize:12,fontWeight:800,color:"#777"}}><span>{x.tag}</span><span>📍 {x.place}</span></div><h3 style={{fontSize:20,margin:"12px 0 4px"}}>{x.title}</h3><b style={{fontSize:14,color:"#666"}}>{x.en}</b><p style={{fontSize:14,lineHeight:1.6}}>{x.note}</p><a href={x.href} target="_blank" rel="noreferrer" style={{color:"#b71c1c",fontWeight:800,textDecoration:"none"}}>情報を見る / View source ↗</a></article>)}</div>
    </section>

    <section style={{marginTop:34,padding:24,borderRadius:12,background:"#f7f4ef"}}>
      <h2 style={{marginTop:0}}>🌱 AU大好き掲示板を育てています</h2>
      <p style={{lineHeight:1.7}}>新しいコミュニティ掲示板です。最初の掲載者を募集中です。個人の通常掲載は無料です。投稿内容は公開前に確認し、詐欺・違法・差別的な内容や不適切な勧誘は掲載しません。</p>
      <p style={{lineHeight:1.7,color:"#555"}}>AU Daisuki is building a useful, trustworthy Australia-wide Japanese community board. Standard community listings are free during launch. Submissions are reviewed before publication.</p>
      <a href="/contact?type=classified" style={{display:"inline-block",marginTop:6,background:"#20242a",color:"#fff",padding:"12px 18px",borderRadius:7,textDecoration:"none",fontWeight:800}}>無料で掲載する / Submit a listing</a>
    </section>
  </main>
</div>}
