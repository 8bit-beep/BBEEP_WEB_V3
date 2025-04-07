import * as S from "./style";
import { useGetNotAttends } from "../../hooks/attends/useGetNotAttends";
import ThemedIcon from "../../components/common/ThemedIcon";
import Skeleton from "../../components/common/Skeleton";
import NotAttendStudent from "../../components/students/NotAttendStudent";
import Dropdown from "../../components/common/Dropdown";
import {useState} from "react";
import {Option} from "../../types/props/dropdownProps.ts";
import {getStoredOption} from "../../utils/getStoredOption.ts";
import {ROOMS} from "../../constants/room/rooms.ts";


const NotAttendToday = () => {
  const [filterBy, setFilterBy] = useState<Option>(getStoredOption("FILTER_BY") || { name: "스터디", value: "room" });
  const [grade, setGrade] = useState<Option>(getStoredOption("NOTATTEND_GRADE") || { name: "1학년", value: "1" });
  const [cls, setCls] = useState<Option>(getStoredOption("NOTATTEND_CLS") || { name: "1반", value: "1" });
  const [room, setRoom] = useState<Option>(getStoredOption("NOTATTEND_ROOM") || { name: "프로젝트 1", value: "PROJECT1" });

  const handleFilterBy = (option: Option) => {
    setFilterBy(option);
    localStorage.setItem("FILTER_BY", JSON.stringify(option));
  }

  const handleGrade = (option: Option) => {
    setGrade(option);
    localStorage.setItem("NOTATTEND_GRADE", JSON.stringify(option));
  }

  const handleCls = (option: Option) => {
    setCls(option);
    localStorage.setItem("NOTATTEND_CLS", JSON.stringify(option));
  }

  const handleRoom = (option: Option) => {
    setRoom(option);
    localStorage.setItem("NOTATTEND_ROOM", JSON.stringify(option));
  }

  const { data, isLoading } = useGetNotAttends(filterBy, grade, cls, room);

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
          <S.Spacer />
          <Dropdown setValue={handleFilterBy} value={filterBy} options={[{ name: "스터디", value: "room" },{ name: "학반", value: "class" }]} />
          {
            filterBy.value === "class" ? (
              <>
                <Dropdown
                  value={grade}
                  setValue={handleGrade}
                  options={[
                    { value: "1", name: "1학년" },
                    { value: "2", name: "2학년" },
                    { value: "3", name: "3학년" },
                  ]}
                />
                <Dropdown
                  value={cls}
                  setValue={handleCls}
                  options={[
                    { value: "1", name: "1반" },
                    { value: "2", name: "2반" },
                    { value: "3", name: "3반" },
                    { value: "4", name: "4반" },
                  ]}
                />
              </>
            ) : (
              <Dropdown setValue={handleRoom} value={room} options={ROOMS} />
            )
          }
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
            )): <S.NoContent>결석자가 없습니다.</S.NoContent>
          }
        </S.TableContent>
      </S.ContentWrap>
    </S.Container>
  );
};

export default NotAttendToday;
