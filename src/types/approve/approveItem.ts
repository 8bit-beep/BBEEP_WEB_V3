import { User } from "../entity/user";
import {RoomName} from "../enums/roomName.ts";

export interface ApproveItem {
  room: RoomName;
  period: number;
  approvedTeacher: User | null,
  approvedAt: string
}
