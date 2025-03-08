import * as S from './style';
import {AttendStudentProps} from "../../../types/props/attendStudentProps.ts";
import Dropdown from "../../common/Dropdown";
import {attendStatusOption} from "../../../constants/attendStatus/attendStatusOption.ts";
import {parseAttendStatus} from "../../../utils/parseAttendStatus.ts";
import {useState} from "react";
import {Option} from "../../../types/props/dropdownProps.ts";
import {Check, X} from "lucide-react";
import {COLOR} from "../../../style/color/color.ts";
import {useUpdateAttendStatusMutation} from "../../../queries/attends/useUpdateAttendStatus.ts";
import {AttendStatus} from "../../../types/enums/AttendStatus.ts";
import {RoomName} from "../../../types/enums/roomName.ts";

const AttendStudent = ({ data }: AttendStudentProps) => {
  const [attendStatus, setAttendStatus] = useState<Option>({ name: parseAttendStatus(data.status), value: data.status });
  
  const handleAttendStatus = (e: Option) => {
    setAttendStatus({ name: e.name, value: e.value });
  }
  
  const grade = Number(data.studentId.slice(0,1));
  const cls = Number(data.studentId.slice(1,2));
  const number = Number(data.studentId.slice(2,4));
  
  const save = useUpdateAttendStatusMutation(attendStatus.value as AttendStatus, grade, cls, number, data.fixedRoom as RoomName)
  
  return (
    <S.Container>
      <S.StudentId>{data.studentId}</S.StudentId>
      <S.StudentName>{data.username}</S.StudentName>
      <S.Spacer />
      <Dropdown setValue={handleAttendStatus} value={attendStatus} options={attendStatusOption} />
      {
        attendStatus.value !== data.status && (
          <>
            <S.Save onClick={() => save.mutate()}>
              <Check color={COLOR.Green} size={16} />
            </S.Save>
            <S.Clear onClick={() => setAttendStatus({ name: parseAttendStatus(data.status), value: data.status })}>
              <X color={COLOR.Red} size={16} />
            </S.Clear>
          </>
        )
      }
    </S.Container>
  )
}
export default AttendStudent
