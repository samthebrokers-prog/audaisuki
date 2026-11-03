// 今日のオージー英語 / Aussie English phrase of the day.
// One phrase a day, rotating by the Perth calendar date. No AI or running cost.
// To add more, append to the list — the rotation adjusts by itself.

export type Phrase = {
  en: string;
  ja: string; // meaning in Japanese
  example: string; // example sentence in English
  exampleJa: string; // the example in Japanese
  tip?: string; // optional short note in Japanese
};

export const phrases: Phrase[] = [
  { en: "G'day", ja: "こんにちは（オーストラリア式のあいさつ）", example: "G'day! How's it going?", exampleJa: "やあ！調子はどう？" },
  { en: "How ya going?", ja: "元気？調子はどう？", example: "How ya going, mate?", exampleJa: "元気？", tip: "「Good, thanks! You?」と返せばOK。" },
  { en: "No worries", ja: "大丈夫・どういたしまして", example: "\"Thanks for your help!\" \"No worries!\"", exampleJa: "「手伝ってくれてありがとう！」「どういたしまして！」" },
  { en: "Arvo", ja: "午後（afternoon）", example: "See you this arvo.", exampleJa: "今日の午後に会おう。" },
  { en: "Brekkie", ja: "朝ごはん（breakfast）", example: "Let's grab brekkie at the café.", exampleJa: "カフェで朝ごはんを食べよう。" },
  { en: "Thanks heaps", ja: "本当にありがとう（heaps = たくさん）", example: "Thanks heaps for the lift!", exampleJa: "車で送ってくれて本当にありがとう！" },
  { en: "Reckon", ja: "〜だと思う", example: "I reckon it'll rain tomorrow.", exampleJa: "明日は雨が降ると思う。" },
  { en: "Keen", ja: "〜したい・乗り気の", example: "Are you keen for a beach trip?", exampleJa: "ビーチに行かない？（行きたい？）" },
  { en: "Mate", ja: "友達・親しい呼びかけ", example: "Cheers, mate!", exampleJa: "ありがとう！" },
  { en: "Cheers", ja: "ありがとう・乾杯", example: "Cheers for the coffee!", exampleJa: "コーヒーありがとう！" },
  { en: "Servo", ja: "ガソリンスタンド", example: "I'll stop at the servo for petrol.", exampleJa: "ガソリンスタンドで給油するね。" },
  { en: "Bottle-o", ja: "酒屋（ボトルショップ）", example: "Can we stop at the bottle-o?", exampleJa: "酒屋に寄ってもいい？" },
  { en: "Thongs", ja: "ビーチサンダル", example: "Don't forget your thongs.", exampleJa: "ビーサンを忘れないでね。", tip: "日本語の「Tバック」の意味ではありません。" },
  { en: "Sunnies", ja: "サングラス", example: "Grab your sunnies, it's bright.", exampleJa: "まぶしいからサングラスを持って行って。" },
  { en: "Barbie", ja: "バーベキュー", example: "We're having a barbie on Saturday.", exampleJa: "土曜日にバーベキューをするよ。" },
  { en: "Esky", ja: "クーラーボックス", example: "Put the drinks in the esky.", exampleJa: "飲み物をクーラーボックスに入れて。" },
  { en: "Ute", ja: "ピックアップトラック", example: "He drives a ute for work.", exampleJa: "彼は仕事でピックアップトラックに乗っている。" },
  { en: "Macca's", ja: "マクドナルド", example: "Let's get Macca's on the way home.", exampleJa: "帰りにマックに寄ろう。" },
  { en: "Footy", ja: "フットボール（AFLやラグビーリーグ）", example: "Are you watching the footy tonight?", exampleJa: "今夜フットボールの試合を見る？" },
  { en: "Fair dinkum", ja: "本当に・本物の", example: "Is that fair dinkum?", exampleJa: "それ本当？" },
  { en: "She'll be right", ja: "なんとかなるよ・大丈夫", example: "Don't stress, she'll be right.", exampleJa: "心配しないで、なんとかなるよ。" },
  { en: "Too easy", ja: "お安い御用・いいよ", example: "\"Can you start at 8?\" \"Too easy.\"", exampleJa: "「8時から始められる？」「いいですよ。」" },
  { en: "Suss it out", ja: "調べる・確かめる", example: "I'll suss out the bus times.", exampleJa: "バスの時間を調べておくね。" },
  { en: "Hang on a sec", ja: "ちょっと待って", example: "Hang on a sec, I'll check.", exampleJa: "ちょっと待って、確認するね。" },
  { en: "My shout", ja: "私のおごり", example: "Put your wallet away — it's my shout.", exampleJa: "財布はしまって、今日は私のおごりだよ。" },
  { en: "BYO", ja: "（お酒などの）持ち込み可", example: "This restaurant is BYO.", exampleJa: "このレストランはお酒の持ち込みができる。" },
  { en: "Rostered on", ja: "シフトに入っている", example: "I'm rostered on this weekend.", exampleJa: "今週末はシフトが入っている。" },
  { en: "Smoko", ja: "仕事中の休憩", example: "Let's talk about it at smoko.", exampleJa: "休憩のときに話そう。" },
  { en: "Pay slip", ja: "給与明細", example: "Always check your pay slip.", exampleJa: "給与明細は必ず確認しよう。", tip: "時給や税金が正しいか毎回チェック！" },
  { en: "TFN (tax file number)", ja: "納税者番号", example: "Your boss will ask for your TFN.", exampleJa: "雇い主から納税者番号を聞かれます。" },
  { en: "Super", ja: "年金（スーパーアニュエーション）", example: "Your employer pays super for you.", exampleJa: "雇い主があなたの年金を払います。", tip: "帰国後に払い戻しを申請できる場合があります。" },
  { en: "Bond", ja: "賃貸の保証金（敷金）", example: "The bond is four weeks' rent.", exampleJa: "保証金は家賃4週間分です。" },
  { en: "Flatmate", ja: "ルームメイト・シェアメイト", example: "I'm looking for a flatmate.", exampleJa: "シェアメイトを探しています。" },
  { en: "Lease", ja: "賃貸契約", example: "The lease is for six months.", exampleJa: "賃貸契約は6か月です。" },
  { en: "Uni", ja: "大学（university）", example: "She's studying at uni.", exampleJa: "彼女は大学で勉強している。" },
  { en: "Smashed avo", ja: "つぶしたアボカド（トーストにのせる定番朝食）", example: "Smashed avo on toast, please.", exampleJa: "アボカドトーストをください。" },
  { en: "Flat white", ja: "フラットホワイト（オーストラリア定番のコーヒー）", example: "Can I get a large flat white?", exampleJa: "フラットホワイトのLをください。" },
  { en: "Takeaway", ja: "持ち帰り", example: "\"Here or takeaway?\" \"Takeaway, please.\"", exampleJa: "「店内ですか、お持ち帰りですか？」「持ち帰りで。」" },
  { en: "Brolly", ja: "傘", example: "Take a brolly, it might rain.", exampleJa: "雨が降るかもしれないから傘を持って行って。" },
  { en: "Stoked", ja: "すごくうれしい", example: "I'm stoked I got the job!", exampleJa: "仕事が決まって最高にうれしい！" },
  { en: "Knackered", ja: "へとへとに疲れた", example: "I'm knackered after work.", exampleJa: "仕事のあとでへとへとだよ。" },
  { en: "Ripper", ja: "最高・すばらしい", example: "That was a ripper of a day!", exampleJa: "最高の一日だった！" },
  { en: "Chockers", ja: "満員・ぎゅうぎゅう", example: "The train was chockers this morning.", exampleJa: "今朝の電車は満員だった。" },
  { en: "Woop Woop", ja: "ど田舎・すごく遠い所", example: "He lives out in Woop Woop.", exampleJa: "彼はすごく田舎に住んでいる。" },
  { en: "Rego", ja: "車の登録（車検のようなもの）", example: "Is the car's rego up to date?", exampleJa: "その車の登録は切れていない？", tip: "中古車を買うときは必ず確認！" },
  { en: "Doona", ja: "掛け布団", example: "It's cold — grab a doona.", exampleJa: "寒いから掛け布団を使って。" },
  { en: "Bring a plate", ja: "料理を一品持ってきて（持ち寄り）", example: "It's a party — please bring a plate.", exampleJa: "パーティーなので料理を一品持ってきてね。", tip: "空のお皿を持って行くのではありません！" },
  { en: "Good on ya", ja: "よくやったね・えらい", example: "You passed? Good on ya!", exampleJa: "合格したの？よくやったね！" },
  { en: "Yeah, nah", ja: "いや、やめておく（やんわり断る）", example: "\"Another drink?\" \"Yeah, nah, I'm good.\"", exampleJa: "「もう一杯どう？」「いや、大丈夫。」" },
  { en: "Nah, yeah", ja: "うん、そうだね（同意）", example: "\"Was it good?\" \"Nah, yeah, it was great.\"", exampleJa: "「よかった？」「うん、すごくよかった。」" },
];

const DAY_MS = 86_400_000;

/** Day number in Perth time (UTC+8), so the phrase changes at midnight in WA. */
function perthDayNumber(date: Date): number {
  return Math.floor((date.getTime() + 8 * 3_600_000) / DAY_MS);
}

export function phraseForDate(date = new Date()): Phrase {
  return phrases[perthDayNumber(date) % phrases.length];
}

/** Today's phrase first, then the previous days (for the Learn English page). */
export function recentPhrases(days: number, date = new Date()): { date: Date; phrase: Phrase }[] {
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(date.getTime() - i * DAY_MS);
    return { date: d, phrase: phraseForDate(d) };
  });
}
