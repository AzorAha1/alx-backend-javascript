export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;

    if (typeof name !== 'string') throw TypeError('name must be string');
    if (typeof code !== 'string') throw TypeError('code must be string');
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
