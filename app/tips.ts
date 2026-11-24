// 今日のワーホリ豆知識 / Working holiday tip of the day.
// One tip a day, rotating by the Perth calendar date. No AI or running cost.
// Keep tips general and point to the official page, because rules change.
// To add more, append to the list — the rotation adjusts by itself.

export type Tip = {
  tag: string; // short category label
  titleJa: string;
  bodyJa: string;
  en: string; // one simple English line
  link: string; // official page
  linkLabel: string;
};

export const tips: Tip[] = [
  { tag: "税金 / Tax", titleJa: "まずはTFN（納税者番号）を申請しよう", bodyJa: "働く前にTFNをATO（オーストラリア国税庁）のサイトから無料で申請できます。TFNを雇い主に伝えないと、給料から高い税率で税金が引かれてしまいます。", en: "Apply for your free Tax File Number before you start work.", link: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn", linkLabel: "ATO：TFNの申請" },
  { tag: "仕事 / Work", titleJa: "給与明細は必ずもらえる", bodyJa: "雇い主は給料日から1営業日以内に給与明細（pay slip）を渡す決まりがあります。時給・労働時間・税金・スーパー（年金）が正しいか毎回確認しましょう。", en: "Your employer must give you a pay slip within one working day of payday.", link: "https://www.fairwork.gov.au/pay-and-wages/paying-wages/pay-slips", linkLabel: "Fair Work：給与明細" },
  { tag: "仕事 / Work", titleJa: "最低賃金より安い仕事に注意", bodyJa: "オーストラリアには法律で決まった最低賃金があり、ワーホリの人にも適用されます。「現金払い・時給が極端に安い」仕事は違法の可能性があります。AU大好きの給料チェックで確認できます。", en: "Minimum wage laws apply to working holiday makers too.", link: "https://audaisuki.com/pay-check", linkLabel: "AU大好き：給料チェック" },
  { tag: "仕事 / Work", titleJa: "カジュアル雇用の時給が高い理由", bodyJa: "カジュアル（casual）で働く人は、有給休暇がない代わりに通常の時給に25%の上乗せ（casual loading）がつくのが一般的です。契約書で雇用形態を確認しましょう。", en: "Casual workers usually get a 25% loading instead of paid leave.", link: "https://www.fairwork.gov.au/employment-conditions/types-of-employees/casual-part-time-and-full-time/casual-employees", linkLabel: "Fair Work：カジュアル雇用" },
  { tag: "仕事 / Work", titleJa: "「無給トライアル」は要注意", bodyJa: "「お試しで数日タダで働いて」と言われることがありますが、スキルを見せる短時間を超える無給労働は違法になる場合があります。おかしいと思ったらFair Workに相談を。", en: "Long unpaid trial shifts can be illegal.", link: "https://www.fairwork.gov.au/starting-employment/unpaid-work/unpaid-trials", linkLabel: "Fair Work：無給トライアル" },
  { tag: "年金 / Super", titleJa: "スーパー（年金）は給料とは別に払われる", bodyJa: "雇い主は給料とは別に、あなたのスーパー口座に年金を積み立てる義務があります。給与明細に記載されているか確認しましょう。", en: "Your employer pays super on top of your wages.", link: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families", linkLabel: "ATO：スーパー" },
  { tag: "年金 / Super", titleJa: "帰国後はスーパーの払い戻し（DASP）を", bodyJa: "ビザが切れて出国した後、積み立てたスーパーの払い戻しを申請できます（税金が差し引かれます）。帰国前に口座情報をメモしておきましょう。", en: "You can claim your super after you leave Australia (DASP).", link: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families", linkLabel: "ATO：スーパー（DASP）" },
  { tag: "税金 / Tax", titleJa: "タックスリターン（確定申告）の時期", bodyJa: "オーストラリアの会計年度は7月1日〜翌年6月30日です。自分で申告する場合の期限は通常10月31日。払いすぎた税金が戻ることもあります。", en: "The tax year runs 1 July to 30 June; returns are usually due 31 October.", link: "https://www.ato.gov.au/individuals-and-families/your-tax-return", linkLabel: "ATO：タックスリターン" },
  { tag: "仕事 / Work", titleJa: "「ABNで働いて」と言われたら", bodyJa: "ABNで働くと個人事業主扱いになり、スーパーが出ず、税金も自分で払う必要があります。実際は従業員なのにABNを求めるのは違法な場合があります。", en: "Working on an ABN means you are a contractor — check it is genuine.", link: "https://www.fairwork.gov.au/find-help-for/independent-contractors", linkLabel: "Fair Work：個人事業主" },
  { tag: "ビザ / Visa", titleJa: "自分のビザ条件はVEVOで無料確認", bodyJa: "ビザの有効期限や就労条件は、内務省のVEVOで無料で確認できます。雇い主に見せることもできます。", en: "Check your visa conditions for free with VEVO.", link: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online", linkLabel: "内務省：VEVO" },
  { tag: "ビザ / Visa", titleJa: "セカンド・サードビザの条件は最新情報で", bodyJa: "2年目・3年目のワーホリビザの条件（指定地域での仕事など）は変更されることがあります。人の話やSNSより、必ず内務省の公式ページで最新の条件を確認しましょう。", en: "Rules for a second or third Working Holiday visa can change — always check the official page.", link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417", linkLabel: "内務省：ワーホリビザ" },
  { tag: "ビザ / Visa", titleJa: "同じ雇い主で働ける期間に注意", bodyJa: "ワーホリビザには、同じ雇い主のもとで働ける期間に制限があります（例外あり）。長く働きたい場合は事前に条件を確認しましょう。", en: "There is usually a limit on how long you can work for one employer.", link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417", linkLabel: "内務省：ワーホリビザ" },
  { tag: "健康 / Health", titleJa: "日本人はメディケアの対象外", bodyJa: "日本はオーストラリアと医療の相互協定がないため、ワーホリや留学生はメディケア（公的医療保険）を使えません。海外旅行保険に必ず入っておきましょう。", en: "Japanese visitors are not covered by Medicare — get travel insurance.", link: "https://www.servicesaustralia.gov.au/", linkLabel: "Services Australia（メディケア）" },
  { tag: "健康 / Health", titleJa: "救急車は高額になることも", bodyJa: "多くの州で救急車は有料で、数百〜数千ドルかかることがあります。保険で救急車がカバーされているか確認しましょう。緊急時は000番です。", en: "Ambulances can be expensive — check your insurance covers them.", link: "https://www.healthdirect.gov.au/", linkLabel: "healthdirect（健康相談）" },
  { tag: "安全 / Safety", titleJa: "緊急番号は000（トリプルゼロ）", bodyJa: "警察・消防・救急はすべて000番です。命に関わらない警察への相談は131 444。電話のアプリに登録しておきましょう。", en: "Call 000 for police, fire and ambulance emergencies.", link: "https://www.triplezero.gov.au/", linkLabel: "Triple Zero（公式）" },
  { tag: "健康 / Health", titleJa: "具合が悪いときは24時間電話相談", bodyJa: "healthdirect（1800 022 222）では看護師に24時間無料で相談できます。病院に行くべきか迷ったときに便利です。通訳サービス（TIS：131 450）も使えます。", en: "Call healthdirect on 1800 022 222 for free 24-hour health advice.", link: "https://www.healthdirect.gov.au/", linkLabel: "healthdirect" },
  { tag: "安全 / Safety", titleJa: "日差しは日本の何倍も強い", bodyJa: "オーストラリアは紫外線がとても強く、曇りの日でも日焼けします。帽子・サングラス・日焼け止めを習慣にしましょう。", en: "The sun is very strong — wear a hat, sunnies and sunscreen.", link: "https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety", linkLabel: "Cancer Council：日焼け対策" },
  { tag: "安全 / Safety", titleJa: "海は赤と黄色の旗の間で泳ぐ", bodyJa: "ビーチでは、ライフセーバーが見守る赤と黄色の旗の間で泳ぎましょう。離岸流（rip current）はとても危険です。", en: "Always swim between the red and yellow flags.", link: "https://beachsafe.org.au/", linkLabel: "Beachsafe" },
  { tag: "安全 / Safety", titleJa: "山火事シーズンは公式アプリを", bodyJa: "夏は山火事（bushfire）の危険があります。住んでいる州の消防・緊急情報アプリを入れておき、警報が出たら指示に従いましょう。", en: "Download your state's emergency app during bushfire season.", link: "https://www.abc.net.au/emergency", linkLabel: "ABC Emergency" },
  { tag: "住まい / Housing", titleJa: "ボンド（保証金）は州の機関に預ける", bodyJa: "賃貸の保証金（bond）は、多くの州で大家ではなく州の公的機関に預けるルールです。領収書と番号を必ずもらいましょう。", en: "Your rental bond is usually lodged with a state government authority.", link: "https://www.fairtrading.nsw.gov.au/housing-and-property/renting/rental-bonds-online", linkLabel: "例：NSW Rental Bonds Online" },
  { tag: "住まい / Housing", titleJa: "内見前の送金は詐欺の可能性", bodyJa: "「海外にいるので鍵を送る、先に保証金を振り込んで」という物件は詐欺の典型です。部屋を見る前にお金を払わないようにしましょう。", en: "Never pay money before you see the room — it may be a scam.", link: "https://www.scamwatch.gov.au/types-of-scams", linkLabel: "Scamwatch：詐欺の種類" },
  { tag: "住まい / Housing", titleJa: "入居時に部屋の写真を撮っておく", bodyJa: "入居時に部屋の状態を写真で記録しておくと、退去時のボンド返金トラブルを防げます。日付入りで保存しておきましょう。", en: "Take dated photos of the room when you move in.", link: "https://www.consumer.vic.gov.au/housing/renting", linkLabel: "Consumer Affairs Victoria：賃貸" },
  { tag: "安全 / Safety", titleJa: "仕事探しの詐欺に注意", bodyJa: "「簡単に高収入」「先に登録料を払って」「荷物を受け取るだけ」といった求人は詐欺の可能性が高いです。怪しい話はScamwatchで確認を。", en: "Be careful of job ads that ask you to pay first.", link: "https://www.scamwatch.gov.au/types-of-scams", linkLabel: "Scamwatch：詐欺の種類" },
  { tag: "暮らし / Life", titleJa: "交通ICカードは都市ごとに違う", bodyJa: "シドニーはOpal、メルボルンはmyki、ブリスベンはgo card、パースはSmartRider。都市によってはクレジットカードのタッチ決済でも乗れます。", en: "Each city has its own transport card — Opal, myki, go card, SmartRider.", link: "https://transportnsw.info/tickets-fares/opal", linkLabel: "例：Opal（シドニー）" },
  { tag: "暮らし / Life", titleJa: "州によって時差（サマータイム）が違う", bodyJa: "NSW・VIC・ACT・TAS・SAは夏にサマータイムがありますが、QLD・WA・NTにはありません。州をまたぐ連絡や移動の時間に注意しましょう。", en: "Some states use daylight saving and some don't.", link: "https://www.timeanddate.com/time/zone/australia", linkLabel: "各州の現在時刻" },
  { tag: "暮らし / Life", titleJa: "チップは基本的に不要", bodyJa: "オーストラリアではレストランやカフェでのチップは義務ではありません。特に良いサービスだったときに少し置く程度で大丈夫です。", en: "Tipping is not expected in Australia.", link: "https://www.australia.com/en", linkLabel: "Tourism Australia" },
  { tag: "暮らし / Life", titleJa: "空き缶・ペットボトルはお金になる", bodyJa: "多くの州で、対象の缶やボトルを回収所に持って行くと1本10セント戻ってきます（コンテナ・デポジット制度）。", en: "Return eligible cans and bottles for a 10c refund in most states.", link: "https://www.dcceew.gov.au/", linkLabel: "オーストラリア政府（環境）" },
  { tag: "暮らし / Life", titleJa: "運転するなら免許のルールを確認", bodyJa: "日本の運転免許と公式の英訳があれば、一定期間は運転できる場合があります。ただし期間や条件は州ごとに違うので、住む州の交通局で確認しましょう。", en: "Rules for driving on a Japanese licence are different in each state.", link: "https://www.australia.gov.au/", linkLabel: "australia.gov.au（各州の情報）" },
  { tag: "英語 / English", titleJa: "無料の英語教室を探そう", bodyJa: "図書館やコミュニティセンターでは、無料の英会話グループ（conversation class）がよく開かれています。近くの市役所（council）のサイトをチェック！", en: "Many libraries run free English conversation groups.", link: "https://audaisuki.com/english", linkLabel: "AU大好き：英語を学ぶ" },
  { tag: "英語 / English", titleJa: "英語パートナーは掲示板で", bodyJa: "日本語を学びたいオーストラリア人はたくさんいます。AU大好きの掲示板「言語交換」で、カフェで会える英語パートナーを探してみましょう。", en: "Find a language-exchange partner on our free board.", link: "https://audaisuki.com/classifieds?c=exchange", linkLabel: "AU大好き：言語交換" },
  { tag: "仕事 / Work", titleJa: "祝日・週末は時給が上がることも", bodyJa: "業種によっては、土日・祝日・深夜に時給が上がる「ペナルティレート」があります。自分の仕事のアワード（業種別の賃金規定）を確認しましょう。", en: "Many jobs pay penalty rates on weekends and public holidays.", link: "https://www.fairwork.gov.au/pay-and-wages/penalty-rates-and-allowances", linkLabel: "Fair Work：ペナルティレート" },
  { tag: "相談 / Help", titleJa: "困ったら日本語で相談できる", bodyJa: "事件・事故・パスポート紛失などで困ったときは、日本大使館・総領事館に相談できます。連絡先はAU大好きのトップページにまとめています。", en: "The Japanese Embassy and Consulates can help in an emergency.", link: "https://audaisuki.com/#embassy", linkLabel: "AU大好き：大使館・領事館" },
  { tag: "相談 / Help", titleJa: "わからないことは質問箱へ", bodyJa: "「この契約は大丈夫？」「この街の住みやすさは？」など、AU大好きの掲示板「お助け質問箱」でオーストラリアにいる日本人に質問できます。", en: "Ask other Japanese people in Australia on our Q&A board.", link: "https://audaisuki.com/classifieds?c=question", linkLabel: "AU大好き：お助け質問箱" },
];

const DAY_MS = 86_400_000;

/** Day number in Perth time (UTC+8), so the tip changes at midnight in WA. */
function perthDayNumber(date: Date): number {
  return Math.floor((date.getTime() + 8 * 3_600_000) / DAY_MS);
}

export function tipForDate(date = new Date()): Tip {
  return tips[perthDayNumber(date) % tips.length];
}

/** Today's tip first, then the previous days. */
export function recentTips(days: number, date = new Date()): { date: Date; tip: Tip }[] {
  return Array.from({ length: Math.min(days, tips.length) }, (_, i) => {
    const d = new Date(date.getTime() - i * DAY_MS);
    return { date: d, tip: tipForDate(d) };
  });
}
