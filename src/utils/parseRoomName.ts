import {RoomName} from "../types/enums/roomName.ts";

export const parseRoomName = (name: RoomName) => {
  if (name.startsWith("LAB") || name.startsWith("PROJECT")) {
    return name.replace("PROJECT", "프로젝트실 ").replace("LAB", "랩실 ").replace("_",", ");
  }

  if (name.includes("AFTER_SCHOOL")) {
    return "방과후"
  }

  if (name.startsWith("C")) {
    return name.replace("C", "").replace("_", " - ");
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
