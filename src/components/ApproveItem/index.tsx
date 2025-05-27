import { useApproveAttend } from "../../queries/attendApprove/approveAttend"
import { COLOR } from "../../style/color/color"
import { ApproveItem as ApproveItemProps } from "../../types/attendApprove/approveItem"
import { parseTime } from "../../utils/parseTime"
import { parseRoomName } from "../../utils/parseRoomName"
import * as S from './style'

const ApproveItem = ({ data }: { data: ApproveItemProps }) => {
  const { mutate } = useApproveAttend(data.room.name);
  
  if(data.approveTeacher) return (
    <S.TableItem>
      <S.TableItemContent $flex="6" $notCenter>
        {parseRoomName(data.room.name)}
      </S.TableItemContent>
      <S.TableItemContent $flex="2">{data.approveTeacher ? parseTime(data.approvedAt) : ""} {data.approveTeacher ? data.period + "교시" : ""}</S.TableItemContent>
      <S.TableItemContent $flex="2">{data.approveTeacher?.username || ""}</S.TableItemContent>
      <S.TableItemContent $flex="2" style={{ color: data.approveTeacher ? COLOR.Serve : COLOR.Red }}>
        {data.approveTeacher ? "O" : "X"}
      </S.TableItemContent>
      <S.TableItemContent $flex="2">
        <S.ApproveButton $isApproved={!!data.approveTeacher} onClick={() => {mutate()}}>{data.approveTeacher ? "승인취소": "승인하기"}</S.ApproveButton>
      </S.TableItemContent>
    </S.TableItem>
  )

  return <></>
}

export default ApproveItem