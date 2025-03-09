export interface Shift {
  id: string;
  studentId: string;
  username: string;
  fixedRoom: string;
  shiftRoom: string;
  period: 8 | 10 | 11;
  reason: string;
  status: "WAITING" | "APPROVED" | "REJECTED";
}
