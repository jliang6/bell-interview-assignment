import { LocationCode, PROVINCE_CODES, PROVINCES } from "./provinces.const";
import { STATES } from "./states.const";

export function translateValidNumItems(numItems: number | string): number {
  // It must be 0 or positive integer
  // let testIntNumber = (isString(numItems)) ? Number.parseInt(numItems) : numItems;
  const testNumber = isString(numItems)
    ? Number.parseFloat(numItems)
    : numItems;

  if (Number.isInteger(testNumber) && testNumber >= 0) {
    return testNumber;
  } else {
    return undefined;
  }
}

export function translateValidPricePerItems(
  pricePerItem: number | string
): number {
  // It must be 0 or positive number with at most 2 decimals
  const testNumber = isString(pricePerItem)
    ? Number.parseFloat(pricePerItem)
    : pricePerItem;

  if (
    Number.isFinite(testNumber) &&
    testNumber >= 0 &&
    Math.round(testNumber * 100) / 100 - testNumber === 0
  ) {
    return testNumber;
  } else {
    return undefined;
  }
}

export function translateValidProvinceState(provinceStateCode: string): string {
  // 2-letter province/state code
  if (
    provinceStateCode &&
    provinceStateCode.length === 2 &&
    (isValidCode(provinceStateCode, PROVINCES) ||
      isValidCode(provinceStateCode, STATES))
  ) {
    return provinceStateCode;
  } else {
    return name2Code(provinceStateCode);
  }
}

export function name2Code(name: string): string {
  if (!name) {
    return undefined;
  }
  const foundProvinceState = PROVINCES.concat(STATES).find(
    aProviceState => aProviceState.name.toUpperCase() === name.toUpperCase()
  );
  return foundProvinceState ? foundProvinceState.abbreviation : undefined;
}

export function isValidCode(code: string, codes: LocationCode[]): boolean {
  const codeInUppercase = code.toUpperCase();
  return codes.some(
    aProvinceState => aProvinceState.abbreviation === codeInUppercase
  );
}

export function isNumber(x: any): x is number {
  return typeof x === "number";
}

export function isString(x: any): x is string {
  return typeof x === "string";
}
