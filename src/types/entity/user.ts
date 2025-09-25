import {Student} from "./student.ts";
import {AttendStatus} from "../enums/AttendStatus.ts";

// 유저 기본 객체
export interface User {
    id: number;
    email: string;
    username: string;
    role: "STUDENT" | "TEACHER";
    profileImage: string | null;
    studentInfo: Student;
    currentStatus: AttendStatus;
}
