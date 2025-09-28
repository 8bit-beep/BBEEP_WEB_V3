import { useApproveAttend } from "../queries/attendApprove/approveAttend";
import { useGetAttendApproveOneQuery } from "../queries/attendApprove/getAttendApproveOne";
import { RoomName } from "../types/enums/roomName";
import TableHeader from "../components/common/table/TableHeader";
import TableContainer from "../components/common/table/TableContainer";
import TableColumn from "../components/common/table/TableColumn";
import Skeleton from "../components/common/Skeleton";
import ClassStudent from "../components/students/ClassStudent";
import { useGetStudentByClass } from "../hooks/class/useGetStudentByClass";
import { COLOR } from "../style/color/color";
import StudentByClassFilters from "../components/students/filters/StudentByClassFilters.tsx";
import {useStudentByClassFilter} from "../hooks/students/useStudentByClassFilter.ts";

const StudentByClass = () => {
    const {
        grade, setGrade,
        cls, setCls,
        filterBy, setFilterBy,
        room, setRoom,
        type, setType,
    } = useStudentByClassFilter();

    const { mutate } = useApproveAttend(
        `C${grade.value}_${cls.value}` as RoomName
    );
    const { data: approve } = useGetAttendApproveOneQuery(
        `C${grade.value}_${cls.value}` as RoomName
    );

    const { data, isLoading } = useGetStudentByClass({
        filterBy, room, grade, cls, type
    });

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Group.svg"
                    title="출석 조회하기"
                    description="담임 선생님께서 학생의 출석 상태를 미리 입력하세요!"
                >
                    <div
                        className="px-5 py-2.5 rounded-xl text-base text-white cursor-pointer font-medium"
                        style={{
                            backgroundColor: approve?.approveTeacher
                                ? COLOR.Main
                                : COLOR.Red,
                        }}
                        onClick={() => mutate()}
                    >
                        {approve?.approveTeacher ? "승인취소" : "승인하기"}
                    </div>

                    <StudentByClassFilters
                        grade={grade} setGrade={setGrade}
                        cls={cls} setCls={setCls}
                        filterBy={filterBy} setFilterBy={setFilterBy}
                        room={room} setRoom={setRoom}
                        type={type} setType={setType}
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

                <div
                    className="w-full flex flex-col overflow-y-scroll px-10 py-3 max-h-[600px]"
                    style={{ msOverflowStyle: "scrollbar", scrollbarWidth: "thin" }}
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
                            data?.map((item) => (
                                <ClassStudent key={item.studentId} data={item} filterBy={filterBy.value} />
                            ))
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
