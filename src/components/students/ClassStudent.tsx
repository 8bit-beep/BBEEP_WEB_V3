import Dropdown from "../common/dropdown/DropDown.tsx";
import {useState} from "react";
import {Option} from "../../types/props/elements/dropdownProps.ts";
import {parseAttendStatus} from "../../utils/parseAttendStatus.ts";
import {attendStatusOption} from "../../constants/attendStatus/attendStatusOption.ts";
import {useUpdateAcceptedStatus} from "../../queries/class/updateAcceptedStatus.ts";
import {decodeStudentId} from "../../utils/decodeStudentId.ts";
import {AttendStatus} from "../../types/enums/AttendStatus.ts";
import TableColumnElem from "../common/table/TableColumnElem.tsx";
import {AttendStudentProps} from "../../types/props/attend/attendStudentProps.ts";

const ClassStudent = ({data}: AttendStudentProps) => {
    const [eight, setEight] = useState<Option>({
        name: parseAttendStatus(data.statuses[0].status),
        value: data.statuses[0].status,
    });
    const [nine, setNine] = useState<Option>({
        name: parseAttendStatus(data.statuses[1].status),
        value: data.statuses[1].status,
    });
    const [ten, setTen] = useState<Option>({
        name: parseAttendStatus(data.statuses[2].status),
        value: data.statuses[2].status,
    });
    const [eleven, setEleven] = useState<Option>({
        name: parseAttendStatus(data.statuses[3].status),
        value: data.statuses[3].status,
    });

    const {grade, cls, number} = decodeStudentId(data.studentId);
    const saveEight = useUpdateAcceptedStatus(
        grade,
        cls,
        number,
        eight.value as AttendStatus,
        8
    );
    const saveNine = useUpdateAcceptedStatus(
        grade,
        cls,
        number,
        nine.value as AttendStatus,
        9
    );
    const saveTen = useUpdateAcceptedStatus(
        grade,
        cls,
        number,
        ten.value as AttendStatus,
        10
    );
    const saveEleven = useUpdateAcceptedStatus(
        grade,
        cls,
        number,
        eleven.value as AttendStatus,
        11
    );

    const handleStatusByTime = (
        option: Option,
        type: "8" | "9" | "10" | "11"
    ) => {
        if (type === "8") {
            setEight(option);
            saveEight.mutate();
            return;
        }
        if (type === "9") {
            setNine(option);
            saveNine.mutate();
            return;
        }
        if (type === "10") {
            setTen(option);
            saveTen.mutate();
            return;
        }
        if (type === "11") {
            setEleven(option);
            saveEleven.mutate();
            return;
        }
    };

    return (
        <div className="w-full flex items-center h-16">
            <TableColumnElem $flex={1}>{data.studentId}</TableColumnElem>
            <TableColumnElem $flex={1}>{data.username}</TableColumnElem>
            <TableColumnElem $flex={2}>
                <Dropdown
                    setValue={(option: Option) =>
                        handleStatusByTime(option, "8")
                    }
                    value={eight}
                    options={attendStatusOption}
                />
            </TableColumnElem>
            <TableColumnElem $flex={2}>
                <Dropdown
                    setValue={(option: Option) =>
                        handleStatusByTime(option, "9")
                    }
                    value={nine}
                    options={attendStatusOption}
                />
            </TableColumnElem>
            <TableColumnElem $flex={2}>
                <Dropdown
                    setValue={(option: Option) =>
                        handleStatusByTime(option, "10")
                    }
                    value={ten}
                    options={attendStatusOption}
                />
            </TableColumnElem>
            <TableColumnElem $flex={2}>
                <Dropdown
                    setValue={(option: Option) =>
                        handleStatusByTime(option, "11")
                    }
                    value={eleven}
                    options={attendStatusOption}
                />
            </TableColumnElem>
        </div>
    );
};
export default ClassStudent;
