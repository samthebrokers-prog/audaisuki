export const metadata = { title: "Terms of Use | AuDaisuki" };

export default function TermsPage() {
  return (
    <div className="legalShell">
      <header className="legalHeader">
        <a className="legalBrand" href="/"><span>AuDaisuki</span> オーストラリア大好き</a>
        <span className="legalFlags">🇯🇵 🇦🇺</span>
      </header>
      <main className="legalContent">
        <h1>利用規約 / Terms of Use</h1>
        <p className="legalLead">By using AuDaisuki, you agree to use the website lawfully and responsibly. These terms are intended to keep the community useful and clear.</p>
        <section>
          <h2>情報提供 / Information only</h2>
          <p>AuDaisuki provides general community and directory information. Content is not legal, immigration, financial, medical or other professional advice. For official procedures, use the relevant government or professional source.</p>
        </section>
        <section>
          <h2>掲載内容 / Listings and user content</h2>
          <p>Users and businesses must provide information they are entitled to publish and must not submit misleading, unlawful, discriminatory, abusive or infringing content. AuDaisuki may correct, reject or remove content where reasonably necessary.</p>
        </section>
        <section>
          <h2>外部リンク / External links</h2>
          <p>Links to businesses, social media, government bodies, embassies, consulates and other external sites are provided for convenience. AuDaisuki does not control those sites and cannot guarantee their availability or accuracy.</p>
        </section>
        <section>
          <h2>正確性 / Accuracy</h2>
          <p>We try to keep information useful and current, but details can change without notice. Users should verify important information directly with the relevant provider or official source before relying on it.</p>
        </section>
        <section>
          <h2>責任 / Liability</h2>
          <p>To the extent permitted by law, AuDaisuki is not responsible for loss arising solely from reliance on outdated, incomplete or third-party information. Nothing in these terms is intended to exclude rights or remedies that cannot lawfully be excluded.</p>
        </section>
        <a className="legalBack" href="/">← ホームへ戻る / Back to home</a>
      </main>
    </div>
  );
}
