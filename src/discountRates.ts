export const DISCOUNT_RATES = [
  {
    minOrderValue: 10000,
    discountRate: 0.1
  },
  {
    minOrderValue: 7000,
    discountRate: 0.07
  },
  {
    minOrderValue: 5000,
    discountRate: 0.05
  },
  {
    minOrderValue: 1000,
    discountRate: 0.03
  }
];

export function discountRate(orderValue: number): number {
  const foundDiscountRate = DISCOUNT_RATES.find(
    aDiscountRate => orderValue >= aDiscountRate.minOrderValue
  );
  return foundDiscountRate ? foundDiscountRate.discountRate : 0;
}
