import { RoomName } from "../enums/roomName";

export interface Room {
  id: number;
  name: RoomName;
  club: string;
}