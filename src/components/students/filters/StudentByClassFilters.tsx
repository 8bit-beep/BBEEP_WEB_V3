import {AttendFilterProps} from "../../../types/props/students/attendFilterProps.ts";
import CustomDropdown from "../../common/dropdown/DropDown.tsx";
import {CLASS_OPTIONS, GRADE_OPTIONS} from "../../../constants/school/schoolOption.ts";
import {ROOMS} from "../../../constants/room/rooms.ts";
import {attendStatusOption} from "../../../constants/attendStatus/attendStatusOption.ts";

const StudentByClassFilters = ({
                                   grade, setGrade,
                                   cls, setCls,
                                   filterBy, setFilterBy,
                                   room, setRoom,
                                   type, setType,
                               }: AttendFilterProps) => {
    return (
        <>
            <CustomDropdown
                value={filterBy}
                setValue={setFilterBy}
                options={[
                    { name: "반별", value: "CLASS" },
                    { name: "실별", value: "ROOM" },
                ]}
            />
            {filterBy.value === "CLASS" ? (
                <>
                    <CustomDropdown value={grade} setValue={setGrade} options={GRADE_OPTIONS} />
                    <CustomDropdown value={cls} setValue={setCls} options={CLASS_OPTIONS} />
                </>
            ) : (
                <>
                    <CustomDropdown value={room} setValue={setRoom} options={ROOMS} />
                    <CustomDropdown value={type} setValue={setType} options={attendStatusOption} />
                </>
            )}
        </>
    );
};

export default StudentByClassFilters;
