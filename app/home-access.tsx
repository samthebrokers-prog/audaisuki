'use client';

import { useEffect, useState } from 'react';

// "Save & share" point: add AU大好き to the phone home screen, or send it to friends on LINE / Facebook / X.
const SITE = 'https://audaisuki.com/';
const MESSAGE = 'オーストラリアで暮らす日本人のための情報サイト「AU大好き」— 仕事・住まい・給料チェック・ニュース・オージー英語';

type InstallPrompt = Event & { prompt: () => Promise<void> };

export default function HomeAccess() {
  const [installEvent, setInstallEvent] = useState<InstallPrompt | null>(null);
  const [help, setHelp] = useState('');
  const [copied, setCopied] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as InstallPrompt);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    if (window.matchMedia?.('(display-mode: standalone)').matches) setInstalled(true);
    return () => window.removeEventListener('beforeinstallprompt', onPrompt);
  }, []);

  const addToHome = async () => {
    if (installEvent) {
      await installEvent.prompt();
      setInstallEvent(null);
      return;
    }
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) setHelp('iPhone: 画面下の「共有」ボタン（□↑）→「ホーム画面に追加」をタップしてください。');
    else if (/Android/i.test(ua)) setHelp('Android: 右上の「⋮」メニュー →「ホーム画面に追加」をタップしてください。');
    else setHelp('パソコン: ブックマーク（Ctrl+D / ⌘+D）に保存すると、いつでもすぐ開けます。');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SITE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setHelp(`このリンクをコピーしてください: ${SITE}`);
    }
  };

  const url = encodeURIComponent(SITE);
  const text = encodeURIComponent(MESSAGE);

  return (
    <section className="homeAccess" aria-label="Save and share AU大好き">
      <div className="homeAccessText">
        <span className="kicker">いつでも1タップで / ONE TAP ACCESS</span>
        <h2>AU大好きをスマホに保存して、友達にもシェア</h2>
        <p>家でもバイト先でも、アプリのようにすぐ開けます。オーストラリアにいる日本人の友達にも教えてあげてください。<small>Save AU大好き to your phone and share it with friends in Australia.</small></p>
      </div>
      <div className="homeAccessButtons">
        {!installed && <button type="button" className="haSave" onClick={addToHome}>📱 ホーム画面に追加<small>Add to home screen</small></button>}
        <a className="haLine" href={`https://social-plugins.line.me/lineit/share?url=${url}`} target="_blank" rel="noopener">LINEで送る<small>Send on LINE</small></a>
        <a className="haFb" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener">Facebookでシェア<small>Share on Facebook</small></a>
        <a className="haX" href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener">Xでポスト<small>Post on X</small></a>
        <button type="button" className="haCopy" onClick={copyLink}>{copied ? '✓ コピーしました' : '🔗 リンクをコピー'}<small>{copied ? 'Copied' : 'Copy link'}</small></button>
      </div>
      {help && <p className="homeAccessHelp">{help}</p>}
    </section>
  );
}
