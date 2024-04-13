export default function appendToEachArrayValue(array, appendString) {
  const addarray = [];
  for (const value of array) {
    //   const value = array[idx];
    //   array[idx] = appendString + value;
    addarray.push(appendString + value);
  }

  return addarray;
}
