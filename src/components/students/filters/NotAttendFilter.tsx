import CustomDropdown from "../../common/dropdown/DropDown.tsx";
import {CLASS_OPTIONS, GRADE_OPTIONS} from "../../../constants/school/schoolOption.ts";
import {ROOMS} from "../../../constants/room/rooms.ts";
import {attendStatusOption} from "../../../constants/attendStatus/attendStatusOption.ts";
import {StudentByAttendProps} from "../../../types/props/attend/studentByAttendProps.ts";


const NotAttendFilter = (props: StudentByAttendProps) => {
    return (
        <>
            <CustomDropdown
                setValue={props.setFilterBy}
                value={props.filterBy}
                options={[
                    {name: "전체", value: "all"},
                    {name: "스터디", value: "room"},
                    {name: "학반", value: "class"},
                ]}
            />
            {props.filterBy.value === "class" ? (
                <>
                    <CustomDropdown value={props.grade} setValue={props.setGrade} options={GRADE_OPTIONS}/>
                    <CustomDropdown value={props.cls} setValue={props.setCls} options={CLASS_OPTIONS}/>
                </>
            ) : props.filterBy.value === "room" ? (
                <>
                    <CustomDropdown value={props.room} setValue={props.setRoom} options={ROOMS}/>
                    <CustomDropdown value={props.type} setValue={props.setType} options={attendStatusOption}/>
                </>
            ) : <></>}
        </>
    );
};

export default NotAttendFilter;
