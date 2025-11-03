import { useState } from "react";
import { Option } from "../../types/props/elements/dropdownProps.ts";
import { getStoredOption } from "../../utils/getStoredOption";
import { ROOMS } from "../../constants/room/rooms";
import { attendStatusOption } from "../../constants/attendStatus/attendStatusOption";
import {
  CLASS_OPTIONS,
  GRADE_OPTIONS,
} from "../../constants/school/schoolOption";

export const useNotAttendFilter = () => {
  const [filterBy, setFilterBy] = useState<Option>(
    getStoredOption("FILTER_BY") || { name: "전체", value: "all" }
  );
  const [grade, setGrade] = useState<Option>(
    getStoredOption("NOTATTEND_GRADE") || { name: "1학년", value: "1" }
  );
  const [cls, setCls] = useState<Option>(
    getStoredOption("NOTATTEND_CLS") || { name: "1반", value: "1" }
  );
  const [room, setRoom] = useState<Option>(
    getStoredOption("NOTATTEND_ROOM") || {
      name: "프로젝트 1",
      value: "PROJECT1",
    }
  );
  const [type, setType] = useState<Option>(
    getStoredOption("NOTATTEND_TYPE") || { name: "동아리", value: "CLUB" }
  );

  const setAndStore =
    (key: string, setter: (opt: Option) => void) => (opt: Option) => {
      setter(opt);
      localStorage.setItem(key, JSON.stringify(opt));
    };

  return {
    filterBy,
    setFilterBy: setAndStore("FILTER_BY", setFilterBy),
    grade,
    setGrade: setAndStore("NOTATTEND_GRADE", setGrade),
    cls,
    setCls: setAndStore("NOTATTEND_CLS", setCls),
    room,
    setRoom: setAndStore("NOTATTEND_ROOM", setRoom),
    type,
    setType: setAndStore("NOTATTEND_TYPE", setType),
    options: { ROOMS, attendStatusOption, CLASS_OPTIONS, GRADE_OPTIONS },
  };
};
