import { useGetShiftsQuery } from "../../queries/shifts/getShifts";
import * as S from "./style";
import ThemedIcon from "../../components/common/ThemedIcon";

const Shifts = () => {
  const shiftData = useGetShiftsQuery();

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
          {!shiftData || shiftData.length === 0 ? (
            <S.NoContent>실 이동 데이터가 없습니다.</S.NoContent>
          ) : (
            shiftData.map((item) => (
              <S.TableItem key={item.id}>
                <S.TableItemContent $flex="1">
                  {item.studentId}
                </S.TableItemContent>
                <S.TableItemContent $flex="1">
                  {item.username}
                </S.TableItemContent>
                <S.TableItemContent $flex="2">
                  {item.fixedRoom} {"->"} {item.room}
                </S.TableItemContent>
                <S.TableItemContent $flex="2">
                  {item.period}교시
                </S.TableItemContent>
                <S.TableItemContent $notCenter $flex="4">
                  {item.cause}
                </S.TableItemContent>
                {item.type === "WAITING" ? (
                  <S.ButtonWrap>
                    <S.Approve>승인</S.Approve>
                    <S.Reject>거절</S.Reject>
                  </S.ButtonWrap>
                ) : (
                  <S.Status $isApproved={item.type === "ALLOWED"}>
                    {item.type === "ALLOWED" ? "승인됨" : "거절됨"}
                  </S.Status>
                )}
              </S.TableItem>
            ))
          )}
        </S.TableContent>
      </S.ContentWrap>
    </S.Container>
  );
};

export default Shifts;
