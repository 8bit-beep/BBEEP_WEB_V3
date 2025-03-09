import {RoomName} from "../types/enums/roomName.ts";

export const parseRoomName = (name: RoomName) => {
  if (name.startsWith("LAB") || name.startsWith("PROJECT")) {
    return name.replace("PROJECT", "프로젝트실 ").replace("LAB", "랩실 ");
  }
  
  switch (name) {
    case "SERVER":
      return "서버실";
    case "PRINTER_MAKER":
      return "메이커실"
    default:
      return name;
  }
}