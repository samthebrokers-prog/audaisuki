export const metadata = { title: "Contact | AuDaisuki" };

export default function ContactPage() {
  return (
    <div className="legalShell">
      <header className="legalHeader">
        <a className="legalBrand" href="/"><span>AuDaisuki</span> オーストラリア大好き</a>
        <span className="legalFlags">🇯🇵 🇦🇺</span>
      </header>
      <main className="legalContent">
        <h1>お問い合わせ / Contact</h1>
        <p className="legalLead">Business listing corrections, community notices, event information and general enquiries are welcome.</p>
        <section>
          <h2>掲載情報の修正 / Listing corrections</h2>
          <p>If you own or manage a business shown on AuDaisuki and something is incorrect, please send the business name, location, the information that needs changing and a public source we can use to verify it.</p>
        </section>
        <section>
          <h2>イベント・コミュニティ情報 / Events & community</h2>
          <p>We plan to accept community events, notices and useful local information from across Australia. Submission tools and dedicated contact details will be added as the service develops.</p>
        </section>
        <section className="legalNote">
          <h2>緊急・領事関連 / Emergency or consular matters</h2>
          <p>AuDaisuki is not an emergency or consular service. For urgent government or consular matters, contact the relevant official authority directly.</p>
        </section>
        <a className="legalBack" href="/">← ホームへ戻る / Back to home</a>
      </main>
    </div>
  );
}
