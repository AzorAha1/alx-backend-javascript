export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
     * @param {any} theamount
     */
  set amount(theamount) {
    if (typeof theamount != 'number'){
        throw new TypeError('Amount must be a number')
    }
    else{
        this._amount = theamount;
    }
  }

  /**
     * @param {any} thecurrency
     */
  set currency(thecurrency) {
    this._currency = thecurrency;
  }

  get amount() {
    return this._currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, ConversionRate) {
    return amount * ConversionRate;
  }
}
