import { RoomName } from "../enums/roomName";

export interface Room {
  id: number;
  room: RoomName;
  club: string;
}
