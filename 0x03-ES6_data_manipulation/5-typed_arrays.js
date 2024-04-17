export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length){
    throw new Error('Positon outside range')
  };
  const buffer = new ArrayBuffer(length);
  const theview = new Int8Array(buffer);

//   theview.set([value], position);
  theview[position] = value
  return new DataView(buffer);
}
