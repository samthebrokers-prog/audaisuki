import type { MetadataRoute } from 'next';

// Lets visitors save AU大好き to their phone home screen like an app.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AU大好き | オーストラリア生活・日本人コミュニティ',
    short_name: 'AU大好き',
    description: 'オーストラリアで暮らす日本人のための生活・仕事・住まい・ニュース情報ポータル。',
    start_url: '/?source=homescreen',
    display: 'standalone',
    background_color: '#f7f3e8',
    theme_color: '#171b20',
    lang: 'ja',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
