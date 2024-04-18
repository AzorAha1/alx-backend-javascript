export default function cleanSet(set, startString) {
    const filterbystartstring = set.filter((string) => string.startsWith(startString))
    const mapthrough = filterbystartstring.map((value) => {
        return value.substring(startString.length)
    })
    return mapthrough
}


// const result = [];
// if (startString === '') {
//   return '';
// }
// for (const value of set) {
//   if (value.startsWith(startString)) {
//     result.push(value.substring(startString.length));
//   }
// }
// return result.join('-');