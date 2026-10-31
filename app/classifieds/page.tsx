import type { Metadata } from 'next';
import Board from './board';
import './board.css';

export const metadata: Metadata = {
  title: '掲示板（言語交換・アルバイト・友達・旅行仲間） | AU大好き',
  description:
    'オーストラリアの日本人掲示板。英語学習、言語交換、アルバイト、家事・ベビーシッター、友達、旅行仲間、住まい、売ります買います。ワーホリ・留学生歓迎。',
  alternates: { canonical: 'https://audaisuki.com/classifieds' },
  openGraph: { type: 'website', url: 'https://audaisuki.com/classifieds', siteName: 'AU大好き', title: 'AU大好き 掲示板 / Message board', locale: 'ja_AU' },
};

export default function ClassifiedsPage() {
  return (
    <div className="officialHub">
      <header className="officialHubHeader">
        <a href="/" className="officialHubBrand">AuDaisuki <span>オーストラリア大好き</span></a>
        <div>🇯🇵 <span>掲示板 / Message board</span> 🇦🇺</div>
      </header>
      <main className="officialHubMain">
        <div className="officialHubIntro">
          <span className="kicker">AUSTRALIA MESSAGE BOARD</span>
          <h1>掲示板<br /><small>Language exchange, jobs, friends &amp; travel buddies</small></h1>
          <p>ワーキングホリデー、留学生、英語を学ぶ人のための掲示板です。言語交換、アルバイト、友達探し、旅行仲間など、無料で投稿できます。</p>
          <p className="en">A free board for Japanese people in Australia and the people who want to meet them — language exchange, part-time work, friends and travel buddies.</p>
        </div>
      </main>
      <Board />
      <main className="officialHubMain">
        <a className="legalBack" href="/">← AuDaisuki ホーム / Back to home</a>
      </main>
    </div>
  );
}
