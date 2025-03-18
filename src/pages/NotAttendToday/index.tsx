import * as S from "./style";
import { useGetNotAttends } from "../../hooks/attends/useGetNotAttends";
import ThemedIcon from "../../components/common/ThemedIcon";
import Skeleton from "../../components/common/Skeleton";
import NotAttendStudent from "../../components/students/NotAttendStudent";


const NotAttendToday = () => {
  const { data, isLoading } =
    useGetNotAttends();
  
  return (
    <S.Container>
      <S.ContentWrap>
        <S.ContentHeaderWrap>
            <S.HeaderWrap>
              <ThemedIcon src="/assets/Excluded.svg" width="2.5rem" height="2.5rem" />
              <div>
                <S.Title>오늘 불참자 조회하기</S.Title>
                <S.Subtitle>
                  아직 출석하지 않은 사람들을 확인해 보세요!
                </S.Subtitle>
              </div>
          </S.HeaderWrap>
        </S.ContentHeaderWrap>
        <S.TableHead>
          <S.TableColumn $flex="1">학번</S.TableColumn>
          <S.TableColumn $flex="1">이름</S.TableColumn>
          <S.TableColumn $flex="1">실</S.TableColumn>
          <S.TableColumn $flex="1">
            불참 교시
          </S.TableColumn>
          <S.TableColumn $flex="1.2">
          
          </S.TableColumn>
        </S.TableHead>
        <S.TableContent>
          {
            isLoading ? Array.from({length: 4}).map((_, idx) => (
              <Skeleton width="100%" height="5rem" borderRadius="0.8rem" key={idx} />
            )): data && data.length > 0 ? data.map((item) => (
              <NotAttendStudent data={item} />
            )): <S.NoContent>출석 데이터가 없습니다.</S.NoContent>
          }
        </S.TableContent>
      </S.ContentWrap>
    </S.Container>
  );
};

export default NotAttendToday;
