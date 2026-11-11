// Official figures used by the pay checker. Update these when the governments change them
// (Australia: 1 July each year; New Zealand: 1 April each year). Checked 12 November 2026.

export const AU = {
  label: '2026–27年度（2026年7月1日〜）',
  minWage: 26.44, // Fair Work: National Minimum Wage from 1 July 2026
  casualMinWage: 33.05, // $26.44 + 25% casual loading
  superRate: 0.12, // Superannuation guarantee (paid by the employer on top of wages)
  // ATO: working holiday maker (subclass 417 / 462) tax rates 2026–27
  whmBrackets: [
    { upTo: 45000, rate: 0.15 },
    { upTo: 135000, rate: 0.3 },
    { upTo: 190000, rate: 0.37 },
    { upTo: Infinity, rate: 0.45 },
  ],
  sources: [
    { label: 'Fair Work Ombudsman — 最低賃金（Minimum wages）', href: 'https://www.fairwork.gov.au/tools-and-resources/fact-sheets/minimum-workplace-entitlements/minimum-wages' },
    { label: 'Fair Work — 職種別の正しい時給を調べる（Pay and Conditions Tool）', href: 'https://calculate.fairwork.gov.au/' },
    { label: 'ATO — ワーホリの税率（Schedule 15 – Working holiday makers）', href: 'https://www.ato.gov.au/tax-rates-and-codes/schedule-15-tax-table-for-working-holiday-makers' },
  ],
};

export const NZ = {
  label: '2026–27年度（2026年4月1日〜）',
  minWage: 23.95, // Employment New Zealand: adult minimum wage from 1 April 2026
  startingOutWage: 19.16, // starting-out and training minimum wage
  accRate: 0.0175, // ACC earners' levy 2026–27
  accMaxEarnings: 156641,
  // IRD: tax rates for individuals (unchanged for 2026–27)
  brackets: [
    { upTo: 15600, rate: 0.105 },
    { upTo: 53500, rate: 0.175 },
    { upTo: 78100, rate: 0.3 },
    { upTo: 180000, rate: 0.33 },
    { upTo: Infinity, rate: 0.39 },
  ],
  sources: [
    { label: 'Employment New Zealand — 最低賃金（Minimum wage）', href: 'https://www.employment.govt.nz/news-and-updates/minimum-wage-is-increasing-on-1-april-2026' },
    { label: 'Inland Revenue (IRD) — 税コードと税率', href: 'https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/about-tax-codes' },
    { label: 'Inland Revenue (IRD) — ACC Earners’ levy', href: 'https://www.ird.govt.nz/income-tax/income-tax-for-individuals/acc-clients-and-carers/acc-earners-levy-rates' },
  ],
};

export function progressiveTax(annual: number, brackets: { upTo: number; rate: number }[]) {
  let tax = 0;
  let lower = 0;
  for (const b of brackets) {
    if (annual <= lower) break;
    const slice = Math.min(annual, b.upTo) - lower;
    tax += slice * b.rate;
    lower = b.upTo;
  }
  return tax;
}
