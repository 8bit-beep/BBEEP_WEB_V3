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
import { AttendStatus } from "../../types/enums/AttendStatus.ts";

const AttendStudent = (props: SidebarElementProps) => {
  const statusIdx = useAttendStatusIdxByTime();

  const effectiveStatusIdx = props.data.statuses[statusIdx] ? statusIdx : 0;
  const currentStatusValue =
    props.data.statuses[effectiveStatusIdx]?.status ||
    "NOT_ATTEND";

  const [attendStatus, setAttendStatus] = useState<Option>(() => ({
    name: parseAttendStatus(currentStatusValue),
    value: currentStatusValue,
  }));

  const getBackgroundColor = (status: AttendStatus) => {
    switch (status) {
      case "NOT_ATTEND":
        return COLOR.LightGray; // 미출석
      case "SLEEPOVER":
        return COLOR.Red; // 외박
      case "OUTGOING":
        return COLOR.Serve; // 외출
      default:
        return COLOR.White;
    }
  };

  const getSubTextColor = (status: AttendStatus) => {
    switch (status) {
      case "SLEEPOVER":
        return COLOR.LightGray; // 외박
      case "OUTGOING":
        return COLOR.LightGray; // 외출
      default:
        return COLOR.DarkGray;
    }
  };

  const getTextColor = (status: AttendStatus) => {
    switch (status) {
      case "SLEEPOVER":
        return COLOR.White; // 외박
      case "OUTGOING":
        return COLOR.White; // 외출
      default:
        return COLOR.Black;
    }
  };

  const handleAttendStatus = (e: Option) => {
    {
      /** 자동으로 총 인원 수 업데이트 */
    }
    if (e.value === "NOT_ATTEND" && currentStatusValue !== "NOT_ATTEND") {
      props.setCount((prev) => prev - 1);
    } else if (
      e.value !== "NOT_ATTEND" &&
      currentStatusValue === "NOT_ATTEND"
    ) {
      props.setCount((prev) => prev + 1);
    }
    setAttendStatus({ name: e.name, value: e.value });
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
  }, [effectiveStatusIdx, props.data.statuses]);

  useEffect(() => {
    // 사용자가 드롭다운을 변경했을 때만 저장
    if (attendStatus.value !== currentStatusValue) {
      save.mutate();
    }
  }, [attendStatus.value, currentStatusValue]);

  return (
    <div
      className="w-full p-3 flex items-center rounded-xl"
      style={{
        backgroundColor: getBackgroundColor(attendStatus.value as AttendStatus),
      }}
    >
      <div className="flex items-center">
        <p
          className="w-10 text-xs "
          style={{ color: getSubTextColor(attendStatus.value as AttendStatus) }}
        >
          {props.data.studentId}
        </p>
        <p
          className="text-base text-left"
          style={{ color: getTextColor(attendStatus.value as AttendStatus) }}
        >
          {props.data.username}
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
