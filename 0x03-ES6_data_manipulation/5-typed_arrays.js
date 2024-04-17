export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Positon outside range');
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer);

  dataview.setInt8(position, value);
  return dataview
}
