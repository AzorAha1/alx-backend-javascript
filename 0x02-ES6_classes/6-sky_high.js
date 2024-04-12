import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
    if (typeof floors !== 'number') throw TypeError('floors must be anumber');
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  get floors() {
    return this._floors;
  }
}
