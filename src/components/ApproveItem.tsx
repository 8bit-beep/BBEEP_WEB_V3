import { useApproveAttend } from "../queries/attendApprove/approveAttend";
import { ApproveItem as ApproveItemProps } from "../types/approve/approveItem";
import { parseTime } from "../utils/parseTime";
import { parseRoomName } from "../utils/parseRoomName";
import TableItemContent from "./common/table/TableItemContent";
import TableButton from "./common/button/ApproveButton.tsx";

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
                {data.approvedTeacher ? parseTime(data.approvedAt) : ""}{" "}
                {data.approvedTeacher ? data.period + "교시" : ""}
            </TableItemContent>
            <TableItemContent $flex={2}>
                {data.approvedTeacher?.username || ""}
            </TableItemContent>
            <TableItemContent $flex={2}>
                <TableButton isApproved={!!data.approvedTeacher} mutate={mutate}>
                    {data.approvedTeacher ? "거절됨" : "승인됨"}
                </TableButton>
            </TableItemContent>
        </div>
    );
};

export default ApproveItem;
