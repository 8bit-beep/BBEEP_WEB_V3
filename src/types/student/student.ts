import {AttendStatus} from "../enums/AttendStatus.ts";

export interface Student {
  id: number;
  email: string;
  username: string;
  grade: number | null,
  cls: number | null,
  num: number | null,
  fixedRoom: string | null,
  isAttended: AttendStatus,
}