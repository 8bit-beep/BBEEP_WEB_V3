import { useState } from "react";
import { Option } from "../../types/props/elements/dropdownProps.ts";
import { getStoredOption } from "../../utils/getStoredOption";

export const useStudentByClassFilter = () => {
    const [grade, setGrade] = useState<Option>(
        getStoredOption("GRADE_OPTION") || { name: "1학년", value: "1" }
    );
    const [cls, setCls] = useState<Option>(
        getStoredOption("CLS_OPTION") || { name: "1반", value: "1" }
    );
    const [filterBy, setFilterBy] = useState<Option>(
        getStoredOption("FILTERBY_OPTION") || { name: "반별", value: "CLASS" }
    );
    const [room, setRoom] = useState<Option>(
        getStoredOption("ROOM_OPTION") || { name: "LAB1", value: "ROOM" }
    );
    const [type, setType] = useState<Option>(
        getStoredOption("TYPE_OPTION") || { name: "출석", value: "ATTEND" }
    );

    const setAndStore = (key: string, setter: (opt: Option) => void) => (opt: Option) => {
        setter(opt);
        localStorage.setItem(key, JSON.stringify(opt));
    };

    return {
        grade, setGrade: setAndStore("GRADE_OPTION", setGrade),
        cls, setCls: setAndStore("CLS_OPTION", setCls),
        filterBy, setFilterBy: setAndStore("FILTERBY_OPTION", setFilterBy),
        room, setRoom: setAndStore("ROOM_OPTION", setRoom),
        type, setType: setAndStore("TYPE_OPTION", setType),
    };
};
