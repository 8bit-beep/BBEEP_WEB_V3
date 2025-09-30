import { useGetNotAttends } from "../hooks/notAttends/useGetNotAttends.ts";
import TableContainer from "../components/common/table/TableContainer";
import TableHeader from "../components/common/table/TableHeader";
import TableColumn from "../components/common/table/TableColumn";
import NotAttendStudent from "../components/students/NotAttendStudent";
import Skeleton from "../components/common/Skeleton";
import NotAttendFilter from "../components/students/filters/NotAttendFilter.tsx";
import {useNotAttendFilter} from "../hooks/students/useNotAttendFilter.ts";

const NotAttendToday = () => {
    const {
        filterBy, grade, cls, room, type,
        setFilterBy, setGrade, setCls, setRoom, setType
    } = useNotAttendFilter();

    const { data, isLoading } = useGetNotAttends({ filterBy, grade, cls, room, type });

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Excluded.svg"
                    title="오늘 불참자 조회하기"
                    description="아직 출석하지 않은 사람들을 확인해 보세요!"
                >
                    <NotAttendFilter
                        filterBy={filterBy}
                        grade={grade}
                        cls={cls}
                        room={room}
                        type={type}
                        setFilterBy={setFilterBy}
                        setGrade={setGrade}
                        setCls={setCls}
                        setRoom={setRoom}
                        setType={setType}
                    />
                </TableHeader>

                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex={1}>학번</TableColumn>
                    <TableColumn $flex={1}>이름</TableColumn>
                    <TableColumn $flex={1}>실</TableColumn>
                    <TableColumn $flex={1}>불참 교시</TableColumn>
                    <TableColumn $flex={1.2}>출석 여부 수정</TableColumn>
                </div>

                <div className="w-full flex flex-col overflow-y-scroll px-10 py-3 max-h-[600px]">
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
                    ) : data?.length ? (
                        data.map((item) =>
                            <NotAttendStudent key={item.studentId} data={item} filterBy={filterBy.value} />)
                    ) : (
                        <div className="w-full h-10 flex justify-center items-center text-xl text-gray">
                            결석자가 없습니다.
                        </div>
                    )}
                </div>
            </TableContainer>
        </div>
    );
};

export default NotAttendToday;
