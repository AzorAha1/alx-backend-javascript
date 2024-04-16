export default function getStudentIdsSum(array) {
  return array.reduce((previousValue, CurrentValue) => previousValue + CurrentValue.id, 0);
}
