import './globals.css';

export const metadata = {
  title: 'AU大好き | オーストラリア生活・日本人コミュニティ情報',
  description: 'オーストラリアの日本人コミュニティ向けに、仕事、住まい、日本語対応ビジネス、日本食、大使館・領事館、公式ニュースを日本語・英語で案内する独立コミュニティポータル。',
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ja"><body>{children}</body></html>;
}
