import {
  calTotalPriceByInputTest,
  calTotalPriceTest,
  realCalTotalPriceTest
} from "./calTotalPrice.spec";
import {
  isValidNumItemsTest,
  isValidPricePerItemsTest,
  isValidProvinceStateTest
} from "./validValues.spec";
import { discountRateTests } from "./discountRates.spec";
import { taxRateTests } from "./taxRate.spec";

taxRateTests();
discountRateTests();
isValidNumItemsTest();
isValidPricePerItemsTest();
isValidProvinceStateTest();
realCalTotalPriceTest();
calTotalPriceTest();
calTotalPriceByInputTest();
