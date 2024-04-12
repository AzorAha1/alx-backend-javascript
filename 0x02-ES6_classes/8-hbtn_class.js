export default class HolbertonClass {
    constructor(size, location){
        this._size = size
        this._location = location

        if (typeof size !== 'number') throw TypeError('size must be number')
        if (typeof location !== 'string') throw TypeError('location must be string')
    }

    toString(){
        return this._location
    }
    valueOf(){
        return this._size
    }
}