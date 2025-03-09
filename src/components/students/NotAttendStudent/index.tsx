import * as S from "./style.ts";
import {parseRoomName} from "../../../utils/parseRoomName.ts";
import {RoomName} from "../../../types/enums/roomName.ts";
import Dropdown from "../../common/Dropdown";
import {attendStatusOption} from "../../../constants/attendStatus/attendStatusOption.ts";
import {AttendStudentProps} from "../../../types/props/attendStudentProps.ts";
import {useState} from "react";
import {Option} from "../../../types/props/dropdownProps.ts";
import {parseAttendStatus} from "../../../utils/parseAttendStatus.ts";
import {useUpdateNotAttendStatusMutation} from "../../../queries/attends/updateNotAttendStatus.ts";
import {AttendStatus} from "../../../types/enums/AttendStatus.ts";
import {decodeStudentId} from "../../../utils/decodeStudentId.ts";
import {Check, X} from "lucide-react";
import {COLOR} from "../../../style/color/color.ts";

const NotAttendStudent = ({ data }: AttendStudentProps) => {
  console.log(data);
  const [attend, setAttend] = useState<Option>({ name: parseAttendStatus(data.statuses[0].status), value: data.statuses[0].status });
  
  const { grade, cls, number } = decodeStudentId(data.studentId);
  
  const save = useUpdateNotAttendStatusMutation(attend.value as AttendStatus, grade, cls, number);
  
  const handleAttend = (option: Option) => {
    setAttend(option);
  }
  
  
  return (
    <S.TableItem key={data.studentId}>
      <S.TableItemContent $flex="1">
        {data.studentId}
      </S.TableItemContent>
      <S.TableItemContent $flex="1">{data.username}</S.TableItemContent>
      <S.TableItemContent $flex="1">{parseRoomName(data.fixedRoom as RoomName)}</S.TableItemContent>
      <S.TableItemContent $flex="1">
        {data.statuses[0].period}교시
      </S.TableItemContent>
      <S.DropdownWrapper>
        <Dropdown setValue={handleAttend} value={attend} options={attendStatusOption} />
        {
          attend.value !== data.statuses[0].status && (
            <>
              <S.Save onClick={() => save.mutate()}>
                <Check color={COLOR.Green} size={16} />
              </S.Save>
              <S.Clear onClick={() => setAttend({ name: parseAttendStatus(data.statuses[0].status), value: data.statuses[0].status })}>
                <X color={COLOR.Red} size={16} />
              </S.Clear>
            </>
          )
        }
      </S.DropdownWrapper>
    </S.TableItem>
  )
}
export default NotAttendStudent;
