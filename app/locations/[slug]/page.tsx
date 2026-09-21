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
  ["💼","仕事 / Jobs","Local jobs and Japanese-speaking opportunities","求人・仕事情報を探す / Explore jobs"],
  ["🏠","住まい / Housing","Share houses, rentals and local living","住まい情報を探す / Explore housing"],
  ["🍜","食べる / Food","Japanese restaurants, groceries and cafés","地域のお店を見る / Explore local food"],
  ["✂️","生活サービス / Services","Beauty, health and professional services","地域サービスを見る / Explore services"],
  ["🤝","仲間 / Community","Friends, clubs, language exchange and groups","地域団体を見る / Explore community"],
  ["🎌","イベント / Events","Japanese and Japan–Australia local events","イベント情報を見る / Explore events"]
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
            {communityCards.map(([icon,title,text,linkText], index) => (
              <article key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={index < 2 ? "/#classifieds" : index < 4 ? "#local-directory" : "#community-resources"}>{linkText} →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="regionResources" id="community-resources">
          <div className="regionHeading">
            <span className="kicker">COMMUNITY & EDUCATION</span>
            <h2>地域の日本人コミュニティ <small>Community, schools & useful organisations</small></h2>
          </div>
          <div className="regionResourceGrid">
            {region.communityResources.map(resource => (
              <a key={resource.name} href={resource.href} target="_blank" rel="noreferrer">
                <span>{resource.type}</span>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
                <b>公式・団体サイト / Visit resource ↗</b>
              </a>
            ))}
          </div>
          <div className="regionReviewed">
            <span>公開情報を確認 / Public information reviewed: 21 Sep 2026</span>
            <a href="https://sydney.jpf.go.jp/japan-related-community-organisations-in-australia/" target="_blank" rel="noreferrer">全国の日本関連団体を探す / National community map ↗</a>
          </div>
        </section>

        <section className="regionLocal" id="local-directory">
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
              <b>地域の日本語情報 / Local Japanese community directory</b>
              <p>地域のコミュニティ・学校・領事情報は上の確認済みリンクからご利用いただけます。店舗やサービスの推薦も歓迎します。</p>
              <a href="/contact">地域情報を推薦する / Suggest a local listing →</a>
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
