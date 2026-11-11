'use client';

import { useState } from 'react';
import { track } from '../lib/track';
import { AU, NZ, progressiveTax } from './rates';

type Country = 'au' | 'nz';
type Result = {
  country: Country;
  hourly: number;
  hours: number;
  minimum: number;
  minimumLabel: string;
  below: boolean;
  shortfallWeek: number;
  grossWeek: number;
  taxWeek: number;
  accWeek: number;
  netWeek: number;
  superWeek: number;
  holidayPayWeek: number;
};

const money = (n: number, c: Country) =>
  `${c === 'au' ? 'A' : 'NZ'}$${n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default function PayChecker() {
  const [country, setCountry] = useState<Country>('au');
  const [hourly, setHourly] = useState('');
  const [hours, setHours] = useState('38');
  const [casual, setCasual] = useState(true);
  const [whm, setWhm] = useState(true);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  function check(e: React.FormEvent) {
    e.preventDefault();
    const h = Number(hourly);
    const hrs = Number(hours);
    if (!(h > 0) || !(hrs > 0) || hrs > 80) {
      setError('時給と1週間の労働時間を正しく入力してください（労働時間は80時間まで）。');
      setResult(null);
      return;
    }
    setError('');
    const grossWeek = h * hrs;
    const annual = grossWeek * 52;
    let r: Result;
    if (country === 'au') {
      const minimum = casual ? AU.casualMinWage : AU.minWage;
      const taxWeek = whm ? progressiveTax(annual, AU.whmBrackets) / 52 : NaN;
      r = {
        country, hourly: h, hours: hrs, minimum,
        minimumLabel: casual ? 'カジュアル（25%加算込み）の最低時給' : '正社員・パートの最低時給',
        below: h < minimum,
        shortfallWeek: Math.max(0, (minimum - h) * hrs),
        grossWeek, taxWeek, accWeek: 0,
        netWeek: whm ? grossWeek - taxWeek : NaN,
        superWeek: grossWeek * AU.superRate,
        holidayPayWeek: 0,
      };
    } else {
      const minimum = NZ.minWage;
      const taxWeek = progressiveTax(annual, NZ.brackets) / 52;
      const accWeek = (Math.min(annual, NZ.accMaxEarnings) * NZ.accRate) / 52;
      r = {
        country, hourly: h, hours: hrs, minimum,
        minimumLabel: '大人の最低時給（16歳以上）',
        below: h < minimum,
        shortfallWeek: Math.max(0, (minimum - h) * hrs),
        grossWeek, taxWeek, accWeek,
        netWeek: grossWeek - taxWeek - accWeek,
        superWeek: 0,
        holidayPayWeek: casual ? grossWeek * 0.08 : 0,
      };
    }
    setResult(r);
    // Only simple labels are sent — never the actual pay figures.
    track('pay_check_used', { country, outcome: r.below ? 'below_minimum' : 'at_or_above', casual, whm: country === 'au' ? whm : false });
  }

  const c = result?.country ?? country;

  return (
    <div className="payChecker">
      <form onSubmit={check} className="payForm">
        <fieldset>
          <legend>どこで働いていますか？ / Country</legend>
          <div className="segmented">
            <button type="button" className={country === 'au' ? 'on' : ''} onClick={() => { setCountry('au'); setResult(null); }}>🇦🇺 オーストラリア</button>
            <button type="button" className={country === 'nz' ? 'on' : ''} onClick={() => { setCountry('nz'); setResult(null); }}>🇳🇿 ニュージーランド</button>
          </div>
        </fieldset>

        <label>
          時給（税引き前） / Hourly rate before tax
          <span className="inputWithUnit"><em>{country === 'au' ? 'A$' : 'NZ$'}</em><input inputMode="decimal" value={hourly} onChange={(e) => setHourly(e.target.value)} placeholder={country === 'au' ? '例: 28.50' : '例: 24.00'} /></span>
        </label>

        <label>
          1週間の労働時間 / Hours per week
          <span className="inputWithUnit"><input inputMode="decimal" value={hours} onChange={(e) => setHours(e.target.value)} /><em>時間</em></span>
        </label>

        <label className="check">
          <input type="checkbox" checked={casual} onChange={(e) => setCasual(e.target.checked)} />
          {country === 'au' ? 'カジュアル雇用（有給休暇なし）' : 'カジュアル・短期の仕事（ホリデーペイ8%を時給と別に受け取る）'}
        </label>

        {country === 'au' && (
          <label className="check">
            <input type="checkbox" checked={whm} onChange={(e) => setWhm(e.target.checked)} />
            ワーキングホリデービザ（417 / 462）で働いている
          </label>
        )}

        <button type="submit" className="payButton">チェックする / Check my pay</button>
        {error && <p className="payError" role="alert">{error}</p>}
      </form>

      {result && (
        <div className="payResult" aria-live="polite">
          <div className={result.below ? 'verdict bad' : 'verdict good'}>
            {result.below ? (
              <>
                <strong>⚠️ 最低賃金より低い可能性があります</strong>
                <p>{result.minimumLabel}は <b>{money(result.minimum, c)}</b> です。あなたの時給は {money(result.hourly, c)} なので、1週間あたり約 <b>{money(result.shortfallWeek, c)}</b> 少ない計算になります。</p>
              </>
            ) : (
              <>
                <strong>✅ 法律で決められた最低時給以上です</strong>
                <p>{result.minimumLabel}は {money(result.minimum, c)} です。{c === 'au' ? 'ただし、多くの仕事は「アワード（Award）」でもっと高い時給が決められています。下のFair Workのツールで職種ごとの正しい時給を確認してください。' : 'ただし、雇用契約でこれより高い時給が決められている場合は、その金額が支払われる必要があります。'}</p>
              </>
            )}
          </div>

          <table className="payTable">
            <tbody>
              <tr><th>1週間の総支給額（税引き前）</th><td>{money(result.grossWeek, c)}</td></tr>
              {c === 'au' ? (
                <>
                  {whm ? (
                    <>
                      <tr><th>所得税（目安・ワーホリ税率）</th><td>− {money(result.taxWeek, c)}</td></tr>
                      <tr className="total"><th>手取り（目安）</th><td>{money(result.netWeek, c)}</td></tr>
                    </>
                  ) : (
                    <tr><th>所得税</th><td>ビザや居住状況によって税率が違うため、ここでは計算していません。</td></tr>
                  )}
                  <tr><th>スーパー（年金・雇用主が別に積み立て 12%）</th><td>+ {money(result.superWeek, c)}</td></tr>
                </>
              ) : (
                <>
                  <tr><th>所得税（目安・税コードM）</th><td>− {money(result.taxWeek, c)}</td></tr>
                  <tr><th>ACC保険料（1.75%）</th><td>− {money(result.accWeek, c)}</td></tr>
                  <tr className="total"><th>手取り（目安）</th><td>{money(result.netWeek, c)}</td></tr>
                  {result.holidayPayWeek > 0 && <tr><th>ホリデーペイ（8%・契約で時給と別に毎回支払う場合の目安）</th><td>+ {money(result.holidayPayWeek, c)}</td></tr>}
                </>
              )}
            </tbody>
          </table>

          {result.below && (
            <div className="payNext">
              <b>次にできること</b>
              <ul>
                <li>給与明細（ペイスリップ）と働いた時間の記録を必ず保管してください。</li>
                {c === 'au' ? (
                  <>
                    <li>Fair Work Ombudsman（公正労働オンブズマン）に無料で相談できます。日本語の通訳サービスも利用できます（TIS National 131 450）。</li>
                    <li><a href="https://www.fairwork.gov.au/" target="_blank" rel="noopener" onClick={() => track('official_link_click', { to: 'fairwork', from: 'pay_check' })}>Fair Work Ombudsman 公式サイト ↗</a></li>
                  </>
                ) : (
                  <>
                    <li>Employment New Zealand に無料で相談できます。</li>
                    <li><a href="https://www.employment.govt.nz/" target="_blank" rel="noopener" onClick={() => track('official_link_click', { to: 'employment_nz', from: 'pay_check' })}>Employment New Zealand 公式サイト ↗</a></li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
