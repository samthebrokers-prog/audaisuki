export const metadata = { title: "About | AuDaisuki" };

export default function AboutPage() {
  return (
    <div className="legalShell">
      <header className="legalHeader">
        <a className="legalBrand" href="/"><span>AuDaisuki</span> オーストラリア大好き</a>
        <span className="legalFlags">🇯🇵 🇦🇺</span>
      </header>
      <main className="legalContent">
        <h1>このサイトについて / About AuDaisuki</h1>
        <p className="legalLead">日本とオーストラリアをつなぐ、独立したコミュニティ情報サイトです。 AuDaisuki is an independent Japanese–Australian community information portal.</p>
        <section>
          <h2>目的 / Our purpose</h2>
          <p>AuDaisukiは、オーストラリアで暮らす日本人、日本に関心を持つオーストラリアの方、そして両国をつなぐ地域社会・企業・団体のために、生活情報、仕事、住まい、ビジネス、飲食、イベント、公的機関への入口を分かりやすくまとめることを目指しています。</p>
          <p>We aim to make useful Australia–Japan community information easier to find, including jobs, housing, Japanese-speaking services, food, events, businesses and links to official information.</p>
        </section>
        <section>
          <h2>独立性 / Independence</h2>
          <p>AuDaisukiは独立したコミュニティサイトです。日本政府、日本国大使館・総領事館、オーストラリア政府またはその機関とは提携・所属していません。</p>
          <p>AuDaisuki is independent and is not affiliated with the Government of Japan, the Embassy or Consulates-General of Japan, or any Australian government authority.</p>
        </section>
        <section>
          <h2>掲載情報 / Listings and information</h2>
          <p>店舗・企業・団体情報は、公式サイトや公開情報をもとに掲載する場合があります。掲載は推薦、認証、保証を意味するものではありません。重要な手続、料金、営業時間、資格、ビザ、領事手続などは必ず各公式提供元で最新情報をご確認ください。</p>
        </section>
        <a className="legalBack" href="/">← ホームへ戻る / Back to home</a>
      </main>
    </div>
  );
}
