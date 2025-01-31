import { Clubs } from "../clubs/clubs";

export interface Attend {
  studentId: string;
  username: string;
  club: Clubs;
  attendedTimes: {
    "8": {
      time?: string;
      room?: string;
      type?: string;
    };
    "10": { time?: string; room?: string; type?: string };
    "11": { time?: string; room?: string; type?: string };
  };
  isAttended: boolean;
}
