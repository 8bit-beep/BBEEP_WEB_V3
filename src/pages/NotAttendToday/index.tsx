import * as S from "./style";
import { useGetNotAttends } from "../../hooks/attends/useGetNotAttends";
import Skeleton from "../../components/common/Skeleton";
import NotAttendStudent from "../../components/students/NotAttendStudent";
import { useState } from "react";
import { Option } from "../../types/props/dropdownProps.ts";
import { getStoredOption } from "../../utils/getStoredOption.ts";
import { ROOMS } from "../../constants/room/rooms.ts";
import TableHeader from "../../components/common/TableHeader.tsx";
import CustomDropdown from "../../components/common/Dropdown/DropDown.tsx";
import TableContainer from "../../components/common/Table/TableContainer.tsx";
import TableColumn from "../../components/common/Table/TableColumn.tsx";

const NotAttendToday = () => {
    const [filterBy, setFilterBy] = useState<Option>(
        getStoredOption("FILTER_BY") || { name: "스터디", value: "room" }
    );
    const [grade, setGrade] = useState<Option>(
        getStoredOption("NOTATTEND_GRADE") || { name: "1학년", value: "1" }
    );
    const [cls, setCls] = useState<Option>(
        getStoredOption("NOTATTEND_CLS") || { name: "1반", value: "1" }
    );
    const [room, setRoom] = useState<Option>(
        getStoredOption("NOTATTEND_ROOM") || {
            name: "프로젝트 1",
            value: "PROJECT1",
        }
    );

    const handleFilterBy = (option: Option) => {
        setFilterBy(option);
        localStorage.setItem("FILTER_BY", JSON.stringify(option));
    };

    const handleGrade = (option: Option) => {
        setGrade(option);
        localStorage.setItem("NOTATTEND_GRADE", JSON.stringify(option));
    };

    const handleCls = (option: Option) => {
        setCls(option);
        localStorage.setItem("NOTATTEND_CLS", JSON.stringify(option));
    };

    const handleRoom = (option: Option) => {
        setRoom(option);
        localStorage.setItem("NOTATTEND_ROOM", JSON.stringify(option));
    };

    const { data, isLoading } = useGetNotAttends(filterBy, grade, cls, room);

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Excluded.svg"
                    title="오늘 불참자 조회하기"
                    description="아직 출석하지 않은 사람들을 확인해 보세요!"
                >
                    <CustomDropdown
                        setValue={handleFilterBy}
                        value={filterBy}
                        options={[
                            { name: "스터디", value: "room" },
                            { name: "학반", value: "class" },
                        ]}
                    />
                    {filterBy.value === "class" ? (
                        <>
                            <CustomDropdown
                                value={grade}
                                setValue={handleGrade}
                                options={[
                                    { value: "1", name: "1학년" },
                                    { value: "2", name: "2학년" },
                                    { value: "3", name: "3학년" },
                                ]}
                            />
                            <CustomDropdown
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
                        <CustomDropdown
                            setValue={handleRoom}
                            value={room}
                            options={ROOMS}
                        />
                    )}
                </TableHeader>
                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex="1">학번</TableColumn>
                    <TableColumn $flex="1">이름</TableColumn>
                    <TableColumn $flex="1">실</TableColumn>
                    <TableColumn $flex="1">불참 교시</TableColumn>
                    <TableColumn $flex="1.2"></TableColumn>
                </div>
                <S.TableContent>
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, idx) => (
                            <Skeleton
                                width="100%"
                                height="5rem"
                                borderRadius="0.8rem"
                                key={idx}
                            />
                        ))
                    ) : data && data.length > 0 ? (
                        data.map((item) => <NotAttendStudent data={item} />)
                    ) : (
                        <div className="w-full h-10 flex justify-center items-center text-xl text-gray">
                            결석자가 없습니다.
                        </div>
                    )}
                </S.TableContent>
            </TableContainer>
        </div>
    );
};

export default NotAttendToday;
