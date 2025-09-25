import {AttendStatus} from "../enums/AttendStatus.ts";
import {Room} from "./room.ts";

// 학생 조회 / 출석 / 미출석 개체
export interface Attend {
    username: string;
    studentId: string;
    fixedRooms: Room[];
    statuses: {
        period: number;
        status: AttendStatus;
    }[];
}
