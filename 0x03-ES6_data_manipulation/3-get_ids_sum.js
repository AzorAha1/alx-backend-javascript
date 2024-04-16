export default function getStudentIdsSum(array) {
  const sumofids = array.reduce((previousValue, CurrentValue) => previousValue + CurrentValue.id);
  return sumofids;
}
