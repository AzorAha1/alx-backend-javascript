let array1 = ['hello']

let square = array1.map(function(value){
    if (typeof value == 'object') {
        return value
    }else{
        return []
    }
})
console.log(square) 