import { useApproveAttend } from "../queries/attendApprove/approveAttend";
import { COLOR } from "../style/color/color";
import { ApproveItem as ApproveItemProps } from "../types/attendApprove/approveItem";
import { parseTime } from "../utils/parseTime";
import { parseRoomName } from "../utils/parseRoomName";
import TableItemContent from "./common/TableItemContent";
import ApproveButton from "./common/ApproveButton";

const ApproveItem = ({ data }: { data: ApproveItemProps }) => {
    const { mutate } = useApproveAttend(data.room.name);

    return (
        <div className="w-full flex items-center">
            <p
                className="items-center overflow-ellipsis whitespace-nowrap overflow-hidden"
                style={{ flex: 6 }}
            >
                {parseRoomName(data.room.name)}
            </p>
            <TableItemContent flex="2">
                {data.approveTeacher ? parseTime(data.approvedAt) : ""}{" "}
                {data.approveTeacher ? data.period + "교시" : ""}
            </TableItemContent>
            <TableItemContent flex="2">
                {data.approveTeacher?.username || ""}
            </TableItemContent>
            <TableItemContent
                flex="2"
                style={{ color: data.approveTeacher ? COLOR.Serve : COLOR.Red }}
            >
                {data.approveTeacher ? "O" : "X"}
            </TableItemContent>
            <TableItemContent flex="2">
                <ApproveButton
                    isApproved={!!data.approveTeacher}
                    mutate={mutate}
                >
                    {data.approveTeacher ? "승인취소" : "승인하기"}
                </ApproveButton>
            </TableItemContent>
        </div>
    );
};

export default ApproveItem;
