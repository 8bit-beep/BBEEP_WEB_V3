export interface User {
  id: number,
  username: string,
  email: string,
  grade: number | null,
  cls: number | null,
  num: number | null,
  fixedRoom: string | null,
  isAttended: boolean | null,
}