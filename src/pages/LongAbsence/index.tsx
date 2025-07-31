import { useState } from "react";
import ThemedIcon from "../../components/common/ThemedIcon";
import * as S from "./style";
import { Option } from "../../types/props/dropdownProps";
import { X } from "lucide-react";
import { useCreateLongAbsence } from "../../queries/longAbsence/createLongAbsence";
import { useGetLongAbsenceQuery } from "../../queries/longAbsence/getLongAbsence";
import Skeleton from "../../components/common/Skeleton";
import LongAbsenceItem from "../../components/LongAbsenceItem";
import CustomDropdown from "../../components/common/Dropdown/DropDown";
import TableHeader from "../../components/common/TableHeader";
import TableColumn from "../../components/common/Table/TableColumn";
import TableContainer from "../../components/common/Table/TableContainer";

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
        <S.Container>
            <TableContainer>
                <TableHeader
                    icon="/assets/Excluded.svg"
                    title="장기 결석자"
                    description="
                                오랫동안 출석하지 않는 학생을 등록하고
                                확인하세요!"
                ></TableHeader>
                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex="2">이름</TableColumn>
                    <TableColumn $flex="2">학번</TableColumn>
                    <TableColumn $flex="6">기간</TableColumn>
                    <TableColumn $flex="5" $notCenter>
                        사유
                    </TableColumn>
                    <TableColumn $flex="1.2" />
                    <TableColumn $flex="1.2" />
                </div>
                <S.TableContent>
                    {!data || isLoading
                        ? Array.from({ length: 4 }).map((_, idx) => (
                              <Skeleton
                                  width="100%"
                                  height="5rem"
                                  borderRadius="0.8rem"
                                  key={idx}
                              />
                          ))
                        : data.map((item) => (
                              <LongAbsenceItem data={item} key={item.id} />
                          ))}
                </S.TableContent>
                {modalVisible && (
                    <S.ModalShadow onClick={() => setModalVisible(false)}>
                        <S.ModalWrap onClick={(e) => e.stopPropagation()}>
                            <S.ModalTitle>
                                <p>장기 결석자 등록</p>{" "}
                                <X onClick={() => setModalVisible(false)} />
                            </S.ModalTitle>
                            <S.FieldWrap>
                                <CustomDropdown
                                    value={grade}
                                    setValue={(e) => setGrade(e)}
                                    options={[
                                        { name: "1학년", value: "1" },
                                        { name: "2학년", value: "2" },
                                        { name: "3학년", value: "3" },
                                    ]}
                                />
                                <CustomDropdown
                                    value={cls}
                                    setValue={(e) => setCls(e)}
                                    options={[
                                        { name: "1반", value: "1" },
                                        { name: "2반", value: "2" },
                                        { name: "3반", value: "3" },
                                        { name: "4반", value: "4" },
                                    ]}
                                />
                                <S.Input
                                    placeholder="번호"
                                    type="number"
                                    min={0}
                                    max={19}
                                    onChange={(e) => setNum(e.target.value)}
                                    value={num}
                                />
                            </S.FieldWrap>
                            <S.FieldWrap>
                                <S.Input
                                    type="date"
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                    value={startDate}
                                />
                                -
                                <S.Input
                                    type="date"
                                    onChange={(e) => setEndDate(e.target.value)}
                                    value={endDate}
                                />
                            </S.FieldWrap>
                            <S.FieldWrap>
                                <S.ReasonInput
                                    type="text"
                                    placeholder="장기 결석 사유를 입력해주세요."
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                />
                            </S.FieldWrap>
                            <S.Submit
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
                            </S.Submit>
                        </S.ModalWrap>
                    </S.ModalShadow>
                )}
            </TableContainer>
        </S.Container>
    );
};

export default LongAbsence;
