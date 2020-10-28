import { expect } from "chai";
import {
  translateValidNumItems,
  translateValidPricePerItems,
  translateValidProvinceState
} from "../src/validValues";
import * as assert from "assert";

export const isValidNumItemsTest = () => {
  describe("Number of Items Validation Test ", () => {
    describe("Valid values Test", () => {
      it("should be valid for 500 items", () => {
        expect(translateValidNumItems(500)).to.equals(500);
      });
      it("should be valid for 500 items", () => {
        expect(translateValidNumItems("500")).to.equals(500);
      });
      it("should be valid for 3600 items", () => {
        expect(translateValidNumItems(3600)).to.equals(3600);
      });
      it("should be valid for 3600 items", () => {
        expect(translateValidNumItems("3600")).to.equals(3600);
      });
    });

    describe("Invalid values Test", () => {
      it("should be undefined for negative integer input", () => {
        expect(translateValidNumItems(-1)).to.equals(undefined);
      });
      it("should be undefined for negative integer text input", () => {
        expect(translateValidNumItems("-1")).to.equals(undefined);
      });
      it("should be undefined for positive floating point input", () => {
        expect(translateValidNumItems(1.1)).to.equals(undefined);
      });
      it("should be undefined for positive floating point text input", () => {
        expect(translateValidNumItems("1.1")).to.equals(undefined);
      });
      it("should be undefined for negative floating point input", () => {
        expect(translateValidNumItems(-1.1)).to.equals(undefined);
      });
      it("should be undefined for negative floating point text input", () => {
        expect(translateValidNumItems("-1.1")).to.equals(undefined);
      });
      it("should be undefined for undefined input", () => {
        expect(translateValidNumItems(undefined)).to.equals(undefined);
      });
      it("should be undefined for undefined text input", () => {
        expect(translateValidNumItems("undefined")).to.equals(undefined);
      });
      it("should be null for undefined input", () => {
        expect(translateValidNumItems(null)).to.equals(undefined);
      });
      it("should be null for undefined text input", () => {
        expect(translateValidNumItems("null")).to.equals(undefined);
      });
    });
  });
};

export const isValidPricePerItemsTest = () => {
  describe("Price Per Item Validation Test", () => {
    describe("Valid values Test", () => {
      it("should be valid for $1 per item", () => {
        expect(translateValidPricePerItems(1)).to.equals(1);
      });
      it("should be valid for $2.25 per item", () => {
        expect(translateValidPricePerItems(2.25)).to.equals(2.25);
      });
    });

    describe("Invalid Values Test", () => {
      it("should be undefined for positive floating with more than 2 decimal input", () => {
        expect(translateValidPricePerItems(1.123)).to.equals(undefined);
      });
      it("should be undefined for positive floating with more than 2 decimal text input", () => {
        expect(translateValidPricePerItems("1.123")).to.equals(undefined);
      });
      it("should be undefined for negative input", () => {
        expect(translateValidPricePerItems(-1.1)).to.equals(undefined);
      });
      it("should be undefined for negative text input", () => {
        expect(translateValidPricePerItems("-1.1")).to.equals(undefined);
      });
      it("should be undefined for undefined input", () => {
        expect(translateValidPricePerItems(undefined)).to.equals(undefined);
      });
      it("should be null for undefined input", () => {
        expect(translateValidPricePerItems(null)).to.equals(undefined);
      });
    });
  });
};

export const isValidProvinceStateTest = () => {
  describe("Province/State Code Test", () => {
    describe("Valid values Test", () => {
      it("should be valid for Province ON", () => {
        expect(translateValidProvinceState("ON")).to.equals("ON");
      });
      it("should be valid for Province Ontario", () => {
        expect(translateValidProvinceState("Ontario")).to.equals("ON");
        expect(translateValidProvinceState("OnTaRiO")).to.equals("ON");
      });
      it("should be valid for State MI", () => {
        expect(translateValidProvinceState("MI")).to.equals("MI");
      });
      it("should be valid for State Michigan", () => {
        expect(translateValidProvinceState("Michigan")).to.equals("MI");
        expect(translateValidProvinceState("MiChIgAn")).to.equals("MI");
      });
    });

    describe("Invalid values Test", () => {
      it("should be invalid for Province/State UK", () => {
        expect(translateValidProvinceState("UK")).to.equals(undefined);
      });
      it("should be invalid for Province/State Empty String", () => {
        expect(translateValidProvinceState("")).to.equals(undefined);
      });
      it("should be invalid for Province/State United Kingdom", () => {
        expect(translateValidProvinceState("United Kingdom")).to.equals(
          undefined
        );
      });
      it("should be invalid for Province/State null", () => {
        expect(translateValidProvinceState(null)).to.equals(undefined);
      });
      it("should be invalid for Province/State null text", () => {
        expect(translateValidProvinceState("null")).to.equals(undefined);
      });
      it("should be invalid for Province/State undefined", () => {
        expect(translateValidProvinceState(undefined)).to.equals(undefined);
      });
      it("should be invalid for Province/State undefined text", () => {
        expect(translateValidProvinceState("undefined")).to.equals(undefined);
      });
    });
  });
};
