export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer);

  dataview.setInt8(position, value);
  const thevalue = dataview.getInt8(position);
  if (thevalue === value) {
    return dataview;
  }

  throw Error('Positon outside range');
}
