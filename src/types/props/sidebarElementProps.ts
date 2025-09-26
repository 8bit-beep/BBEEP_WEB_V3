import {Attend} from "../attend/attend.ts";
import {RoomName} from "../enums/roomName.ts";

export interface SidebarElementProps {
    data: Attend;
    room: RoomName;
}
