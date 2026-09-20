export const metadata = { title: "Login | AuDaisuki" };

export default function LoginPage() {
  return (
    <div className="legalShell">
      <header className="legalHeader">
        <a className="legalBrand" href="/"><span>AuDaisuki</span> オーストラリア大好き</a>
        <span className="legalFlags">🇯🇵 🇦🇺</span>
      </header>
      <main className="legalContent">
        <h1>ログイン / Login</h1>
        <p className="legalLead">AuDaisuki account login is being prepared.</p>
        <section className="legalNote">
          <h2>準備中 / Coming soon</h2>
          <p>Business owners and community members will be able to manage listings, posts and account details here once member accounts are enabled.</p>
          <p>事業者・コミュニティメンバー向けの掲載管理、投稿、アカウント機能を準備しています。</p>
        </section>
        <a className="legalBack" href="/">← ホームへ戻る / Back to home</a>
      </main>
    </div>
  );
}
