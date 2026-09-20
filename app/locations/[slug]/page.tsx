import { notFound } from "next/navigation";
import { regionBySlug, regions } from "../data";

export function generateStaticParams() {
  return regions.map(region => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const region = regionBySlug[slug];
  if (!region) return {};
  return {
    title: region.en + " Japanese Community | AuDaisuki",
    description: "Jobs, housing, Japanese services, food, events and consular information for " + region.en + "."
  };
}

const communityCards = [
  ["💼","仕事 / Jobs","Local jobs and Japanese-speaking opportunities"],
  ["🏠","住まい / Housing","Share houses, rentals and local living"],
  ["🍜","食べる / Food","Japanese restaurants, groceries and cafés"],
  ["✂️","生活サービス / Services","Beauty, health and professional services"],
  ["🤝","仲間 / Community","Friends, clubs, language exchange and groups"],
  ["🎌","イベント / Events","Japanese and Japan–Australia local events"]
];

export default async function RegionPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const region = regionBySlug[slug];
  if (!region) notFound();

  return (
    <div className="regionShell">
      <header className="regionTop">
        <a href="/" className="regionBrand">AuDaisuki <span>オーストラリア大好き</span></a>
        <a href="/locations">📍 地域一覧 / All regions</a>
      </header>

      <main className="regionPage">
        <section className="regionHero">
          <div>
            <span className="regionState">{region.short}</span>
            <h1>{region.ja}<small>{region.en}</small></h1>
            <p>{region.introJa}</p>
            <p className="en">{region.introEn}</p>
          </div>
          <aside>
            <b>この地域で探す / Explore</b>
            <div className="regionFocus">
              {region.focus.map(item => <span key={item}>✓ {item}</span>)}
            </div>
          </aside>
        </section>

        <section className="regionCommunity">
          <div className="regionHeading">
            <span className="kicker">COMMUNITY</span>
            <h2>{region.city} で暮らす <small>Life in {region.city}</small></h2>
          </div>
          <div className="regionCommunityGrid">
            {communityCards.map(([icon,title,text]) => (
              <article key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="/#classifieds">掲載準備中 / Building this section →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="regionLocal">
          <div className="regionHeading">
            <span className="kicker">LOCAL DIRECTORY</span>
            <h2>日本語サービス・お店 <small>Japanese services & businesses</small></h2>
          </div>
          {region.localBusinesses.length > 0 ? (
            <div className="regionBusinessGrid">
              {region.localBusinesses.map(business => (
                <a key={business.name} href={business.href} target="_blank" rel="noreferrer">
                  <span>{business.type}</span>
                  <h3>{business.name}</h3>
                  <p>📍 {business.place}</p>
                  <b>Website ↗</b>
                </a>
              ))}
            </div>
          ) : (
            <div className="regionEmpty">
              <b>この地域のディレクトリを拡大中です。 / We are expanding this local directory.</b>
              <p>日本語対応の店舗、レストラン、専門サービス、コミュニティ団体を順次追加します。</p>
              <a href="/contact">掲載情報を送る / Suggest a local listing →</a>
            </div>
          )}
        </section>

        <section className="regionOfficial">
          <div>
            <span className="kicker">OFFICIAL JAPAN</span>
            <h2>領事・大使館情報 <small>Consular information</small></h2>
            <h3>{region.consularName}</h3>
            <p>管轄 / Jurisdiction: {region.consularArea}</p>
            <p>旅券、証明、ビザ、在外届、領事出張など重要な手続は、必ず担当公館の最新情報をご確認ください。</p>
            <a href={region.consularUrl} target="_blank" rel="noreferrer">公式サイト / Official website ↗</a>
          </div>
          <aside>
            <b>AuDaisuki Official Hub</b>
            <p>地域別の大使館・総領事館ニュース、イベント、旅券・ビザ、安全情報をまとめています。</p>
            <a href="/official-news">公式情報ハブを見る / Official updates →</a>
          </aside>
        </section>

        <section className="regionBuild">
          <b>{region.city} コミュニティを一緒に育てる / Help build the {region.city} community page</b>
          <p>地元の日本人経営ビジネス、イベント、求人、クラブ、学校、コミュニティ団体の情報を募集しています。</p>
          <a href="/contact">情報を送る / Send local information →</a>
        </section>
      </main>
    </div>
  );
}
