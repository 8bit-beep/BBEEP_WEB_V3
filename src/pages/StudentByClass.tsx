import { useState } from "react";
import { Option } from "../types/props/dropdownProps.ts";
import { useGetStudentByClass } from "../hooks/class/useGetStudentByClass.ts";
import ClassStudent from "../components/students/ClassStudent.tsx";
import { getStoredOption } from "../utils/getStoredOption.ts";
import { useApproveAttend } from "../queries/attendApprove/approveAttend.ts";
import { useGetAttendApproveOneQuery } from "../queries/attendApprove/getAttendApproveOne.ts";
import { RoomName } from "../types/enums/roomName.ts";
import TableHeader from "../components/common/Table/TableHeader.tsx";
import CustomDropdown from "../components/common/Dropdown/DropDown.tsx";
import { COLOR } from "../style/color/color.ts";
import TableContainer from "../components/common/Table/TableContainer.tsx";
import TableColumn from "../components/common/Table/TableColumn.tsx";
import Skeleton from "../components/common/Skeleton.tsx";

const StudentByClass = () => {
    const [grade, setGrade] = useState<Option>(
        getStoredOption("GRADE_OPTION") || { name: "1학년", value: "1" }
    );
    const [cls, setCls] = useState<Option>(
        getStoredOption("CLS_OPTION") || { name: "1반", value: "1" }
    );
    const { mutate } = useApproveAttend(
        `C${grade.value}_${cls.value}` as RoomName
    );
    const { data: approve } = useGetAttendApproveOneQuery(
        `C${grade.value}_${cls.value}` as RoomName
    );

    const handleGrade = (option: Option) => {
        setGrade(option);
        localStorage.setItem("GRADE_OPTION", JSON.stringify(option));
    };

    const handleCls = (option: Option) => {
        setCls(option);
        localStorage.setItem("CLS_OPTION", JSON.stringify(option));
    };

    const { data, isLoading } = useGetStudentByClass(grade.value, cls.value);

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Group.svg"
                    title="반별 조회하기"
                    description="담임 선생님께서 학생의 출석 상태를 미리
                                입력하세요!"
                >
                    <div
                        className="px-5 py-2.5 rounded-xl text-base text-white cursor-pointer font-medium"
                        style={{
                            backgroundColor: !!approve?.approveTeacher
                                ? COLOR.Red
                                : COLOR.Main,
                        }}
                        onClick={() => {
                            mutate();
                        }}
                    >
                        {approve?.approveTeacher ? "승인취소" : "승인하기"}
                    </div>
                    <CustomDropdown
                        value={grade}
                        setValue={handleGrade}
                        options={[
                            { value: "1", name: "1학년" },
                            { value: "2", name: "2학년" },
                            { value: "3", name: "3학년" },
                        ]}
                    />
                    <CustomDropdown
                        value={cls}
                        setValue={handleCls}
                        options={[
                            { value: "1", name: "1반" },
                            { value: "2", name: "2반" },
                            { value: "3", name: "3반" },
                            { value: "4", name: "4반" },
                        ]}
                    />
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
                            Array.from({ length: 4 }).map((_, idx) => (
                                <Skeleton
                                    width="100%"
                                    height="5rem"
                                    borderRadius="0.8rem"
                                    key={idx}
                                    margin={true}
                                />
                            ))
                        ) : data && data.length > 0 ? (
                            data?.map((item) => <ClassStudent data={item} />)
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
