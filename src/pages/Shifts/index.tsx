import * as S from "./style";
import ThemedIcon from "../../components/common/ThemedIcon";
import {parseRoomName} from "../../utils/parseRoomName.ts";
import {RoomName} from "../../types/enums/roomName.ts";
import {useUpdateShiftStatus} from "../../queries/shifts/useUpdateShiftStatus.ts";
import {XCircle} from "lucide-react";
import {COLOR} from "../../style/color/color.ts";
import Skeleton from "../../components/common/Skeleton";
import {useGetShifts} from "../../hooks/shifts/useGetShifts.ts";

const Shifts = () => {
  const { data, isLoading } = useGetShifts();
  const approve = useUpdateShiftStatus("APPROVED");
  const reject = useUpdateShiftStatus("REJECTED");
  const cancel = useUpdateShiftStatus("WAITING");

  return (
    <S.Container>
      <S.ContentWrap>
        <S.ContentHeaderWrap>
          <ThemedIcon src="/assets/Lab.svg" width="2.5rem" height="2.5rem" />
          <div>
            <S.Title>실 이동 관리</S.Title>
            <S.Subtitle>
              현재 실 이동을 대기 중인 학생 목록과 승인 목록을 확인해 보세요!
            </S.Subtitle>
          </div>
        </S.ContentHeaderWrap>
        <S.TableHead>
          <S.TableColumn $flex="1">학번</S.TableColumn>
          <S.TableColumn $flex="1">이름</S.TableColumn>
          <S.TableColumn $flex="2">요청 내용</S.TableColumn>
          <S.TableColumn $flex="2">변경교시</S.TableColumn>
          <S.TableColumn $notCenter $flex="4">
            신청 사유
          </S.TableColumn>
          <S.TableColumn $flex="2">승인 / 거절</S.TableColumn>
        </S.TableHead>
        <S.TableContent>
          {
            isLoading ? Array.from({length: 4}).map((_, idx) => (
              <Skeleton width="100%" height="5rem" borderRadius="0.8rem" key={idx} />
            )) : data && data.length > 0 ? data?.map((item) => (
              <S.TableItem key={item.id}>
                <S.TableItemContent $flex="1">
                  {item.studentId}
                </S.TableItemContent>
                <S.TableItemContent $flex="1">
                  {item.username}
                </S.TableItemContent>
                <S.TableItemContent $flex="2">
                  {parseRoomName(item.fixedRoom as RoomName)} {"->"} {parseRoomName(item.shiftRoom as RoomName)}
                </S.TableItemContent>
                <S.TableItemContent $flex="2">
                  {item.period}교시
                </S.TableItemContent>
                <S.TableItemContent $notCenter $flex="4">
                  {item.reason}
                </S.TableItemContent>
                {item.status === "WAITING" ? (
                  <S.ButtonWrap>
                    <S.Approve onClick={() => approve.mutate(item.id)}>승인</S.Approve>
                    <S.Reject onClick={() => reject.mutate(item.id)}>거절</S.Reject>
                  </S.ButtonWrap>
                ) : (
                  <S.Status>
                    <S.StatusText $isApproved={item.status === "APPROVED"}>{item.status === "APPROVED" ? "승인됨" : item.status === "REJECTED" ?  "거절됨" : "대기중"}</S.StatusText>
                    <XCircle color={COLOR.Red} onClick={() => cancel.mutate(item.id)} />
                  </S.Status>
                )}
              </S.TableItem>
            )) : <S.NoContent>실 이동 데이터가 없습니다.</S.NoContent>
          }
        </S.TableContent>
      </S.ContentWrap>
    </S.Container>
  );
};

export default Shifts;
