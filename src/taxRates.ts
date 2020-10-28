export const TAX_RATES = [
  {
    province: "AB",
    taxRate: 0.05
  },
  {
    province: "ON",
    taxRate: 0.13
  },
  {
    province: "QC",
    taxRate: 0.14975
  },
  {
    province: "MI",
    taxRate: 0.06
  },
  {
    province: "DE",
    taxRate: 0.0
  }
];

export function taxRate(provinceStateCode: string): number {
  const foundTaxRate = TAX_RATES.find(
    aTaxRate => aTaxRate.province === provinceStateCode
  );
  // Assume states not in the list to have tax rate of 0
  return foundTaxRate ? foundTaxRate.taxRate : 0;
}
