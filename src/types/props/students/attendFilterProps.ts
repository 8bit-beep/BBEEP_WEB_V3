import {Option} from "../dropdownProps.ts";

export interface AttendFilterProps {
    filterBy: Option;
    grade: Option;
    cls: Option;
    room: Option;
    type: Option;
    setFilterBy: (o: Option) => void;
    setGrade: (o: Option) => void;
    setCls: (o: Option) => void;
    setRoom: (o: Option) => void;
    setType: (o: Option) => void;
}

