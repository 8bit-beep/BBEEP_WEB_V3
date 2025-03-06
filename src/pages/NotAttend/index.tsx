import ThemedIcon from "../../components/common/ThemedIcon";
import * as S from "./style";
import { useGetNotAttends } from "../../hooks/attends/useGetNotAttends";
import Dropdown from "../../components/common/Dropdown";
import {parseReason} from "../../utils/parseReason.ts";

const NotAttend = () => {
  const { floor, type, handleFloor, handleType, notAttedsData } =
    useGetNotAttends();

  return (
    <S.Container>
      <S.ContentHeaderWrap>
        <ThemedIcon src="/assets/Excluded.svg" width="2.5rem" height="2.5rem" />
        <div>
          <S.Title>불참자 조회하기</S.Title>
          <S.Subtitle>
            아직 출석하지 않은 사람들을 확인해 보세요!
          </S.Subtitle>
        </div>
        <S.Spacer />

        <Dropdown
          value={type}
          setValue={handleType}
          options={[
            { value: "ALL", name: "전체" },
            { value: "ABSENT", name: "결석" },
            { value: "LEAVE_EARLY", name: "조퇴" },
            { value: "NOT_ATTENDED", name: "미출석" },
          ]}
        />
        <Dropdown
          value={floor}
          setValue={handleFloor}
          options={[
            { value: "1", name: "1층" },
            { value: "2", name: "2층" },
            { value: "3", name: "3층" },
          ]}
        />
      </S.ContentHeaderWrap>
      <S.TableHead>
        <S.TableColumn $flex="1">학번</S.TableColumn>
        <S.TableColumn $flex="1">이름</S.TableColumn>
        <S.TableColumn $flex="1">실</S.TableColumn>
        <S.TableColumn $flex="2">불참 사유</S.TableColumn>
        <S.TableColumn $notCenter $flex="5">
          불참 교시
        </S.TableColumn>
      </S.TableHead>
      <S.TableContent>
        {!notAttedsData || notAttedsData?.length === 0 ? (
          <S.NoContent>출석 데이터가 없습니다.</S.NoContent>
        ) : (
          notAttedsData?.map((item, idx) => (
            <S.TableItem key={idx}>
              <S.TableItemContent $flex="1">
                {item.studentId}
              </S.TableItemContent>
              <S.TableItemContent $flex="1">{item.username}</S.TableItemContent>
              <S.TableItemContent $flex="1">{item.room}</S.TableItemContent>
              <S.TableItemContent $flex="2">{parseReason(item.reason as "ABSENT" | "OUTGOING" | "SLEEPOVER" | "NOT_ATTEND" | "OTHER")}</S.TableItemContent>
              <S.TableItemContent $notCenter $flex="5">
                {item.period}교시
              </S.TableItemContent>
            </S.TableItem>
          ))
        )}
      </S.TableContent>
    </S.Container>
  );
};

export default NotAttend;
