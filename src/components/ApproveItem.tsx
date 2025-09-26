import { useApproveAttend } from "../queries/attendApprove/approveAttend";
import { ApproveItem as ApproveItemProps } from "../types/approve/approveItem";
import { parseTime } from "../utils/parseTime";
import { parseRoomName } from "../utils/parseRoomName";
import TableItemContent from "./common/Table/TableItemContent";
import TableButton from "./common/ApproveButton";

const ApproveItem = ({ data }: { data: ApproveItemProps }) => {
    const { mutate } = useApproveAttend(data.room);

    return (
        <div className="w-full flex items-center">
            <p
                className="items-center overflow-ellipsis whitespace-nowrap overflow-hidden"
                style={{ flex: 6 }}
            >
                {parseRoomName(data.room)}
            </p>
            <TableItemContent $flex={2}>
                {data.approveTeacher ? parseTime(data.approvedAt) : ""}{" "}
                {data.approveTeacher ? data.period + "교시" : ""}
            </TableItemContent>
            <TableItemContent $flex={2}>
                {data.approveTeacher?.username || ""}
            </TableItemContent>
            <TableItemContent $flex={2}>
                <TableButton isApproved={!!data.approveTeacher} mutate={mutate}>
                    {data.approveTeacher ? "거절됨" : "승인됨"}
                </TableButton>
            </TableItemContent>
        </div>
    );
};

export default ApproveItem;
