import {useState} from "react";
import {Option} from "../types/props/dropdownProps.ts";
import {useGetStudentByClass} from "../hooks/class/useGetStudentByClass.ts";
import ClassStudent from "../components/students/ClassStudent.tsx";
import {getStoredOption} from "../utils/getStoredOption.ts";
import {useApproveAttend} from "../queries/attendApprove/approveAttend.ts";
import {useGetAttendApproveOneQuery} from "../queries/attendApprove/getAttendApproveOne.ts";
import {RoomName} from "../types/enums/roomName.ts";
import TableHeader from "../components/common/Table/TableHeader.tsx";
import CustomDropdown from "../components/common/Dropdown/DropDown.tsx";
import {COLOR} from "../style/color/color.ts";
import TableContainer from "../components/common/Table/TableContainer.tsx";
import TableColumn from "../components/common/Table/TableColumn.tsx";
import Skeleton from "../components/common/Skeleton.tsx";
import {attendStatusOption} from "../constants/attendStatus/attendStatusOption.ts";
import {CLASS_OPTIONS, GRADE_OPTIONS} from "../constants/school/schoolOption.ts";
import {ROOMS} from "../constants/room/rooms.ts";

const StudentByClass = () => {
    const [grade, setGrade] = useState<Option>( // 반별 조회일 때만 해당
        getStoredOption("GRADE_OPTION") || {name: "1학년", value: "1"}
    );
    const [cls, setCls] = useState<Option>( // 반별 조회일 때만 해당
        getStoredOption("CLS_OPTION") || {name: "1반", value: "1"}
    );
    const [filterBy, setFilterBy] = useState<Option>( // 어떤 출석조회를 할 것인지
        getStoredOption("FILTERBY_OPTION") || {name: "반별", value: "CLASS"}
    )
    const [room, setRoom] = useState<Option>(
        getStoredOption("ROOM_OPTION") || {name: "LAB1", value: "ROOM"}
    )
    const [type, setType] = useState<Option>( // 실별 조회일 때만 해당
        getStoredOption("TYPE_OPTION") || {name: "출석", value: "ATTEND"}
    )
    const {mutate} = useApproveAttend(
        `C${grade.value}_${cls.value}` as RoomName
    );
    const {data: approve} = useGetAttendApproveOneQuery(
        `C${grade.value}_${cls.value}` as RoomName
    );

    const handleGrade = (option: Option) => {
        setGrade(option);
        localStorage.setItem("GRADE_OPTION", JSON.stringify(option));
    };

    const handleRoom = (option: Option) => {
        setRoom(option);
        localStorage.setItem("ROOM_OPTION", JSON.stringify(option));
    }

    const handleFilterBy = (option: Option) => {
        setFilterBy(option);
        localStorage.setItem("FILTERBY_OPTION", JSON.stringify(option));
    }

    const handleType = (option: Option) => {
        setType(option);
        localStorage.setItem("TYPE_OPTION", JSON.stringify(option));
    }

    const handleCls = (option: Option) => {
        setCls(option);
        localStorage.setItem("CLS_OPTION", JSON.stringify(option));
    };


    const {data, isLoading} = useGetStudentByClass({
        filterBy: filterBy,
        room: room,
        grade: grade,
        cls: cls,
        type: type
    });

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Group.svg"
                    title="출는  조회하기"
                    description="담임 선생님께서 학생의 출석 상태를 미리
                                입력하세요!"
                >
                    <div
                        className="px-5 py-2.5 rounded-xl text-base text-white cursor-pointer font-medium"
                        style={{
                            backgroundColor: approve?.approveTeacher
                                ? COLOR.Main
                                : COLOR.Red,
                        }}
                        onClick={() => {
                            mutate();
                        }}
                    >
                        {approve?.approveTeacher ? "승인취소" : "승인하기"}
                    </div>
                    <CustomDropdown
                        value={filterBy}
                        setValue={handleFilterBy}
                        options={[
                            {name: "반별", value: "CLASS"},
                            {name: "실별", value: "ROOM"},
                        ]}
                    />
                    {filterBy.value === "CLASS" ?
                        (<>
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
                        ) : (
                            <>
                                <CustomDropdown
                                    value={room}
                                    setValue={handleRoom}
                                    options={ROOMS}/>
                                <CustomDropdown
                                    value={type}
                                    setValue={handleType}
                                    options={attendStatusOption}/>
                            </>
                        )
                    }
                </TableHeader>
                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex={1}>학번</TableColumn>
                    <TableColumn $flex={1}>이름</TableColumn>
                    <TableColumn $flex={2.2}>실</TableColumn>
                    <TableColumn $flex={2}>8교시</TableColumn>
                    <TableColumn $flex={2}>9교시</TableColumn>
                    <TableColumn $flex={2}>10교시</TableColumn>
                    <TableColumn $flex={2}>11교시</TableColumn>
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
                                    margin={true}
                                />
                            ))
                        ) : data && data.length > 0 ? (
                            data?.map((item) => <ClassStudent data={item} filterBy={filterBy.value}/>)
                        ) : (
                            <div className="w-full h-10 flex justify-center items-center text-xl text-gray">
                                출석한 인원이 없습니다.
                            </div>
                        )}
                    </div>
                </div>
            </TableContainer>
        </div>
    );
};

export default StudentByClass;
