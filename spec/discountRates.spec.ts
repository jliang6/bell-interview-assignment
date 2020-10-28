import { expect } from "chai";
import { realCalTotalPrice } from "../src/calTotalPrice";
import { discountRate } from "../src/discountRates";

export const discountRateTests = () => {
  describe("discountRateTests", () => {
    it("should be 10% for $10000 and over", () => {
      expect(discountRate(200000)).to.equal(0.1);
      expect(discountRate(100001)).to.equal(0.1);
      expect(discountRate(100000)).to.equal(0.1);
    });
    it("should be 7% for between $7000 and $9999.99", () => {
      expect(discountRate(7000)).to.equal(0.07);
      expect(discountRate(9999.99)).to.equal(0.07);
    });
    it("should be 5% for between $5000 and $6999.99", () => {
      expect(discountRate(5000)).to.equal(0.05);
      expect(discountRate(6999.99)).to.equal(0.05);
    });
    it("should be 3% for between $1000 and $4999.99", () => {
      expect(discountRate(1000)).to.equal(0.03);
      expect(discountRate(4999.99)).to.equal(0.03);
    });
    it("should be 0% for under $1000", () => {
      expect(discountRate(0)).to.equal(0);
      expect(discountRate(999.99)).to.equal(0);
    });
    it("should be 0% for invalid value", () => {
      expect(discountRate(-1)).to.equal(0);
      expect(discountRate(-100000)).to.equal(0);
    });
  });
};
