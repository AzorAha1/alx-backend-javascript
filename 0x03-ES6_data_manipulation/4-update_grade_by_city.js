export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsinacity = students.filter((student) => student.location === city);
  const studentgrades = studentsinacity.map((student) => {
    const thegradeobj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = thegradeobj ? thegradeobj.grade : 'N/A';
    return { ...student, grade };
  });
  return studentgrades;
}
