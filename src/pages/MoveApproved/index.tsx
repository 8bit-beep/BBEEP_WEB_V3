import ThemedIcon from '../../components/Common/ThemedIcon';
import * as S from './style';

const MoveApproved = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <S.ContentHeaderWrap>
          <ThemedIcon src="/assets/Lab.svg" width="2.5rem" height="2.5rem" />
          <div>
            <S.Title>실 이동 승인 명단 조회하기</S.Title>
            <S.Subtitle>실 이동 승인 여부 기록을 확인해 보세요!</S.Subtitle>
          </div>
        </S.ContentHeaderWrap>
        <S.TableHead>
          <S.TableColumn $flex="1">학번</S.TableColumn>
          <S.TableColumn $flex="1">이름</S.TableColumn>
          <S.TableColumn $flex="2">신청 내용</S.TableColumn>
          <S.TableColumn $notCenter $flex="4">
            신청 사유
          </S.TableColumn>
          <S.TableColumn $flex="2">승인 / 거절</S.TableColumn>
        </S.TableHead>
        <S.TableContent>
          {Array.from({ length: 30 }).map(() => (
            <S.TableItem>
              <S.TableItemContent $flex="1">1210</S.TableItemContent>
              <S.TableItemContent $flex="1">김엉한</S.TableItemContent>
              <S.TableItemContent $flex="2">
                Lab 10 {"->"} Lab 20
              </S.TableItemContent>
              <S.TableItemContent $notCenter $flex="4">
                일단은 만들어 놓고 얘기할게요 이렇게 이렇게 이렇게 이렇게 이렇게
                길어질수 있잖아요~~~~~~~~
              </S.TableItemContent>
              <S.IsApproved $isApproved>
                승인됨
              </S.IsApproved>
            </S.TableItem>
          ))}
        </S.TableContent>
      </S.ContentWrap>
    </S.Container>
  );
}

export default MoveApproved