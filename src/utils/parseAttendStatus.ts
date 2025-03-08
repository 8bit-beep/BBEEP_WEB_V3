import {AttendStatus} from "../types/enums/AttendStatus.ts";

export const parseAttendStatus = (attend: AttendStatus) => {
  switch (attend) {
    case "ATTEND":
      return "출석"
    case "NOT_ATTEND":
      return "미출석"
    case "SLEEPOVER":
      return "외박"
    case "OUTGOING":
      return "외출"
    case "AFTER_SCHOOL":
      return "방과후"
    case "NARSHA":
      return "나르샤"
    case "FIELD_PRACTICE":
      return "현장실습"
    case "SHIFT_ATTEND":
      return "실 이동 출석"
    case "SHIFT_NOT_ATTEND":
      return "실 이동 미출석"
  }
}