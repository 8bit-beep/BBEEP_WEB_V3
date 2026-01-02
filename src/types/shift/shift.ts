import {User} from "../entity/user.ts";
import { RoomName } from "../enums/roomName.ts";

export interface Shift {
    id: number,
    user: User,
    room: RoomName,
    period: 8 | 9 | 10 | 11,
    reason: string,
    status: "WAITING" | "APPROVED" | "REJECTED",
    date: string,
}
