import {RoomName} from "../enums/roomName.ts";

export interface SidebarDataState {
  sidebarData: RoomName | null;
  setSidebarData: (sidebarData: RoomName | null) => void;
}