import { Clubs } from "../clubs/clubs";

interface AttendTime {
  time?: string;
  room?: string;
  type?: string;
}

interface AttendedTimes {
  "8": AttendTime;
  "10": AttendTime;
  "11": AttendTime;
}

export interface Attend {
  studentId: string;
  username: string;
  club: Clubs;
  attendedTimes: AttendedTimes;
  isAttended: boolean;
}