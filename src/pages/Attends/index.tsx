import Dropdown from "../../components/Common/Dropdown";
import ThemedIcon from "../../components/Common/ThemedIcon";
import { useGetAttendsByRoom } from "../../hooks/attends/useGetAttendsByRoom";
import { useGetRoomsByFloor } from "../../hooks/attends/useGetRoomsByFloor";
import * as S from "./style";

const Attends = () => {
  const { floor, handleFloor, roomData } = useGetRoomsByFloor();
  const { room, handleRoom, attendsData } = useGetAttendsByRoom(floor);

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
            value={floor}
            setValue={handleFloor}
            options={[
              { value: "ALL", name: "전체" },
              { value: "1", name: "1층" },
              { value: "2", name: "2층" },
              { value: "3", name: "3층" },
            ]}
          />
          <Dropdown value={room} setValue={handleRoom} options={roomData} />
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
          {!attendsData || attendsData?.length === 0 ? (<S.NoContent>출석 데이터가 없습니다.</S.NoContent>) : attendsData?.map((item, idx) => (
            <S.TableItem key={idx}>
              <S.TableItemContent $flex="1">
                {item.studentId}
              </S.TableItemContent>
              <S.TableItemContent $flex="1">{item.username}</S.TableItemContent>
              <S.TableItemContent $flex="1">{item.club}</S.TableItemContent>
              <S.TableItemContent $flex="2">
                {item.attendedTimes["8"].time || "--"}{" "}
                {item.attendedTimes["8"].type === "NARSHA"
                  ? "(나르샤)"
                  : item.attendedTimes["8"].type === "AFTER_SCHOOL" &&
                    "(방과후)"}
              </S.TableItemContent>
              <S.TableItemContent $flex="2">
                {item.attendedTimes["10"].time || "--"}{" "}
                {item.attendedTimes["10"].type === "NARSHA"
                  ? "(나르샤)"
                  : item.attendedTimes["10"].type === "AFTER_SCHOOL" &&
                    "(방과후)"}
              </S.TableItemContent>
              <S.TableItemContent $flex="2">
                {item.attendedTimes["11"].time || "--"}{" "}
                {item.attendedTimes["11"].type === "NARSHA"
                  ? "(나르샤)"
                  : item.attendedTimes["11"].type === "AFTER_SCHOOL" &&
                    "(방과후)"}
              </S.TableItemContent>
              <S.TableItemContent $flex="1">
                <S.Attended $isAttended={item.isAttended}>
                  {item.isAttended ? "O" : "X"}
                </S.Attended>
              </S.TableItemContent>
            </S.TableItem>
          ))}
        </S.TableContent>
      </S.ContentWrap>
    </S.Container>
  );
};

export default Attends;
