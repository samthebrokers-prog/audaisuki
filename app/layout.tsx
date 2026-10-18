import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import './inner-theme.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://audaisuki.com'),
  title: 'AU大好き | オーストラリア生活・日本人コミュニティ情報',
  description: 'オーストラリアの日本人コミュニティ向けに、仕事、住まい、日本語対応ビジネス、日本食、大使館・領事館、公式ニュースを日本語・英語で案内する独立コミュニティポータル。',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://audaisuki.com/',
    siteName: 'AU大好き',
    title: 'AU大好き | オーストラリア生活・日本人コミュニティ情報',
    description: 'オーストラリアの日本人コミュニティ向け生活・ビジネス・公式情報ポータル。',
    locale: 'ja_AU',
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ja"><body>{children}<Script src="/_vercel/insights/script.js" strategy="afterInteractive" /></body></html>;
}
