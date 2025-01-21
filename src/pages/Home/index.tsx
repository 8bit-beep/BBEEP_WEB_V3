import MainSection from "../../components/MainSection";
import * as S from "./style";

const Home = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <S.SectionWrap>
          <MainSection title="실 이동 신청 목록" icon="Lab" href="/move">
            <S.TableHead>
              <S.TableColumn $flex="1">학번</S.TableColumn>
              <S.TableColumn $flex="1">이름</S.TableColumn>
              <S.TableColumn $flex="1.4">요청 내용</S.TableColumn>
              <S.TableColumn $notCenter $flex="3">
                요청 사유
              </S.TableColumn>
            </S.TableHead>
            <S.TableContent>
              {Array.from({ length: 20 }).map((_, idx) => (
                <S.TableItem key={idx}>
                  <S.TableItemContent $flex="1">1210</S.TableItemContent>
                  <S.TableItemContent $flex="1">김엉한</S.TableItemContent>
                  <S.TableItemContent $flex="1.4">
                    Lab 10 {"->"} Lab 20
                  </S.TableItemContent>
                  <S.TableItemContent $notCenter $flex="3">
                    일단은 만들어 놓고 얘기할게요 이렇게 이렇게 이렇게 이렇게
                    이렇게 길어질수 있잖아요~~~~~~~~
                  </S.TableItemContent>
                </S.TableItem>
              ))}
            </S.TableContent>
          </MainSection>
          <MainSection title="불참자 목록" icon="Filter" href="/">
            <S.TableHead>
              <S.TableColumn $flex="1">학번</S.TableColumn>
              <S.TableColumn $flex="1">이름</S.TableColumn>
              <S.TableColumn $flex="1">실</S.TableColumn>
              <S.TableColumn $flex="1.2">불참 교시</S.TableColumn>
              <S.TableColumn $notCenter $flex="3">
                불참사유
              </S.TableColumn>
            </S.TableHead>
            <S.TableContent>
              {Array.from({ length: 20 }).map((_, idx) => (
                <S.TableItem key={idx}>
                  <S.TableItemContent $flex="1">1210</S.TableItemContent>
                  <S.TableItemContent $flex="1">김엉한</S.TableItemContent>
                  <S.TableItemContent $flex="1">Lab 19, 20</S.TableItemContent>
                  <S.TableItemContent $flex="1.2">
                    8-9, 10-11
                  </S.TableItemContent>
                  <S.TableItemContent $notCenter $flex="3">
                    나르샤
                  </S.TableItemContent>
                </S.TableItem>
              ))}
            </S.TableContent>
          </MainSection>
        </S.SectionWrap>
        <S.SectionWrap>
          <MainSection
            title="스터디 출석 현황"
            icon="Person"
            subtitle="Lab 19, 20실"
            href="/"
          >
            <S.TableHead>
              <S.TableColumn $flex="1">학번</S.TableColumn>
              <S.TableColumn $flex="1">이름</S.TableColumn>
              <S.TableColumn $flex="1">소속</S.TableColumn>
              <S.TableColumn $flex="2.4">8 9교시 출석</S.TableColumn>
              <S.TableColumn $flex="2.2">10교시 출석</S.TableColumn>
              <S.TableColumn $flex="2.2">11교시 출석</S.TableColumn>
              <S.TableColumn $flex="2">참여 여부</S.TableColumn>
            </S.TableHead>
            <S.TableContent>
              {Array.from({ length: 20 }).map((_, idx) => (
                <S.TableItem key={idx}>
                  <S.TableItemContent $flex="1"></S.TableItemContent>
                  <S.TableItemContent $flex="1">김응찬</S.TableItemContent>
                  <S.TableItemContent $flex="1">B1ND</S.TableItemContent>
                  <S.TableItemContent $flex="2.4">4:30</S.TableItemContent>
                  <S.TableItemContent $flex="2.2">7:10</S.TableItemContent>
                  <S.TableItemContent $flex="2.2">8:50</S.TableItemContent>
                  <S.TableItemContent $flex="2">O</S.TableItemContent>
                </S.TableItem>
              ))}
            </S.TableContent>
          </MainSection>
        </S.SectionWrap>
      </S.ContentWrap>
    </S.Container>
  );
};

export default Home;
