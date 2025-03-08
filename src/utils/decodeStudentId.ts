export const decodeStudentId = (studentId: string) => {
  const grade = Number(studentId.slice(0,1));
  const cls = Number(studentId.slice(1,2));
  const number = Number(studentId.slice(2,4));
  
  return {grade, cls, number};
}