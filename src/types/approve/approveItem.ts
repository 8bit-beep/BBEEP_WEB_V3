import { User } from "../entity/user";
import {RoomName} from "../enums/roomName.ts";

export interface ApproveItem {
  room: RoomName;
  period: number;
  approveTeacher: User | null,
  approvedAt: string
}
