import * as S from './style';
import {AttendStudentProps} from "../../../types/props/attendStudentProps.ts";
import Dropdown from "../../common/Dropdown";
import {attendStatusOption} from "../../../constants/attendStatus/attendStatusOption.ts";
import {parseAttendStatus} from "../../../utils/parseAttendStatus.ts";
import {useEffect, useState} from "react";
import {Option} from "../../../types/props/dropdownProps.ts";
import {useUpdateAttendStatusMutation} from "../../../queries/attends/updateAttendStatus.ts";
import {AttendStatus} from "../../../types/enums/AttendStatus.ts";
import {RoomName} from "../../../types/enums/roomName.ts";
import {decodeStudentId} from "../../../utils/decodeStudentId.ts";

const AttendStudent = ({ data }: AttendStudentProps) => {
  const [attendStatus, setAttendStatus] = useState<Option>({ name: parseAttendStatus(data.statuses[0].status), value: data.statuses[0].status });
  
  const handleAttendStatus = (e: Option) => {
    setAttendStatus({ name: e.name, value: e.value });
  }
  
  const { grade, cls, number } = decodeStudentId(data.studentId);
  
  const save = useUpdateAttendStatusMutation(attendStatus.value as AttendStatus, grade, cls, number, data.fixedRoom as RoomName);

  useEffect(() => {
    if(attendStatus.value !== data.statuses[0].status) {
      save.mutate();
    }
  }, [attendStatus]);

  useEffect(() => {
    console.log('데이터 변경됨')
    setAttendStatus({ name: parseAttendStatus(data.statuses[0].status), value: data.statuses[0].status })
  }, [data]);
  
  return (
    <S.Container $isNotAttend={data.statuses[0].status === "NOT_ATTEND" || data.statuses[0].status === "SHIFT_NOT_ATTEND"}>
      <S.StudentId>{data.studentId}</S.StudentId>
      <S.StudentName $isNotAttend={data.statuses[0].status === "NOT_ATTEND" || data.statuses[0].status === "SHIFT_NOT_ATTEND"}>{data.username}</S.StudentName>
      <S.Spacer />
      <Dropdown setValue={handleAttendStatus} value={attendStatus} options={attendStatusOption} />
    </S.Container>
  )
}
export default AttendStudent
