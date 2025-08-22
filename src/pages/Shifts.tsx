import { parseRoomName } from "../utils/parseRoomName.ts";
import { RoomName } from "../types/enums/roomName.ts";
import { useUpdateShiftStatus } from "../queries/shifts/useUpdateShiftStatus.ts";
import { XCircle } from "lucide-react";
import { COLOR } from "../style/color/color.ts";
import { useGetShifts } from "../hooks/shifts/useGetShifts.ts";
import TableHeader from "../components/common/Table/TableHeader.tsx";
import TableContainer from "../components/common/Table/TableContainer.tsx";
import TableColumn from "../components/common/Table/TableColumn.tsx";
import TableItemContent from "../components/common/Table/TableItemContent.tsx";
import TableButton from "../components/common/Table/TableButton.tsx";
import Skeleton from "../components/common/Skeleton.tsx";
const Shifts = () => {
    const { data, isLoading } = useGetShifts();
    const approve = useUpdateShiftStatus("APPROVED");
    const reject = useUpdateShiftStatus("REJECTED");
    const cancel = useUpdateShiftStatus("WAITING");
    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Lab.svg"
                    title="실 이동 관리"
                    description="현재 실 이동을 대기 중인 학생 목록과 승인 목록을 확인해 보세요!"
                />
                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex="1">학번</TableColumn>
                    <TableColumn $flex="1">이름</TableColumn>
                    <TableColumn $flex="2">요청 내용</TableColumn>
                    <TableColumn $flex="2">변경교시</TableColumn>
                    <TableColumn $notCenter $flex="4">
                        신청 사유
                    </TableColumn>
                    <TableColumn $flex="2">승인 / 거절</TableColumn>
                </div>
                {/* contents */}
                <div
                    className="w-full flex flex-1 overflow-x-hidden overflow-y-scroll px-10 py-3"
                    style={{
                        msOverflowStyle: "scrollbar",
                        scrollbarWidth: "thin",
                    }}
                >
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, idx) => (
                            <Skeleton
                                width="100%"
                                height="5rem"
                                borderRadius="0.8rem"
                                key={idx}
                            />
                        ))
                    ) : data && data.length > 0 ? (
                        data.map((item) => (
                            <div
                                className="w-full flex items-center"
                                key={item.id}
                            >
                                <TableItemContent flex="1">
                                    {item.studentId}
                                </TableItemContent>
                                <TableItemContent flex="1">
                                    {item.username}
                                </TableItemContent>
                                <TableItemContent flex="2">
                                    {parseRoomName(item.shiftRoom as RoomName)}
                                </TableItemContent>
                                <TableItemContent
                                    flex="2"
                                    style={{ fontWeight: 600 }}
                                >
                                    {item.period}교시
                                </TableItemContent>
                                <TableItemContent notCenter flex="4">
                                    {item.reason}
                                </TableItemContent>
                                {/* 버튼 부분 */}
                                {item.status === "WAITING" ? (
                                    <div className="flex gap-2 flex-[2] justify-center">
                                        <TableButton
                                            isSelected={true}
                                            onClick={() =>
                                                approve.mutate(item.id)
                                            }
                                        >
                                            승인
                                        </TableButton>
                                        <TableButton
                                            isSelected={false}
                                            onClick={() =>
                                                reject.mutate(item.id)
                                            }
                                        >
                                            거절
                                        </TableButton>
                                    </div>
                                ) : (
                                    <div className="h-9 flex items-center flex-[2] justify-center gap-2">
                                        {/* 승인 됐는지 거절 됐는지 */}
                                        <p
                                            className="text-base text-ellipsis whitespace-nowrap overflow-hidden"
                                            style={{
                                                color:
                                                    item.status === "APPROVED"
                                                        ? COLOR.Main
                                                        : COLOR.Red,
                                            }}
                                        >
                                            {item.status === "APPROVED"
                                                ? "승인됨"
                                                : item.status === "REJECTED"
                                                ? "거절됨"
                                                : "대기중"}
                                        </p>
                                        <XCircle
                                            color={COLOR.Red}
                                            onClick={() =>
                                                cancel.mutate(item.id)
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="w-full h-7 flex justify-center items-center text-xl text-gray">
                            실 이동 데이터가 없습니다.
                        </div>
                    )}
                </div>
            </TableContainer>
        </div>
    );
};
export default Shifts;
