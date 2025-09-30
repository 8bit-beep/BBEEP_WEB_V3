import CustomDropdown from "../../common/dropdown/DropDown.tsx";
import {CLASS_OPTIONS, GRADE_OPTIONS} from "../../../constants/school/schoolOption.ts";
import {ROOMS} from "../../../constants/room/rooms.ts";
import {attendStatusOption} from "../../../constants/attendStatus/attendStatusOption.ts";
import {StudentByAttendProps} from "../../../types/props/attend/studentByAttendProps.ts";

const StudentByClassFilters = (props: StudentByAttendProps) => {
    return (
        <>
            <CustomDropdown
                value={props.filterBy}
                setValue={props.setFilterBy}
                options={[
                    { name: "반별", value: "CLASS" },
                    { name: "실별", value: "ROOM" },
                ]}
            />
            {props.filterBy.value === "CLASS" ? (
                <>
                    <CustomDropdown value={props.grade} setValue={props.setGrade} options={GRADE_OPTIONS} />
                    <CustomDropdown value={props.cls} setValue={props.setCls} options={CLASS_OPTIONS} />
                </>
            ) : (
                <>
                    <CustomDropdown value={props.room} setValue={props.setRoom} options={ROOMS} />
                    <CustomDropdown value={props.type} setValue={props.setType} options={attendStatusOption} />
                </>
            )}
        </>
    );
};

export default StudentByClassFilters;
