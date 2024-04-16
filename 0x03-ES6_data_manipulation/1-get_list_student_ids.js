import getListStudents from './0-get_list_students';

export default function getListStudentIds(arrofobjects) {
  if (!Array.isArray(arrofobjects)) {
    return [];
  }

  const students = getListStudents();
  const getid = students.map((student) => student.id);
  return getid;
}
