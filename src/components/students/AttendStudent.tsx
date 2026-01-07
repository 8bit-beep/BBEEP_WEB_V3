import Dropdown from "../common/dropdown/DropDown.tsx";
import { attendStatusOption } from "../../constants/attendStatus/attendStatusOption.ts";
import { parseAttendStatus } from "../../utils/parseAttendStatus.ts";
import { useEffect, useState } from "react";
import { Option } from "../../types/props/elements/dropdownProps.ts";
import { useUpdateAttendStatusMutation } from "../../queries/attends/updateAttendStatus.ts";
import { decodeStudentId } from "../../utils/decodeStudentId.ts";
import { COLOR } from "../../style/color/color.ts";
import { SidebarElementProps } from "../../types/props/elements/sidebarElementProps.ts";
import { useAttendStatusIdxByTime } from "../../hooks/attends/useAttendStatusIdxByTime.ts";

const AttendStudent = (props: SidebarElementProps) => {
  const statusIdx = useAttendStatusIdxByTime();

  const effectiveStatusIdx = props.data.statuses[statusIdx] ? statusIdx : 0;
  const currentStatusValue =
    props.data.statuses[effectiveStatusIdx]?.status ??
    props.data.statuses[0]?.status ??
    "NOT_ATTEND";

  const [attendStatus, setAttendStatus] = useState<Option>(() => ({
    name: parseAttendStatus(currentStatusValue),
    value: currentStatusValue,
  }));
  const [isDirty, setIsDirty] = useState(false);

  const handleAttendStatus = (e: Option) => {
    setAttendStatus({ name: e.name, value: e.value });
    setIsDirty(true);
  };

  const { grade, cls, number } = decodeStudentId(props.data.studentId);

  {
    /*일단 나둬보기*/
  }
  const save = useUpdateAttendStatusMutation(
    attendStatus.value,
    grade,
    cls,
    number,
    props.room
  );

  const isNotAttend = currentStatusValue === "NOT_ATTEND";

  useEffect(() => {
    // 시간대(statusIdx) 또는 서버 데이터가 바뀌면 현재 상태를 동기화
    const nextStatusValue =
      props.data.statuses[effectiveStatusIdx]?.status ??
      props.data.statuses[0]?.status;
    if (!nextStatusValue) return;

    setAttendStatus({
      name: parseAttendStatus(nextStatusValue),
      value: nextStatusValue,
    });
    setIsDirty(false);
  }, [effectiveStatusIdx, props.data.statuses]);

  useEffect(() => {
    // 사용자가 드롭다운을 변경했을 때만 저장
    if (!isDirty) return;
    if (attendStatus.value !== currentStatusValue) {
      save.mutate();
    }
    setIsDirty(false);
  }, [isDirty, attendStatus.value, currentStatusValue, save]);

  return (
    <div
      className="w-full p-3 flex items-center rounded-xl"
      style={{
        backgroundColor: isNotAttend ? COLOR.LightGray : COLOR.White,
      }}
    >
      <div className="flex items-center">
        {/* 배경색은 출석 안됐을 때는 회색, 됐을 때는 하얀색 */}
        <p className="w-10 text-xs text-darkgray">{props.data.studentId}</p>
        <p className="text-base text-black text-left">{props.data.username}</p>
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
