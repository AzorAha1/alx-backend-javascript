export default class Building {
    static isAbstract = true
    constructor(sqrt){
        
        this._sqrt = sqrt
        if (this.constructor.isAbstract){
            throw new Error('this is an abstract class')
        }
        if (typeof this.evacuationWarningMessage !== 'function'){
            throw new Error('Class extending Building must override evacuationWarningMessage')
        }
    }
    set sqrt(thesqrt){
        if (typeof thesqrt !== 'number'){
            throw new TypeError('sqrt must be a number')
        }
        else{
            this._sqrt = thesqrt
        }
    }
    
    get sqrt(){
        return this._sqrt
    }
    evacuationWarningMessage(){
        throw new Error('evacuationWarningMessage must be implemented by classes that is extended from')
    }

   
    
}