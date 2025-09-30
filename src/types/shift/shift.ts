import {User} from "../entity/user.ts";
import {Room} from "../attend/room.ts";

export interface Shift {
    id: string,
    user: User,
    room: Room,
    period: 8 | 9 | 10 | 11,
    reason: string,
    status: "WAITING" | "APPROVED" | "REJECTED",
    date: string,
    data?: unknown
}
