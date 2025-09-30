import CustomDropdown from "../../common/dropdown/DropDown.tsx";
import {CLASS_OPTIONS, GRADE_OPTIONS} from "../../../constants/school/schoolOption.ts";
import {ROOMS} from "../../../constants/room/rooms.ts";
import {attendStatusOption} from "../../../constants/attendStatus/attendStatusOption.ts";
import {AttendFilterProps} from "../../../types/props/students/attendFilterProps.ts";


const NotAttendFilter = ({
                             filterBy, grade, cls, room, type,
                             setFilterBy, setGrade, setCls, setRoom, setType
                         }: AttendFilterProps) => {
    return (
        <>
            <CustomDropdown
                setValue={setFilterBy}
                value={filterBy}
                options={[
                    {name: "전체", value: "all"},
                    {name: "스터디", value: "room"},
                    {name: "학반", value: "class"},
                ]}
            />
            {filterBy.value === "class" ? (
                <>
                    <CustomDropdown value={grade} setValue={setGrade} options={GRADE_OPTIONS}/>
                    <CustomDropdown value={cls} setValue={setCls} options={CLASS_OPTIONS}/>
                </>
            ) : filterBy.value === "room" ? (
                <>
                    <CustomDropdown value={room} setValue={setRoom} options={ROOMS}/>
                    <CustomDropdown value={type} setValue={setType} options={attendStatusOption}/>
                </>
            ) : <></>}
        </>
    );
};

export default NotAttendFilter;
