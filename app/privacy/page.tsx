export const metadata = { title: "Privacy | AuDaisuki" };

export default function PrivacyPage() {
  return (
    <div className="legalShell">
      <header className="legalHeader">
        <a className="legalBrand" href="/"><span>AuDaisuki</span> オーストラリア大好き</a>
        <span className="legalFlags">🇯🇵 🇦🇺</span>
      </header>
      <main className="legalContent">
        <h1>プライバシー / Privacy</h1>
        <p className="legalLead">This page explains, in plain language, how AuDaisuki may handle information provided through the website.</p>
        <section>
          <h2>収集する情報 / Information we may collect</h2>
          <ul>
            <li>Information you choose to provide, such as your name, email address, enquiry, listing details or event information.</li>
            <li>Basic technical and usage information generated when you visit the site, such as browser, device, pages viewed and approximate traffic data.</li>
            <li>Public business information used to build community directory listings.</li>
          </ul>
        </section>
        <section>
          <h2>利用目的 / How information may be used</h2>
          <p>Information may be used to respond to enquiries, manage listings, improve the website, prevent misuse, understand site usage and provide community information.</p>
        </section>
        <section>
          <h2>第三者サービス / Third-party services</h2>
          <p>The site may link to or use third-party services, including analytics, social media, maps, hosting and external websites. Those services operate under their own privacy terms.</p>
        </section>
        <section>
          <h2>公開情報 / Public information</h2>
          <p>Business names, public addresses, websites and other information already made public by a business or organisation may be referenced in directory content. Business owners may request a correction or update.</p>
        </section>
        <section className="legalNote">
          <h2>お問い合わせ / Privacy enquiries</h2>
          <p>If you have a privacy concern, please use our Contact page. We will add dedicated contact details as the service develops.</p>
        </section>
        <a className="legalBack" href="/">← ホームへ戻る / Back to home</a>
      </main>
    </div>
  );
}
