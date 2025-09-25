import {useGetShifts} from "../hooks/shifts/useGetShifts.ts";
import TableHeader from "../components/common/Table/TableHeader.tsx";
import TableContainer from "../components/common/Table/TableContainer.tsx";
import TableColumn from "../components/common/Table/TableColumn.tsx";
import Skeleton from "../components/common/Skeleton.tsx";
import ShiftStudent from "../components/students/ShiftStudent.tsx";

const Shifts = () => {
    const {data, isLoading} = useGetShifts();

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Lab.svg"
                    title="실 이동 관리"
                    description="현재 실 이동을 대기 중인 학생 목록과 승인 목록을 확인해 보세요!"
                />
                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex={1}>학번</TableColumn>
                    <TableColumn $flex={1}>이름</TableColumn>
                    <TableColumn $flex={2}>요청 내용</TableColumn>
                    <TableColumn $flex={2}>변경교시</TableColumn>
                    <TableColumn $notCenter $flex={4}>
                        신청 사유
                    </TableColumn>
                    <TableColumn $flex={2}>승인 / 거절</TableColumn>
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
                            data.map((item) => (
                                <ShiftStudent key={item.id} data={item}/>
                            ))
                        ) : (
                            <div className="w-full h-7 flex justify-center items-center text-xl text-gray">
                                실 이동 데이터가 없습니다.
                            </div>
                        )}
                    </div>
                </div>
            </TableContainer>
        </div>
    );
};

export default Shifts;
