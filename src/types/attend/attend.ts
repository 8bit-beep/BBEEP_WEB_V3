import {AttendStatus} from "../enums/AttendStatus.ts";

export interface Attend {
  studentId: string;
  username: string;
  fixedRoom: string;
  statuses: {
    period: number;
    status: AttendStatus;
  }[];
}