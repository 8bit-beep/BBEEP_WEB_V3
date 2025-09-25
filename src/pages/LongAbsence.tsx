import { useState } from "react";
import { Option } from "../types/props/dropdownProps";
import { X } from "lucide-react";
import { useCreateLongAbsence } from "../queries/longAbsence/createLongAbsence";
import { useGetLongAbsenceQuery } from "../queries/longAbsence/getLongAbsence";
import Skeleton from "../components/common/Skeleton.tsx";
import CustomDropdown from "../components/common/Dropdown/DropDown";
import TableHeader from "../components/common/Table/TableHeader";
import TableColumn from "../components/common/Table/TableColumn";
import TableContainer from "../components/common/Table/TableContainer";
import LongAbsenceItem from "../components/common/LongAbsenceItem";
import {CLASS_OPTIONS, GRADE_OPTIONS} from "../constants/school/schoolOption.ts";

const LongAbsence = () => {
    const [grade, setGrade] = useState<Option>({ name: "1학년", value: "1" });
    const [cls, setCls] = useState<Option>({ name: "1반", value: "1" });
    const [num, setNum] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reason, setReason] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const { mutateAsync } = useCreateLongAbsence();
    const { data, isLoading } = useGetLongAbsenceQuery();

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Excluded.svg"
                    title="장기 결석자"
                    description="
                                오랫동안 출석하지 않는 학생을 등록하고
                                확인하세요!"
                ></TableHeader>
                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex={2}>학번</TableColumn>
                    <TableColumn $flex={2}>이름</TableColumn>
                    <TableColumn $flex={6}>기간</TableColumn>
                    <TableColumn $flex={5} $notCenter>
                        사유
                    </TableColumn>
                    <TableColumn $flex={1.2} />
                    <TableColumn $flex={1.2} />
                </div>
                {/* table contents */}
                <div
                    className="w-full flex-1 overflow-y-scroll overflow-x-hidden flex flex-col gap-9 py-9 px-20"
                    style={{
                        msOverflowStyle: "scrollbar",
                        scrollbarWidth: "thin",
                    }}
                >
                    {!data || isLoading ? (
                        Array.from({ length: 4 }).map((_, idx) => (
                            <Skeleton
                                width="100%"
                                height="5rem"
                                borderRadius="0.8rem"
                                key={idx}
                                margin={true}
                            />
                        ))
                    ) : data.length > 0 && data ? (
                        data.map((item) => (
                            <LongAbsenceItem data={item} key={item.id} />
                        ))
                    ) : (
                        <div className="w-full h-10 flex justify-center items-center text-xl text-gray">
                            결석자가 없습니다.
                        </div>
                    )}
                </div>
                {modalVisible && (
                    <div
                        className="w-full h-full fixed top-0 left-0 z-1000 flex justify-center items-center"
                        onClick={() => setModalVisible(false)}
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                    >
                        {/* 위에는 그림자, 밑에는 모달 내용 */}
                        <div
                            className="min-w-5 p-5 rounded-xl flex flex-col items-start gap-6 bg-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* 버튼 제외한 input wrap*/}
                            <div className="gap-5 flex flex-col">
                                <div className="w-full flex items-center justify-between">
                                    {/* title wrap */}
                                    <p className="text-xl font-medium text-black">
                                        장기 결석자 등록
                                    </p>
                                    <X
                                        className="cursor-pointer w-5"
                                        onClick={() => setModalVisible(false)}
                                    />
                                </div>
                                {/* field wrap */}
                                <div className="w-full justify-between flex items-center text-base text-black font-medium">
                                    <CustomDropdown
                                        value={grade}
                                        setValue={(e) => setGrade(e)}
                                        options={GRADE_OPTIONS}
                                    />
                                    <CustomDropdown
                                        value={cls}
                                        setValue={(e) => setCls(e)}
                                        options={CLASS_OPTIONS}
                                    />
                                    <input
                                        className="appearance-none w-[30%] text-base text-black font-medium px-2 py-2.5 bg-white outline-0 rounded-xl"
                                        style={{
                                            boxShadow:
                                                "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
                                        }}
                                        placeholder="번호"
                                        type="text"
                                        min={0}
                                        max={19}
                                        onChange={(e) => setNum(e.target.value)}
                                        value={num}
                                    />
                                </div>
                                <div className="w-full flex items-center justify-between text-base text-black font-medium">
                                    <input
                                        style={{
                                            boxShadow:
                                                "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
                                        }}
                                        className="appearance-none text-base text-black font-medium min-w-8 px-5 py-2.5 bg-white outline-0 rounded-xl"
                                        type="date"
                                        onChange={(e) =>
                                            setStartDate(e.target.value)
                                        }
                                        value={startDate}
                                    />
                                    -
                                    <input
                                        style={{
                                            boxShadow:
                                                "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
                                        }}
                                        className="appearance-none text-base text-black font-medium min-w-8 px-5 py-2.5 bg-white outline-0 rounded-xl"
                                        type="date"
                                        onChange={(e) =>
                                            setEndDate(e.target.value)
                                        }
                                        value={endDate}
                                    />
                                </div>
                                <input
                                    style={{
                                        boxShadow:
                                            "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
                                    }}
                                    className="w-full appearance-none text-base text-black font-medium min-w-8 px-5 py-2.5 bg-white outline-0 rounded-xl"
                                    type="text"
                                    placeholder="장기 결석 사유를 입력해주세요."
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                />
                            </div>
                            {/* 버튼 */}
                            <div
                                className="w-full py-2.5 rounded-xl text-base text-white cursor-pointer font-medium bg-main flex justify-center"
                                onClick={() =>
                                    mutateAsync({
                                        grade: Number(grade.value),
                                        cls: Number(cls.value),
                                        num: Number(num),
                                        reason,
                                        startDate,
                                        endDate,
                                    }).then(() => {
                                        setModalVisible(false);
                                        setGrade({ name: "1학년", value: "1" });
                                        setCls({ name: "1반", value: "1" });
                                        setNum("");
                                        setEndDate("");
                                        setStartDate("");
                                        setReason("");
                                    })
                                }
                            >
                                등록하기
                            </div>
                        </div>
                    </div>
                )}
            </TableContainer>
        </div>
    );
};

export default LongAbsence;
