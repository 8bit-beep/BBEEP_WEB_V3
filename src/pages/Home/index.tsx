import MainSection from "../../components/MainSection";
import * as S from "./style";
import {useGetRoomsByFloor} from "../../hooks/attends/useGetRoomsByFloor.ts";
import {useGetAttendsByRoom} from "../../hooks/attends/useGetAttendsByRoom.ts";
import Dropdown from "../../components/common/Dropdown";
import {ATTEND_TIME_KEYS} from "../../constants/attendTime/attendTimeKeys.ts";
import {useGetNotAttends} from "../../hooks/attends/useGetNotAttends.ts";
import {useGetShiftsQuery} from "../../queries/shifts/getShifts.ts";
import {parseReason} from "../../utils/parseReason.ts";

const Home = () => {
  const { floor: roomsFloor, roomData } = useGetRoomsByFloor();
  const { room, handleRoom, attendsData } = useGetAttendsByRoom(roomsFloor);
  const { notAttedsData } =
    useGetNotAttends();
  const shiftData = useGetShiftsQuery();
  
  return (
    <S.Container>
      <S.ContentWrap>
        <S.SectionWrap>
          <MainSection title="실 이동 신청 목록" icon="Lab" href="/shifts">
            <S.TableHead>
              <S.TableColumn $flex="1">학번</S.TableColumn>
              <S.TableColumn $flex="1">이름</S.TableColumn>
              <S.TableColumn $flex="1.4">요청 내용</S.TableColumn>
              <S.TableColumn $notCenter $flex="3">
                요청 사유
              </S.TableColumn>
            </S.TableHead>
            <S.TableContent>
              {
                shiftData?.map((item) => (
                  <S.TableItem key={item.id}>
                    <S.TableItemContent $flex="1">
                      {item.studentId}
                    </S.TableItemContent>
                    <S.TableItemContent $flex="1">
                      {item.username}
                    </S.TableItemContent>
                    <S.TableItemContent $flex="1.4">
                      {item.fixedRoom} {"->"} {item.room}
                    </S.TableItemContent>
                    <S.TableItemContent $notCenter $flex="3">
                      {item.cause}
                    </S.TableItemContent>
                  </S.TableItem>
                ))
              }
            </S.TableContent>
          </MainSection>
          <MainSection title="불참자 목록" icon="Filter" href="/not-attend">
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
              {
                notAttedsData?.map((item, idx) => (
                  <S.TableItem key={idx}>
                    <S.TableItemContent $flex="1">
                      {item.studentId}
                    </S.TableItemContent>
                    <S.TableItemContent $flex="1">{item.username}</S.TableItemContent>
                    <S.TableItemContent $flex="1">{item.room}</S.TableItemContent>
                    <S.TableItemContent $flex="1.2">{item.period}교시</S.TableItemContent>
                    <S.TableItemContent $flex="3" $notCenter>{parseReason(item.reason as "ABSENT" | "OUTGOING" | "SLEEPOVER" | "NOT_ATTEND" | "OTHER")}</S.TableItemContent>
                  </S.TableItem>
                ))}
              </S.TableContent>
          </MainSection>
        </S.SectionWrap>
        <S.SectionWrap>
          <MainSection
            title="스터디 출석 현황"
            icon="Person"
            subtitle={<Dropdown value={room} setValue={handleRoom} options={roomData} />}
            href="/attends"
          >
            <S.TableHead>
              <S.TableColumn $flex="1">학번</S.TableColumn>
              <S.TableColumn $flex="1">이름</S.TableColumn>
              <S.TableColumn $flex="1">소속</S.TableColumn>
              <S.TableColumn $flex="2">8 9교시 출석</S.TableColumn>
              <S.TableColumn $flex="2">10교시 출석</S.TableColumn>
              <S.TableColumn $flex="2">11교시 출석</S.TableColumn>
              <S.TableColumn $flex="2">참여 여부</S.TableColumn>
            </S.TableHead>
            <S.TableContent>
              {attendsData?.map((item, idx) => (
                <S.TableItem key={idx}>
                  <S.TableItemContent $flex="1">{item.studentId}</S.TableItemContent>
                  <S.TableItemContent $flex="1">{item.username}</S.TableItemContent>
                  <S.TableItemContent $flex="1">{item.club}</S.TableItemContent>
                  {ATTEND_TIME_KEYS.map((attendTime) => (
                    <S.TableItemContent $flex="2" key={attendTime + `${idx}`}>
                      {item.attendedTimes[attendTime].time !== "null"
                        ? item.attendedTimes[attendTime].time
                        : "--"}{" "}
                      {item.attendedTimes[attendTime].type === "NARSHA"
                        ? "(나르샤)"
                        : item.attendedTimes[attendTime].type ===
                        "AFTER_SCHOOL" && "(방과후)"}
                    </S.TableItemContent>
                  ))}
                  <S.TableItemContent $flex="2">{item.isAttended ? "O" : "X"}</S.TableItemContent>
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
