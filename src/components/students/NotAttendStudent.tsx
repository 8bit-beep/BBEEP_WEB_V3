import { parseRoomName } from "../../utils/parseRoomName.ts";
import Dropdown from "../common/dropdown/DropDown.tsx";
import { attendStatusOption } from "../../constants/attendStatus/attendStatusOption.ts";
import { AttendStudentProps } from "../../types/props/attend/attendStudentProps.ts";
import { useState } from "react";
import { Option } from "../../types/props/elements/dropdownProps.ts";
import { parseAttendStatus } from "../../utils/parseAttendStatus.ts";
import { useUpdateNotAttendStatusMutation } from "../../queries/notAttends/updateNotAttendStatus.ts";
import { AttendStatus } from "../../types/enums/AttendStatus.ts";
import { decodeStudentId } from "../../utils/decodeStudentId.ts";
import TableItemContent from "../common/table/TableItemContent.tsx";

const NotAttendStudent = ({ data, filterBy}: AttendStudentProps) => {
    const [attend, setAttend] = useState<Option>({
        name: parseAttendStatus(data.statuses[0].status),
        value: data.statuses[0].status,
    });

    const { grade, cls, number } = decodeStudentId(data.studentId);

    const save = useUpdateNotAttendStatusMutation(
        attend.value as AttendStatus,
        grade,
        cls,
        number
    );

    const currentFixedRoom = data.fixedRooms.filter(room => room.type === filterBy)

    const handleAttend = async (option: Option) => {
        setAttend(option);
        await save.mutateAsync().then(() =>
            setAttend({
                name: parseAttendStatus(data.statuses[0].status),
                value: data.statuses[0].status,
            })
        );
    };

    return (
        <div className="w-full flex items-center h-16">
            <TableItemContent $flex={1}>{data.studentId}</TableItemContent>
            <TableItemContent $flex={1}>{data.username}</TableItemContent>
            <TableItemContent $flex={1}>
                {currentFixedRoom.map((room) => (
                    <div key={room.id}>
                        {parseRoomName(room.room)}
                    </div>
                ))}
            </TableItemContent>
            <TableItemContent $flex={1}>
                {data.statuses[0].period}교시
            </TableItemContent>
            <div className="flex-[1.2] flex justify-center items-center">
                <Dropdown
                    setValue={handleAttend}
                    value={attend}
                    options={attendStatusOption}
                />
            </div>
        </div>
    );
};
export default NotAttendStudent;
