import { RoomName } from "../enums/roomName";
import {AttendStatus} from "../enums/AttendStatus.ts";

export interface Room {
  id: number;
  room: RoomName;
  type: AttendStatus;
}
