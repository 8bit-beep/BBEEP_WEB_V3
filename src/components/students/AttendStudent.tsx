import { AttendStudentProps } from "../../types/props/attendStudentProps.ts";
import Dropdown from "../common/Dropdown/DropDown.tsx";
import { attendStatusOption } from "../../constants/attendStatus/attendStatusOption.ts";
import { parseAttendStatus } from "../../utils/parseAttendStatus.ts";
import { useEffect, useState } from "react";
import { Option } from "../../types/props/dropdownProps.ts";
import { useUpdateAttendStatusMutation } from "../../queries/attends/updateAttendStatus.ts";
import { AttendStatus } from "../../types/enums/AttendStatus.ts";
import { RoomName } from "../../types/enums/roomName.ts";
import { decodeStudentId } from "../../utils/decodeStudentId.ts";
import { COLOR } from "../../style/color/color.ts";

const AttendStudent = ({ data }: AttendStudentProps) => {
    const [attendStatus, setAttendStatus] = useState<Option>({
        name: parseAttendStatus(data.statuses[0].status),
        value: data.statuses[0].status,
    });

    const handleAttendStatus = (e: Option) => {
        setAttendStatus({ name: e.name, value: e.value });
    };

    const { grade, cls, number } = decodeStudentId(data.studentId);

    const save = useUpdateAttendStatusMutation(
        attendStatus.value as AttendStatus,
        grade,
        cls,
        number,
        data.fixedRoom as RoomName
    );

    const isNotAttend =
        data.statuses[0].status === "NOT_ATTEND" ||
        data.statuses[0].status === "SHIFT_NOT_ATTEND";

    useEffect(() => {
        if (attendStatus.value !== data.statuses[0].status) {
            save.mutate();
        }
    }, [attendStatus]);

    return (
        <div
            className="w-full p-3 flex items-center"
            style={{
                backgroundColor: isNotAttend ? COLOR.LightGray : COLOR.White,
            }}
        >
            <div className="flex">
                {/* 배경색은 출석 안됐을 때는 회색, 됐을 때는 하얀색 */}
                <p className="w-10 text-xs text-darkgray">{data.studentId}</p>
                <p className="text-base text-black text-left">
                    {data.username}
                </p>
            </div>
            {/* spacer */}
            <div className="flex-1" />
            <Dropdown
                setValue={handleAttendStatus}
                value={attendStatus}
                options={attendStatusOption}
            />
        </div>
    );
};
export default AttendStudent;
