import * as S from './style'
import {ClassStudentProps} from "../../../types/props/ClassStudentProps.ts";
import Dropdown from "../../common/Dropdown";
import {useState} from "react";
import {Option} from "../../../types/props/dropdownProps.ts";
import {parseAttendStatus} from "../../../utils/parseAttendStatus.ts";
import {attendStatusOption} from "../../../constants/attendStatus/attendStatusOption.ts";
import {useUpdateAcceptedStatus} from "../../../queries/class/updateAcceptedStatus.ts";
import {decodeStudentId} from "../../../utils/decodeStudentId.ts";
import {AttendStatus} from "../../../types/enums/AttendStatus.ts";
import {parseRoomName} from "../../../utils/parseRoomName.ts";
import {RoomName} from "../../../types/enums/roomName.ts";

const ClassStudent = ({ data }: ClassStudentProps) => {
  const [eight, setEight] = useState<Option>({ name: parseAttendStatus(data.statuses[0].status), value: data.statuses[0].status });
  const [nine, setNine] = useState<Option>({ name: parseAttendStatus(data.statuses[1].status), value: data.statuses[1].status });
  const [ten, setTen] = useState<Option>({ name: parseAttendStatus(data.statuses[2].status), value: data.statuses[2].status });
  const [eleven, setEleven] = useState<Option>({ name: parseAttendStatus(data.statuses[3].status), value: data.statuses[3].status });
  
  const { grade, cls, number } = decodeStudentId(data.studentId);
  const saveEight = useUpdateAcceptedStatus(grade, cls, number, eight.value as AttendStatus, 8);
  const saveNine = useUpdateAcceptedStatus(grade, cls, number, nine.value as AttendStatus, 9);
  const saveTen = useUpdateAcceptedStatus(grade, cls, number, ten.value as AttendStatus, 10);
  const saveEleven = useUpdateAcceptedStatus(grade, cls, number, eleven.value as AttendStatus, 11);
  
  const handleStatusByTime = (option: Option, type: "8"  | "9"| "10" | "11") => {
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
  }
  
  return (
    <S.Container>
      <S.Column $flex="1">{data.studentId}</S.Column>
      <S.Column $flex="1">{data.username}</S.Column>
      <S.Column $flex="2.2">{parseRoomName(data.fixedRoom as RoomName)}</S.Column>
      <S.Column $flex="2">
        <Dropdown setValue={(option: Option) => handleStatusByTime(option, "8")} value={eight} options={attendStatusOption} />
      </S.Column>
      <S.Column $flex="2">
        <Dropdown setValue={(option: Option) => handleStatusByTime(option, "9")} value={eight} options={attendStatusOption} />
      </S.Column>
      <S.Column $flex="2">
        <Dropdown setValue={(option: Option) => handleStatusByTime(option, "10")} value={ten} options={attendStatusOption} />
      </S.Column>
      <S.Column $flex="2">
        <Dropdown setValue={(option: Option) => handleStatusByTime(option, "11")} value={eleven} options={attendStatusOption} />
      </S.Column>
    </S.Container>
  )
}
export default ClassStudent
