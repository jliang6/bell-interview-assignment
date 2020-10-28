import {
  translateValidNumItems,
  translateValidPricePerItems,
  translateValidProvinceState
} from "./validValues";
import { IllegalArgumentException } from "./IllegalArgumentException";
import { discountRate } from "./discountRates";
import { taxRate } from "./taxRates";

export interface CalTotalPriceInput {
  numItems: number | string;
  pricePerItem: number | string;
  provinceStateCode: string;
}

export function calTotalPriceByInput(
  calTotalPriceInput: CalTotalPriceInput
): number {
  return calTotalPrice(
    calTotalPriceInput.numItems,
    calTotalPriceInput.pricePerItem,
    calTotalPriceInput.provinceStateCode
  );
}

export function calTotalPrice(
  numItems: number | string,
  pricePerItem: number | string,
  provinceStateCode: string
): number {
  let result = 0;

  // validate all inputs, Preconditions
  const validNumItems = translateValidNumItems(numItems);
  const validPricePerItem = translateValidPricePerItems(pricePerItem);
  const validProvinceState = translateValidProvinceState(provinceStateCode);

  if (validNumItems && validPricePerItem && validProvinceState) {
    result = realCalTotalPrice(
      validNumItems,
      validPricePerItem,
      validProvinceState
    );
  } else {
    throw new IllegalArgumentException(
      validNumItems ? null : numItems,
      validPricePerItem ? null : pricePerItem,
      validProvinceState ? null : provinceStateCode
    );
  }

  return result;
}

export function realCalTotalPrice(
  numItems: number,
  pricePerItem: number,
  provinceStateCode: string
): number {
  const totalCostForItems = numItems * pricePerItem;
  const discountedValue =
    totalCostForItems * (1 - discountRate(totalCostForItems));
  return discountedValue * (1 + taxRate(provinceStateCode));
}
