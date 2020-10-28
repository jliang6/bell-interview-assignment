import { expect } from "chai";
import "mocha";
import { calTotalPrice, calTotalPriceByInput } from "../src";
import { realCalTotalPrice } from "../src/calTotalPrice";
import { IllegalArgumentException } from "../src/IllegalArgumentException";
import * as assert from "assert";

export const calTotalPriceByInputTest = () => {
  describe("calTotalPriceByInputTest example1Test", () => {
    it("should 500 items, $1 per item, Ontario", () => {
      expect(
        calTotalPriceByInput({
          numItems: 500,
          pricePerItem: 1,
          provinceStateCode: "ON"
        })
      ).to.equal(565);
      expect(
        calTotalPriceByInput({
          numItems: 500,
          pricePerItem: 1,
          provinceStateCode: "Ontario"
        })
      ).to.equal(565);
      expect(
        calTotalPriceByInput({
          numItems: 500,
          pricePerItem: 1,
          provinceStateCode: "OnTaRiO"
        })
      ).to.equal(565);
    });
  });

  describe("calTotalPriceByInputTest invalid values", () => {
    const numItems = "ab";
    const pricePerItem = "def";
    const provinceStateCode = "UK";
    it("should throw an IllegalArgumentException for invalid numItems", () => {
      assert.throws(() => {
        calTotalPriceByInput({
          numItems,
          pricePerItem: 1,
          provinceStateCode: "ON"
        });
        assert.fail("should never reach here.");
      }, new IllegalArgumentException(numItems, null, null));
    });
    it("should throw an IllegalArgumentException for invalid pricePerItem", () => {
      assert.throws(() => {
        calTotalPriceByInput({
          numItems: 500,
          pricePerItem,
          provinceStateCode: "ON"
        });
        assert.fail("should never reach here.");
      }, new IllegalArgumentException(null, pricePerItem, null));
    });

    it("should throw an IllegalArgumentException for invalid provinceStateCode", () => {
      assert.throws(() => {
        calTotalPriceByInput({
          numItems: 500,
          pricePerItem: 1,
          provinceStateCode
        });
        assert.fail("should never reach here.");
      }, new IllegalArgumentException(null, null, provinceStateCode));
    });
  });

  describe("calTotalPriceByInputTest example2Test", () => {
    it("should 3600 items, $2.25 per item, Michigan", () => {
      expect(
        calTotalPriceByInput({
          numItems: 3600,
          pricePerItem: 2.25,
          provinceStateCode: "MI"
        })
      ).to.equal(7984.98);
      expect(
        calTotalPriceByInput({
          numItems: 3600,
          pricePerItem: 2.25,
          provinceStateCode: "Michigan"
        })
      ).to.equal(7984.98);
      expect(
        calTotalPriceByInput({
          numItems: 3600,
          pricePerItem: 2.25,
          provinceStateCode: "MiChIgAn"
        })
      ).to.equal(7984.98);
    });
  });
};

export const calTotalPriceTest = () => {
  describe("Given Test cases", () => {
    describe("calTotalPriceTest example1Test", () => {
      it("should 500 items, $1 per item, Ontario", () => {
        expect(calTotalPrice(500, 1, "ON")).to.equal(565);
        expect(calTotalPrice(500, 1, "Ontario")).to.equal(565);
        expect(calTotalPrice(500, 1, "OnTaRiO")).to.equal(565);
      });
    });

    describe("calTotalPriceTest example2Test", () => {
      it("should 3600 items, $2.25 per item, Michigan", () => {
        expect(calTotalPrice(3600, 2.25, "MI")).to.equal(7984.98);
        expect(calTotalPrice(3600, 2.25, "Michigan")).to.equal(7984.98);
        expect(calTotalPrice(3600, 2.25, "MiChIgAn")).to.equal(7984.98);
      });
    });
  });

  describe("Invalid Input(s) Test Cases", () => {
    const numItems = "abc";
    const pricePerItem = "def";
    const provinceStateCode = "UK";

    it("should throw an IllegalArgumentException for invalid numItems", () => {
      assert.throws(() => {
        calTotalPrice(numItems, 1, "ON");
        assert.fail("should never reach here.");
      }, new IllegalArgumentException(numItems, null, null));
    });

    it("should throw an IllegalArgumentException for invalid pricePerItem", () => {
      assert.throws(() => {
        calTotalPrice(500, pricePerItem, "ON");
        assert.fail("should never reach here.");
      }, new IllegalArgumentException(null, pricePerItem, null));
    });

    it("should throw an IllegalArgumentException for invalid provinceStateCode", () => {
      assert.throws(() => {
        calTotalPrice(500, 1, provinceStateCode);
        assert.fail("should never reach here.");
      }, new IllegalArgumentException(null, null, provinceStateCode));
    });
  });
};

export const realCalTotalPriceTest = () => {
  describe("realCalTotalPriceTest", () => {
    it("should 500 items, $1 per item, Ontario", () => {
      expect(realCalTotalPrice(500, 1, "ON")).to.equal(565);
    });

    it("should 3600 items, $2.25 per item, Michigan", () => {
      expect(realCalTotalPrice(3600, 2.25, "MI")).to.equal(7984.98);
    });
  });
};
