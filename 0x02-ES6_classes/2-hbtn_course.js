export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
     * @param {string | number} thename
     */
  set name(thename) {
    if (typeof thename !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = thename;
    }
  }

  /**
     * @param {any} thelength
     */
  set length(thelength) {
    if (typeof thelength !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = thelength;
    }
  }

  /**
     * @param {any} thestudents
     */
  set students(thestudents) {
    if (!Array.isArray(thestudents)) {
      throw new TypeError('Students Must be an Array');
    } else {
      this._students = thestudents;
    }
  }

  get length() {
    return this._length;
  }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }
}
