import {Option} from "../elements/dropdownProps.ts";

export interface StudentByAttendProps {
    filterBy: Option;
    room: Option;
    grade: Option;
    cls: Option;
    type: Option;
    setFilterBy: (o: Option) => void;
    setGrade: (o: Option) => void;
    setCls: (o: Option) => void;
    setRoom: (o: Option) => void;
    setType: (o: Option) => void;
}
