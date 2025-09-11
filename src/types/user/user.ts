import { RoomName } from "../enums/roomName";

export interface User {
    username: string;
    email: string;
    grade: number | null;
    cls: number | null;
    num: number | null;
    fixedRoom: RoomName | null;
    status: null;
    role: "STUDENT" | "TEACHER";
    profileImage: string | null;
}
