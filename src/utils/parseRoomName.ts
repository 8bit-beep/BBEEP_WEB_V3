export const RoomSubtitle: Record<string, string> = {
  PROJECT5: "1-4",
  PROJECT4: "1-3",
  PROJECT6: "2-4",

  LAB10_11: "1-2",
  LAB6_7: "1-1",

  LAB21_22: "2-3",
  LAB19_20: "2-2",
  LAB17_18: "2-1",
};

export const parseRoomName = (name: string) => {
  if (name.startsWith("LAB") || name.startsWith("PROJECT")) {
    const isLab = name.startsWith("LAB");
    const label = isLab ? "랩실" : "프로젝트실";

    const numbers = name.replace("LAB", "").replace("PROJECT", "").split("_");

    const title = `${label} ${numbers.join(", ")}`;
    const subtitle = RoomSubtitle[name];

    return subtitle ? `${title}\n(${subtitle})` : title;
  }

  if (name.includes("AFTER_SCHOOL")) {
    return "방과후";
  }

  if (name.startsWith("C")) {
    return name.replace("C", "").replace("_", " - ");
  }

  switch (name) {
    case "SERVER":
      return "서버실";
    case "PRINTER_MAKER":
      return "메이커실";
    default:
      return name;
  }
};
