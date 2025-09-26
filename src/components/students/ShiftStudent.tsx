import { XCircle } from "lucide-react";
import { useUpdateShiftStatus } from "../../queries/shifts/useUpdateShiftStatus";
import { RoomName } from "../../types/enums/roomName";
import { Shift } from "../../types/shift/shift";
import { parseRoomName } from "../../utils/parseRoomName";
import TableButton from "../common/Table/TableButton";
import TableItemContent from "../common/Table/TableItemContent";
import { COLOR } from "../../style/color/color";

const ShiftStudent = ({ data }: { data: Shift }) => {
    const approve = useUpdateShiftStatus("APPROVED");
    const reject = useUpdateShiftStatus("REJECTED");
    const cancel = useUpdateShiftStatus("WAITING");
    return (
        <div className="w-full flex items-center h-16">
            <TableItemContent $flex={1}>{data.user.studentInfo.id}</TableItemContent>
            <TableItemContent $flex={1}>{data.user.username}</TableItemContent>
            <TableItemContent $flex={2}>
                {parseRoomName(data.room.room as RoomName)}
            </TableItemContent>
            <TableItemContent $flex={2} style={{ fontWeight: 600 }}>
                {data.period}교시
            </TableItemContent>
            <TableItemContent $notCenter $flex={4}>
                {data.reason}
            </TableItemContent>
            {/* 버튼 부분 */}
            {data.status === "WAITING" ? (
                <div className="flex gap-2 flex-[2] justify-center">
                    <TableButton
                        isSelected={true}
                        onClick={() => approve.mutate(data.id)}
                    >
                        승인
                    </TableButton>
                    <TableButton
                        isSelected={false}
                        onClick={() => reject.mutate(data.id)}
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
                                data.status === "APPROVED"
                                    ? COLOR.Main
                                    : COLOR.Red,
                        }}
                    >
                        {data.status === "APPROVED"
                            ? "승인됨"
                            : data.status === "REJECTED"
                            ? "거절됨"
                            : "대기중"}
                    </p>
                    <XCircle
                        color={COLOR.Red}
                        onClick={() => cancel.mutate(data.id)}
                    />
                </div>
            )}
        </div>
    );
};

export default ShiftStudent;
