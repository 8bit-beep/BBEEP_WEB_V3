import Dropdown from "../../components/Common/Dropdown";
import ThemedIcon from "../../components/Common/ThemedIcon";
import * as S from "./style";

const Rooms = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <S.ContentHeaderWrap>
          <ThemedIcon src="/assets/Group.svg" width="5rem" height="2.5rem" />
          <div>
            <S.Title>실 조회하기</S.Title>
            <S.Subtitle>
              랩실 기준으로 방과후 출석현황을 조회해 보세요!
            </S.Subtitle>
          </div>
          <S.Spacer />
          <Dropdown
            value={{ value: "ALL", name: "전체" }}
            setValue={(e) => console.log(e)}
            options={[
              { value: "ALL", name: "전체" },
              { value: "FIRST", name: "1층" },
              { value: "SECOND", name: "2층" },
              { value: "THIRD", name: "3층" },
            ]}
          />
          <Dropdown
            value={{ value: "LAB14", name: "LAB 14, 15" }}
            setValue={(e) => console.log(e)}
            options={[
              { value: "LAB14", name: "LAB 14, 15" },
              { value: "LAB16", name: "LAB 16" },
              { value: "LAB19", name: "LAB 19, 20" },
            ]}
          />
        </S.ContentHeaderWrap>
        <S.TableHead>
          <S.TableColumn $flex="1">학번</S.TableColumn>
          <S.TableColumn $flex="1">이름</S.TableColumn>
          <S.TableColumn $flex="1">소속</S.TableColumn>
          <S.TableColumn $flex="2">8 9교시 출석</S.TableColumn>
          <S.TableColumn $flex="2">10 11교시 출석</S.TableColumn>
          <S.TableColumn $flex="2">최종 출석</S.TableColumn>
          <S.TableColumn $flex="1">참여 여부</S.TableColumn>
        </S.TableHead>
        <S.TableContent>
          {Array.from({ length: 30 }).map((_, idx) => (
            <S.TableItem key={idx}>
              <S.TableItemContent $flex="1">1210</S.TableItemContent>
              <S.TableItemContent $flex="1">김응찬</S.TableItemContent>
              <S.TableItemContent $flex="1">B1ND</S.TableItemContent>
              <S.TableItemContent $flex="2">4:30 (나르샤)</S.TableItemContent>
              <S.TableItemContent $flex="2">7:10 (나르샤)</S.TableItemContent>
              <S.TableItemContent $flex="2">-</S.TableItemContent>
              <S.TableItemContent $flex="1">O</S.TableItemContent>
            </S.TableItem>
          ))}
        </S.TableContent>
      </S.ContentWrap>
    </S.Container>
  );
};

export default Rooms;
