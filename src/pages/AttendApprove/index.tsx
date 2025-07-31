import * as S from "./style";
import { useGetAttendApproveQuery } from "../../queries/attendApprove/getAttendApprove";
import Skeleton from "../../components/common/Skeleton";
import ApproveItem from "../../components/ApproveItem";
import { useState } from "react";
import { Option } from "../../types/props/dropdownProps";
import { useGetAttendApproveNotQuery } from "../../queries/attendApprove/getAttendApproveNot";
import { ApproveItem as ApproveItemType } from "../../types/attendApprove/approveItem";
import NotAttendApprove from "../../components/NotAttendApprove";
import { Room } from "../../types/attend/room";
import CustomDropdown from "../../components/common/Dropdown/DropDown";
import TableHeader from "../../components/common/TableHeader";
import TableContainer from "../../components/common/Table/TableContainer";
import TableColumn from "../../components/common/Table/TableColumn";

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

    const filterdData =
        filterBy.value === "all"
            ? approveData?.filter(
                  (item) =>
                      item.room.name !== "NOTFOUND" &&
                      item.room.name !== "OTHER"
              )
            : notApproveData?.filter(
                  (item) => item.name !== "NOTFOUND" && item.name !== "OTHER"
              );

    return (
        <S.Container>
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
                    <TableColumn $flex="6" $notCenter>
                        실 이름
                    </TableColumn>
                    <TableColumn $flex="2">승인 시각</TableColumn>
                    <TableColumn $flex="2">담당선생님</TableColumn>
                    <TableColumn $flex="2">승인 여부</TableColumn>
                    <TableColumn $flex="2" />
                </div>
                <S.TableContent>
                    {!filterdData || approveLoading || notApproveLoading
                        ? Array.from({ length: 4 }).map((_, idx) => (
                              <Skeleton
                                  width="100%"
                                  height="5rem"
                                  borderRadius="0.8rem"
                                  key={idx}
                              />
                          ))
                        : filterdData?.map((item, idx) =>
                              filterBy.value === "all" ? (
                                  <ApproveItem
                                      data={item as ApproveItemType}
                                      key={idx}
                                  />
                              ) : (
                                  <NotAttendApprove data={item as Room} />
                              )
                          )}
                </S.TableContent>
            </TableContainer>
        </S.Container>
    );
};

export default AttendApprove;
