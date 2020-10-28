export class IllegalArgumentException extends RangeError {
  constructor(
    public numItems: number | string = null,
    public pricePerItem: number | string = null,
    public provinceStateCode: string = null
  ) {
    super(
      JSON.stringify({
        numItems,
        pricePerItem,
        provinceStateCode
      })
    );
  }
}
