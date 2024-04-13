export default function appendToEachArrayValue(array, appendString) {
  const addarray = [];
  for (const value of array) {
    addarray.push(appendString + value);
  }

  return addarray;
}
