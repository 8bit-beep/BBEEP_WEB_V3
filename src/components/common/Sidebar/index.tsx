import * as S from "./style";
import {useSidebarDataStore} from "../../../store/sidebar/useSidebarDataStore.ts";
import Skeleton from "../Skeleton";
import {useGetAttendsByRoom} from "../../../hooks/attends/useGetAttendsByRoom.ts";
import AttendStudent from "../../students/AttendStudent";
import {useEffect} from "react";
import {parseRoomName} from "../../../utils/parseRoomName.ts";
import { useApproveAttend } from "../../../queries/attendApprove/approveAttend.ts";
import { useLocation } from "react-router-dom";
import { useGetAttendApproveOneQuery } from "../../../queries/attendApprove/getAttendApproveOne.ts";

const Sidebar = () => {
  const { sidebarData, setSidebarData } = useSidebarDataStore();
  const { data, isLoading, refetch } = useGetAttendsByRoom(sidebarData);
  const { mutate } = useApproveAttend(sidebarData);
  const { data: approve } = useGetAttendApproveOneQuery(sidebarData);
  const location = useLocation();
  
  useEffect(() => {
    setSidebarData(null);
  },[location.pathname]);
  
  return (
    <S.Container>
      <S.SidebarHeader>
        <S.RoomName>{parseRoomName(sidebarData || "NOTFOUND")} 인원</S.RoomName>
        <S.ApproveButton $isApproved={!!approve?.approveTeacher} onClick={() => {mutate()}}>{approve?.approveTeacher ? "승인취소": "승인하기"}</S.ApproveButton>
        <S.Refetch onClick={() => refetch()}>새로고침</S.Refetch>
      </S.SidebarHeader>
      
      <S.StudentsWrap>
        {
          isLoading ? Array.from({length: 4}).map((_, idx) => (
            <S.ListGap key={idx}>
              <Skeleton width="100%" height="5rem" borderRadius="0.8rem" />
            </S.ListGap>
          )) : data && data.length > 0 ? data?.map((item) => (
            <S.ListGap key={item.studentId}>
              <AttendStudent data={item} />
            </S.ListGap>
          )) : (
            <S.NoContent>출석한 인원이 없습니다.</S.NoContent>
          )
        }
      </S.StudentsWrap>
    </S.Container>
  );
};

export default Sidebar