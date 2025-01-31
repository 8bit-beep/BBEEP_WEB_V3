export interface Shift {
  id: string;
  studentId: string;
  username: string;
  fixedRoom: string;
  room: string;
  period: 8 | 10 | 11;
  cause: string;
  type: "WAITING" | "ALLOWED" | "NOT_ALLOWED";
}
