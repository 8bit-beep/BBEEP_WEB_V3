import { useGetAttendApproveQuery } from "../queries/attendApprove/getAttendApprove";
import Skeleton from "../components/common/Skeleton.tsx";
import ApproveItem from "../components/ApproveItem";
import { useState } from "react";
import { Option } from "../types/props/dropdownProps";
import { useGetAttendApproveNotQuery } from "../queries/attendApprove/getAttendApproveNot";
import { ApproveItem as ApproveItemType } from "../types/approve/approveItem";
import NotAttendApprove from "../components/NotAttendApprove";
import { Room } from "../types/attend/room";
import CustomDropdown from "../components/common/dropdown/DropDown";
import TableHeader from "../components/common/table/TableHeader";
import TableContainer from "../components/common/table/TableContainer";
import TableColumn from "../components/common/table/TableColumn";

const AttendApprove = () => {
    const { data: approveData, isLoading: approveLoading } =
        useGetAttendApproveQuery();
    const { data: notApproveData, isLoading: notApproveLoading } =
        useGetAttendApproveNotQuery();
    const [filterBy, setFilterBy] = useState<Option>({
        name: "전체",
        value: "all",
    });

    const handleFilterBy = (option: Option) => {
        setFilterBy(option);
    };

    const filteredData =
        filterBy.value === "all"
            ? approveData?.filter(
                  (item) =>
                      item.room !== "NOTFOUND" &&
                      item.room !== "OTHER"
              )
            : notApproveData?.filter(
                  (item) => item.room !== "NOTFOUND" && item.room !== "OTHER"
              );

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Excluded.svg"
                    title="출석 승인 현황"
                    description="실별 출석 승인 여부를 확인해 보세요!"
                >
                    <CustomDropdown
                        setValue={handleFilterBy}
                        value={filterBy}
                        options={[
                            { name: "전체", value: "all" },
                            { name: "미승인", value: "notApproved" },
                        ]}
                    />
                </TableHeader>
                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex={6} $notCenter>
                        실 이름
                    </TableColumn>
                    <TableColumn $flex={2}>승인 시각</TableColumn>
                    <TableColumn $flex={2}>담당선생님</TableColumn>
                    <TableColumn $flex={2}>승인 여부</TableColumn>
                    <TableColumn $flex={2} />
                </div>
                {/* contents */}
                <div
                    className="w-full flex flex-col overflow-y-scroll px-10 py-3 max-h-[600px]"
                    style={{
                        msOverflowStyle: "scrollbar",
                        scrollbarWidth: "thin",
                    }}
                >
                    <div className="w-full mb-4 flex flex-col">
                        {!filteredData || approveLoading || notApproveLoading
                            ? Array.from({ length: 4 }).map((_, idx) => (
                                  <Skeleton
                                      width="100%"
                                      height="5rem"
                                      borderRadius="0.8rem"
                                      key={idx}
                                      margin={true}
                                  />
                              ))
                            : filteredData?.map((item, idx) =>
                                  filterBy.value === "all" ? (
                                      <ApproveItem
                                          data={item as ApproveItemType}
                                          key={idx}
                                      />
                                  ) : (
                                      <NotAttendApprove data={item as Room} />
                                  )
                              )}
                    </div>
                </div>
            </TableContainer>
        </div>
    );
};

export default AttendApprove;
