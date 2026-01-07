import { useSidebarDataStore } from "../../../store/sidebar/useSidebarDataStore.ts";
import { useGetAttendsByRoom } from "../../../hooks/attends/useGetAttendsByRoom.ts";
import AttendStudent from "../../students/AttendStudent.tsx";
import { useEffect, useState } from "react";
import { parseRoomName } from "../../../utils/parseRoomName.ts";
import { useApproveAttend } from "../../../queries/attendApprove/approveAttend.ts";
import { useLocation } from "react-router-dom";
import { useGetAttendApproveOneQuery } from "../../../queries/attendApprove/getAttendApproveOne.ts";
import { COLOR } from "../../../style/color/color.ts";
import Skeleton from "../Skeleton.tsx";

const Sidebar = () => {
  const { sidebarData, setSidebarData } = useSidebarDataStore();
  const { data, isLoading, refetch } = useGetAttendsByRoom(
    sidebarData,
    "WINTER_CAMP"
  );
  const [attendedCount, setAttendedCount] = useState(
    data?.filter((attend) =>
      attend.statuses.some((status) => status.status === "WINTER_CAMP")
    ).length ?? 0
  );

  const { mutate } = useApproveAttend(sidebarData);
  const { data: approve } = useGetAttendApproveOneQuery(sidebarData);
  const location = useLocation();

  useEffect(() => {
    setSidebarData(null);
  }, [location.pathname, setSidebarData]);

  return (
    <div className="w-full h-screen flex flex-col gap-3 bg-white pt-13 pb-36 px-4 z-10">
      {/* sidebar header */}
      <div className="w-full flex items-center gap-4">
        {/* 현재 실 */}
        <p className="text-2xl font-semibold flex-1">
          {parseRoomName(sidebarData || "NOTFOUND")} 인원
        </p>
        {/* 승인버튼 wrap*/}
        <div className="flex gap-1">
          <button
            className="py-1 px-3 rounded-xl text-white border-none text-xs cursor-pointer"
            style={{
              background: approve?.approvedTeacher ? COLOR.Red : COLOR.Main,
            }}
            onClick={() => {
              mutate();
            }}
          >
            {approve?.approvedTeacher ? "전체 승인취소" : "전체 승인하기"}
          </button>
          {/* 새로고침 버튼 */}
          <div
            className="py-1 px-3 text-main bg-gray rounded-xl transition-all duration-[0.3s] text-xs"
            onClick={() => refetch()}
          >
            새로고침
          </div>
        </div>
      </div>
      <div className="w-full flex-1 min-h-0 flex flex-col gap-3 bg-gray pt-3 pb-24 px-4 overflow-y-auto rounded-xl">
        {!isLoading && (
          <div className="w-fit bg-main rounded-xl text-sm font-normal px-3 py-2 text-white">
            인원 {attendedCount}/{data.length}명
          </div>
        )}
        {/* 학생들 나오는 곳 */}
        {isLoading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <div className="w-full mb-4" key={idx}>
              <Skeleton width="100%" height="5rem" borderRadius="0.8rem" />
            </div>
          ))
        ) : data && data.length > 0 ? (
          data
            ?.slice()
            .sort((a, b) => Number(a.studentId) - Number(b.studentId))
            .map((item) => (
              <div className="w-full mb-4" key={item.studentId}>
                <AttendStudent
                  data={item}
                  room={sidebarData || "NOTFOUND"}
                  count={attendedCount}
                  setCount={setAttendedCount}
                />
              </div>
            ))
        ) : (
          <div className="w-full h-5 flex justify-center items-center text-xl text-gray">
            출석한 인원이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
