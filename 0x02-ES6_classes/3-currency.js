export default class Currency{
    constructor(code, name){
        this.code = code
        this.name = name
    }
    /**
     * @param {any} thecode
     */
    set code(thecode){
        if (typeof thecode !== 'string'){
            throw new TypeError('Code must be a string')
        }
        else{
            this._code = thecode
        }
    }
    /**
     * @param {string} thename
     */
    set name(thename){
        if (typeof thename !== 'string'){
            throw new TypeError('Name must be a string')
        }
        else{
            this._name = thename
        }
    }
    get code(){
        return this._code
    }
    get name(){
        return this._name
    }
    displayFullCurrency(){
        return `${this._name} (${this._code})`
    }
}
