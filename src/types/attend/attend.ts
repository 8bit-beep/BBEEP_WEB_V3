import {AttendStatus} from "../enums/AttendStatus.ts";

export interface Attend {
  studentId: string;
  username: string;
  fixedRoom: string;
  status: AttendStatus;
}