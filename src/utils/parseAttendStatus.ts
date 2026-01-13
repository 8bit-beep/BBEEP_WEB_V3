import { AttendStatus } from "../types/enums/AttendStatus.ts";

export const parseAttendStatus = (attend: AttendStatus) => {
  switch (attend) {
    case "CLUB":
      return "동아리";
    case "CLASS":
      return "교실자습";
    case "NOT_ATTEND":
      return "미출석";
    case "SLEEPOVER":
      return "외박";
    case "OUTGOING":
      return "외출";
    case "AFTER_SCHOOL":
      return "방과후";
    case "NARSHA":
      return "나르샤";
    case "FIELD_PRACTICE":
      return "현장실습";
    case "INDUSTRY":
      return "산학수업";
    case "SHIFT_ATTEND":
      return "실 이동 출석";
    case "WINTER_CAMP_LECTURE":
      return "윈터 캠프(강의)";
    case "WINTER_CAMP_SELF_STUDY":
      return "윈터 캠프(자습)";
    default:
      return "기타";
  }
};
