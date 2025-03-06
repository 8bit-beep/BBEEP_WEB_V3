export const parseReason = (reason: "OUTGOING" | "SLEEPOVER" | "NOT_ATTEND" | "ABSENT" | "OTHER") => {
  switch (reason) {
    case "OUTGOING":
      return "외출"
    case "SLEEPOVER":
      return "외박"
    case "NOT_ATTEND":
      return "미출석"
    case "ABSENT":
      return "결석"
    default:
      return "기타"
      
  }
}