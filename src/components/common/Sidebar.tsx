import { useSidebarDataStore } from "../../store/sidebar/useSidebarDataStore.ts";
import Skeleton from "./Skeleton/index.tsx";
import { useGetAttendsByRoom } from "../../hooks/attends/useGetAttendsByRoom.ts";
import AttendStudent from "../students/AttendStudent/index.tsx";
import { useEffect } from "react";
import { parseRoomName } from "../../utils/parseRoomName.ts";
import { useApproveAttend } from "../../queries/attendApprove/approveAttend.ts";
import { useLocation } from "react-router-dom";
import { useGetAttendApproveOneQuery } from "../../queries/attendApprove/getAttendApproveOne.ts";
import { COLOR } from "../../style/color/color.ts";

const Sidebar = () => {
    const { sidebarData, setSidebarData } = useSidebarDataStore();
    const { data, isLoading, refetch } = useGetAttendsByRoom(sidebarData);
    const { mutate } = useApproveAttend(sidebarData);
    const { data: approve } = useGetAttendApproveOneQuery(sidebarData);
    const location = useLocation();

    useEffect(() => {
        setSidebarData(null);
    }, [location.pathname]);

    return (
        <div className="w-full h-full flex flex-col gap-4 bg-white p-6">
            {/* sidebar header */}
            <div className="w-full flex items-center gap-4">
                {/* 현재 실 */}
                <p className="text-2xl font-semibold flex-1">
                    {parseRoomName(sidebarData || "NOTFOUND")} 인원
                </p>
                {/* 승인버튼 */}
                <button
                    className="py-2 px-8 rounded-xl text-white border-none text-base cursor-pointer"
                    style={{
                        background: approve?.approveTeacher
                            ? COLOR.Red
                            : COLOR.Main,
                    }}
                    onClick={() => {
                        mutate();
                    }}
                >
                    {approve?.approveTeacher ? "승인취소" : "승인하기"}
                </button>
                {/* 새로고침 버튼 */}
                <div
                    className="px-6 py-3 text-main bg-background rounded-xl
        transition-all duration-[0.3s] text-base"
                    onClick={() => refetch()}
                >
                    새로고침
                </div>
            </div>

            <div
                className="w-full flex-1 bg-background rounded-xl overflow-scroll
      p-3"
            >
                {/* 학생들 나오는 곳 */}
                {isLoading ? (
                    Array.from({ length: 4 }).map((_, idx) => (
                        <div className="w-full mb-4" key={idx}>
                            <Skeleton
                                width="100%"
                                height="5rem"
                                borderRadius="0.8rem"
                            />
                        </div>
                    ))
                ) : data && data.length > 0 ? (
                    data?.map((item) => (
                        <div className="w-full mb-4" key={item.studentId}>
                            <AttendStudent data={item} />
                        </div>
                    ))
                ) : (
                    <div className="w-full h-80 flex items-center justify-center text-xl text-gray">
                        출석한 인원이 없습니다.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
