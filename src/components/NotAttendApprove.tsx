import { useApproveAttend } from "../queries/attendApprove/approveAttend";
import { COLOR } from "../style/color/color";
import { ApproveItem } from "../types/approve/approveItem.ts";
import { parseRoomName } from "../utils/parseRoomName";
import ApproveButton from "./common/button/ApproveButton.tsx";
import TableItemContent from "./common/table/TableItemContent";

const NotAttendApprove = ( props: ApproveItem ) => {
    const { mutate } = useApproveAttend(props.room);

    return (
        <div className="w-full flex items-center">
            <TableItemContent $flex={6} $notCenter>
                {parseRoomName(props.room)}
            </TableItemContent>
            <TableItemContent $flex={2}></TableItemContent>
            <TableItemContent $flex={2}></TableItemContent>
            <TableItemContent $flex={2} style={{ color: COLOR.Red }}>
                X
            </TableItemContent>
            <TableItemContent $flex={2}>
                <ApproveButton
                    isApproved={false}
                    mutate={() => {
                        mutate();
                    }}
                >
                    승인하기
                </ApproveButton>
            </TableItemContent>
        </div>
    );
};

export default NotAttendApprove;
