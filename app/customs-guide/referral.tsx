'use client';

import { track } from '../lib/track';

const SUBJECT = encodeURIComponent('[AU大好き] NZ customs enquiry / 通関のご相談');
const BODY = encodeURIComponent(
  'Hello Cusmode,\n\nI found you through AU大好き (audaisuki.com).\n\nWhat I am importing (goods / vehicle):\nShipping by (sea / air / courier):\nExpected arrival in NZ:\nMy name and phone:\n\nThank you.',
);
const WA_TEXT = encodeURIComponent('Hello Cusmode, I found you on AU大好き (audaisuki.com). I need help with NZ customs clearance for: ');

export default function CusmodeReferral() {
  return (
    <section className="referralBox" id="cusmode">
      <span className="kicker">NEW ZEALAND CUSTOMS CLEARANCE / NZの通関</span>
      <h2>ニュージーランドでの通関手続きのご相談</h2>
      <p>
        ニュージーランドへの家財・車・商業貨物の通関（税関申告）、MPI（バイオセキュリティ）の手続き、
        カスタムズのクライアントコード申請などは、NZの通関業者 <b>Cusmode Customs Brokers</b> に相談できます。
        24時間365日対応しています。
      </p>
      <p className="disclosure">
        ※ Cusmode は AU大好き の運営者が経営する通関業者です。ご相談・お見積もりは無料ですが、通関手続きを依頼する場合は所定の料金がかかります。ご相談は英語でお願いします（簡単な英語で大丈夫です）。
      </p>
      <div className="referralActions">
        <a
          href={`mailto:info@cusmode.co.nz?subject=${SUBJECT}&body=${BODY}`}
          onClick={() => track('customs_referral_click', { method: 'email' })}
        >
          ✉️ <b>メールで相談する</b><small>info@cusmode.co.nz</small>
        </a>
        <a
          href={`https://wa.me/6421807814?text=${WA_TEXT}`}
          target="_blank"
          rel="noopener"
          onClick={() => track('customs_referral_click', { method: 'whatsapp' })}
        >
          💬 <b>WhatsAppで相談する</b><small>メッセージのみ（通話不可）</small>
        </a>
        <a
          href="https://www.cusmode.co.nz/?utm_source=audaisuki&utm_medium=referral&utm_campaign=customs_guide"
          target="_blank"
          rel="noopener"
          onClick={() => track('customs_referral_click', { method: 'website' })}
        >
          🌐 <b>Cusmode のウェブサイト</b><small>cusmode.co.nz</small>
        </a>
      </div>
    </section>
  );
}
