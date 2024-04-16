export default function getStudentsByLocation(array, location) {
  const filteredarray = array.filter((mylocation) => mylocation.location === location);
  return filteredarray;
}
