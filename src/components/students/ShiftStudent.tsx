import {XCircle} from "lucide-react";
import {useUpdateShiftStatus} from "../../queries/shifts/useUpdateShiftStatus";
import {Shift} from "../../types/shift/shift";
import {parseRoomName} from "../../utils/parseRoomName";
import TableButton from "../common/table/TableButton";
import TableItemContent from "../common/table/TableItemContent";
import {COLOR} from "../../style/color/color";

const ShiftStudent = ( props : Shift) => {

    const approve = useUpdateShiftStatus("APPROVED");
    const reject = useUpdateShiftStatus("REJECTED");
    const cancel = useUpdateShiftStatus("WAITING");
    return (
        <div className="w-full flex items-center h-16">
            <TableItemContent $flex={1}>{props.user.studentInfo.id}</TableItemContent>
            <TableItemContent $flex={1}>{props.user.username}</TableItemContent>
            <TableItemContent $flex={2}>
                {parseRoomName(props.room)}
            </TableItemContent>
            <TableItemContent $flex={2} style={{fontWeight: 600}}>
                {props.period}교시
            </TableItemContent>
            <TableItemContent $notCenter $flex={4}>
                {props.reason}
            </TableItemContent>
            {/* 버튼 부분 */}
            {props.status === "WAITING" ? (
                <div className="flex gap-2 flex-[2] justify-center">
                    <TableButton
                        isSelected={true}
                        onClick={() => approve.mutate(`${props.id}`)}
                    >
                        승인
                    </TableButton>
                    <TableButton
                        isSelected={false}
                        onClick={() => reject.mutate(`${props.id}`)}
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
                                props.status === "APPROVED"
                                    ? COLOR.Main
                                    : COLOR.Red,
                        }}
                    >
                        {props.status === "APPROVED"
                            ? "승인됨"
                            : props.status === "REJECTED"
                                ? "거절됨"
                                : "대기중"}
                    </p>
                    <XCircle
                        color={COLOR.Red}
                        onClick={() => cancel.mutate(`${props.id}`)}
                    />
                </div>
            )}
        </div>
    );
};

export default ShiftStudent;
