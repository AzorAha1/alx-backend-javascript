export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Positon outside range');
  const buffer = new ArrayBuffer(length);
  const theview = new Int8Array(buffer);

  theview.set([value], position);
  return new DataView(buffer);
}
