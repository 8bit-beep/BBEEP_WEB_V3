import { Room } from "../attend/room";
import { User } from "../user/user";

export interface ApproveItem {
  room: Room;
  period: number;
  approveTeacher: User | null,
  approvedAt: string
}