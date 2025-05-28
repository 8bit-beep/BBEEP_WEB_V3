import { useApproveAttend } from "../../queries/attendApprove/approveAttend";
import { COLOR } from "../../style/color/color";
import { Room } from "../../types/attend/room";
import { parseRoomName } from "../../utils/parseRoomName";
import * as S from './style'

const NotAttendApprove = ({ data }: { data: Room }) => {
  console.log(data);
  const { mutate } = useApproveAttend(data.name);
    
  return (
    <S.TableItem>
      <S.TableItemContent $flex="6" $notCenter>
        {parseRoomName(data.name)}
      </S.TableItemContent>
      <S.TableItemContent $flex="2"></S.TableItemContent>
      <S.TableItemContent $flex="2"></S.TableItemContent>
      <S.TableItemContent $flex="2" style={{ color: COLOR.Red }}>
        X
      </S.TableItemContent>
      <S.TableItemContent $flex="2">
        <S.ApproveButton $isApproved={false} onClick={() => {mutate()}}>승인하기</S.ApproveButton>
      </S.TableItemContent>
    </S.TableItem>
  )
}

export default NotAttendApprove