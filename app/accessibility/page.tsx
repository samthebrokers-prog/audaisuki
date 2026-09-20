export const metadata = { title: "Accessibility | AuDaisuki" };

export default function AccessibilityPage() {
  return (
    <div className="legalShell">
      <header className="legalHeader">
        <a className="legalBrand" href="/"><span>AuDaisuki</span> オーストラリア大好き</a>
        <span className="legalFlags">🇯🇵 🇦🇺</span>
      </header>
      <main className="legalContent">
        <h1>アクセシビリティ / Accessibility</h1>
        <p className="legalLead">AuDaisuki aims to make community information usable by as many people as reasonably possible, across devices and in both Japanese and English.</p>
        <section>
          <h2>取り組み / Our approach</h2>
          <ul>
            <li>Clear headings, readable type and strong contrast.</li>
            <li>Responsive layouts for phones, tablets and desktop screens.</li>
            <li>Meaningful link text and keyboard-friendly navigation where practical.</li>
            <li>Alternative text for important images as visual content is added.</li>
            <li>Plain-language English together with Japanese labels and explanations.</li>
          </ul>
        </section>
        <section>
          <h2>改善について / Improving access</h2>
          <p>If you find content difficult to read or use, please tell us through the Contact page. We will use that feedback to improve the site.</p>
        </section>
        <a className="legalBack" href="/">← ホームへ戻る / Back to home</a>
      </main>
    </div>
  );
}
