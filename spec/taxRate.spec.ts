import { expect } from "chai";
import {} from "../src/discountRates";
import { TAX_RATES, taxRate } from "../src/taxRates";
import { PROVINCES } from "../src/provinces.const";
import { name2Code } from "../src/validValues";

export const taxRateTests = () => {
  describe("taxRateTests", () => {
    it("should be 5% for AB", () => {
      const abTaxRate = TAX_RATES.find(aTaxRate => aTaxRate.province === "AB")
        .taxRate;
      expect(taxRate("AB")).to.equal(abTaxRate);
    });
    it("should be 13% for ON", () => {
      const onTaxRate = TAX_RATES.find(aTaxRate => aTaxRate.province === "ON")
        .taxRate;
      expect(taxRate("ON")).to.equal(onTaxRate);
    });
    it("should be 14.975% for QC", () => {
      const qcTaxRate = TAX_RATES.find(aTaxRate => aTaxRate.province === "QC")
        .taxRate;
      expect(taxRate("QC")).to.equal(qcTaxRate);
    });
    it("should be 6% for MI", () => {
      const miTaxRate = TAX_RATES.find(aTaxRate => aTaxRate.province === "MI")
        .taxRate;
      expect(taxRate("MI")).to.equal(miTaxRate);
    });
    it("should be 0% for DE", () => {
      expect(taxRate("DE")).to.equal(0);
    });
    it("should be 0% for unknown", () => {
      expect(taxRate("UK")).to.equal(0);
    });
  });
};
