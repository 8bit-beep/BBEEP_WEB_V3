import {useGetNotAttends} from "../hooks/attends/useGetNotAttends.ts";
import NotAttendStudent from "../components/students/NotAttendStudent.tsx";
import {useState} from "react";
import {Option} from "../types/props/dropdownProps.ts";
import {getStoredOption} from "../utils/getStoredOption.ts";
import {ROOMS} from "../constants/room/rooms.ts";
import TableHeader from "../components/common/Table/TableHeader.tsx";
import CustomDropdown from "../components/common/Dropdown/DropDown.tsx";
import TableContainer from "../components/common/Table/TableContainer.tsx";
import TableColumn from "../components/common/Table/TableColumn.tsx";
import Skeleton from "../components/common/Skeleton.tsx";
import {attendStatusOption} from "../constants/attendStatus/attendStatusOption.ts";
import {CLASS_OPTIONS, GRADE_OPTIONS} from "../constants/school/schoolOption.ts";

const NotAttendToday = () => {
    const [filterBy, setFilterBy] = useState<Option>(
        getStoredOption("FILTER_BY") || {name: "전체", value: "all"}
    );
    const [grade, setGrade] = useState<Option>(
        getStoredOption("NOTATTEND_GRADE") || {name: "1학년", value: "1"}
    );
    const [cls, setCls] = useState<Option>(
        getStoredOption("NOTATTEND_CLS") || {name: "1반", value: "1"}
    );
    const [room, setRoom] = useState<Option>(
        getStoredOption("NOTATTEND_ROOM") || {
            name: "프로젝트 1",
            value: "PROJECT1",
        }
    );
    const [type, setType] = useState<Option>(
        getStoredOption("NOTATTEND_TYPE") || {name: "출석", value: "ATTEND"}
    );

    const {data, isLoading} = useGetNotAttends(filterBy, grade, cls, room);

    const handleFilterBy = (option: Option) => {
        setFilterBy(option);
        localStorage.setItem("FILTER_BY", JSON.stringify(option));
    };

    const handleGrade = (option: Option) => {
        setGrade(option);
        localStorage.setItem("NOTATTEND_GRADE", JSON.stringify(option));
    };

    const handleCls = (option: Option) => {
        setCls(option);
        localStorage.setItem("NOTATTEND_CLS", JSON.stringify(option));
    };

    const handleRoom = (option: Option) => {
        setRoom(option);
        localStorage.setItem("NOTATTEND_ROOM", JSON.stringify(option));
    };

    const handleType = (option: Option) => {
        setType(option);
        localStorage.setItem("NOTATTEND_TYPE", JSON.stringify(option));
    }
    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Excluded.svg"
                    title="오늘 불참자 조회하기"
                    description="아직 출석하지 않은 사람들을 확인해 보세요!"
                >
                    <CustomDropdown
                        setValue={handleFilterBy}
                        value={filterBy}
                        options={[
                            {name: "전체", value: "all"},
                            {name: "스터디", value: "room"},
                            {name: "학반", value: "class"},
                        ]}
                    />
                    {filterBy.value === "class" ? (
                        <>
                            <CustomDropdown
                                value={grade}
                                setValue={handleGrade}
                                options={GRADE_OPTIONS}
                            />
                            <CustomDropdown
                                value={cls}
                                setValue={handleCls}
                                options={CLASS_OPTIONS}
                            />
                        </>
                    ) : filterBy.value === "room" ? (
                        <>
                            <CustomDropdown
                                setValue={handleRoom}
                                value={room}
                                options={ROOMS}
                            />
                            <CustomDropdown setValue={handleType} value={type} options={attendStatusOption}/>
                        </>
                    ) : (
                        // 전체일 때는 아무것도 없음
                        <></>
                    )}
                </TableHeader>
                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex={1}>학번</TableColumn>
                    <TableColumn $flex={1}>이름</TableColumn>
                    <TableColumn $flex={1}>실</TableColumn>
                    <TableColumn $flex={1}>불참 교시</TableColumn>
                    <TableColumn $flex={1.2}>출석 여부 수정</TableColumn>
                </div>
                {/* contents */}
                <div
                    className="w-full flex flex-col overflow-y-scroll px-10 py-3 max-h-[600px]"
                    style={{
                        msOverflowStyle: "scrollbar",
                        scrollbarWidth: "thin",
                    }}
                >
                    <div className="w-full mb-4 flex flex-col">
                        {isLoading ? (
                            Array.from({length: 4}).map((_, idx) => (
                                <Skeleton
                                    width="100%"
                                    height="5rem"
                                    borderRadius="0.8rem"
                                    key={idx}
                                />
                            ))
                        ) : data && data.length > 0 ? (
                            data.map((item) => <NotAttendStudent data={item}/>)
                        ) : (
                            <div className="w-full h-10 flex justify-center items-center text-xl text-gray">
                                결석자가 없습니다.
                            </div>
                        )}
                    </div>
                </div>
            </TableContainer>
        </div>
    );
};

export default NotAttendToday;
