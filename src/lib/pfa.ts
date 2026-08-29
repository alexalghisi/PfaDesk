/** Educational 2026 sistem-real sketch. Not ANAF advice. Salariu minim 1 Jan 2026. */
export const MIN_WAGE_2026 = 4_050;
export const INCOME_TAX_RATE = 0.1;
export const CASS_RATE = 0.1;
export const CAS_RATE = 0.25;

export type PfaBreakdown = {
  cass: number;
  cas: number;
  incomeTax: number;
  total: number;
  takeHome: number;
  cassBase: number;
};

export function pfaSketch(netLei: number, employeeHealth: boolean): PfaBreakdown {
  const cassFloor = 6 * MIN_WAGE_2026;
  const cassCap = 72 * MIN_WAGE_2026;
  const cas12 = 12 * MIN_WAGE_2026;
  const cas24 = 24 * MIN_WAGE_2026;

  let cassBase = 0;
  if (netLei > 0) {
    cassBase = employeeHealth
      ? Math.min(netLei, cassCap)
      : Math.min(Math.max(netLei, cassFloor), cassCap);
  }

  const cass = Math.round(cassBase * CASS_RATE);

  let cas = 0;
  if (netLei >= cas24) cas = Math.round(cas24 * CAS_RATE);
  else if (netLei >= cas12) cas = Math.round(cas12 * CAS_RATE);

  const taxable = Math.max(0, netLei - cas - cass);
  const incomeTax = Math.round(taxable * INCOME_TAX_RATE);
  const total = cas + cass + incomeTax;

  return { cass, cas, incomeTax, total, takeHome: netLei - total, cassBase };
}

export function formatLei(n: number): string {
  return `${String(n)} lei`;
}
