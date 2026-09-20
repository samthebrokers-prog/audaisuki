import { regions } from "./data";

export const metadata = {
  title: "Australia by Region | AuDaisuki",
  description: "Japanese community information across Australia by state and city."
};

export default function LocationsPage() {
  return (
    <div className="regionShell">
      <header className="regionTop">
        <a href="/" className="regionBrand">AuDaisuki <span>オーストラリア大好き</span></a>
        <span>🇯🇵 🇦🇺</span>
      </header>
      <main className="regionIndex">
        <div className="regionIndexIntro">
          <span className="kicker">LOCAL AUSTRALIA</span>
          <h1>地域から探す <small>Explore by region</small></h1>
          <p>州・都市ごとに、仕事、住まい、日本語サービス、日本食、イベント、領事情報をまとめていきます。</p>
          <p className="en">Choose your state or city to find practical Japanese community information close to you.</p>
        </div>
        <div className="regionIndexGrid">
          {regions.map(region => (
            <a href={"/locations/" + region.slug} key={region.slug}>
              <span>{region.short}</span>
              <h2>{region.ja}</h2>
              <b>{region.en}</b>
              <p>{region.introEn}</p>
              <strong>地域ページを見る / Open region →</strong>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
