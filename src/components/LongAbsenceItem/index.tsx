import { useState } from "react";
import { useDeleteLongAbsence } from "../../queries/longAbsence/deleteLongAbsence";
import { LongAbsenceItem as LongAbsenceItemProps } from "../../types/longAbsence/longAbsenceItem";
import { parseDate } from "../../utils/parseDate";
import * as S from "./style";
import { X } from "lucide-react";
import { useEditLongAbsence } from "../../queries/longAbsence/editLongAbsence";

const LongAbsenceItem = ({ data }: { data: LongAbsenceItemProps }) => {
    const [startDate, setStartDate] = useState(data.startDate);
    const [endDate, setEndDate] = useState(data.endDate);
    const [reason, setReason] = useState(data.reason);
    const [modalVisible, setModalVisible] = useState(false);
    const { mutateAsync } = useEditLongAbsence(data.id);
    const { mutate } = useDeleteLongAbsence(data.id);

    return (
        <div className="w-full flex items-center">
            <S.TableItemContent $flex="2">
                {data.grade}
                {data.cls}
                {data.num > 9 ? data.num : `0${data.num}`}
            </S.TableItemContent>
            <S.TableItemContent $flex="2">{data.username}</S.TableItemContent>
            <S.TableItemContent $flex="6">
                {parseDate(data.startDate)}~{parseDate(data.endDate)}
            </S.TableItemContent>
            <S.TableItemContent $flex="5" $notCenter>
                {data.reason}
            </S.TableItemContent>
            <S.TableItemContent $flex="1.2">
                <S.EditButton onClick={() => setModalVisible(true)}>
                    수정
                </S.EditButton>
            </S.TableItemContent>
            <S.TableItemContent $flex="1.2">
                <S.DeleteButton
                    onClick={() => {
                        mutate();
                    }}
                >
                    삭제
                </S.DeleteButton>
            </S.TableItemContent>
            {/* modal */}
            {modalVisible && (
                <div
                    className="w-full h-full fixed top-0 left-0 z-1000 flex justify-center items-center p-5"
                    onClick={() => setModalVisible(false)}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                    {/* 위에는 그림자, 밑에는 모달 내용 */}
                    <div
                        className="w-full max-w-lg bg-white p-5 rounded-xl flex flex-col items-start gap-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <S.ModalTitle>
                            <p>장기 결석자 수정</p>{" "}
                            <X onClick={() => setModalVisible(false)} />
                        </S.ModalTitle>
                        <div className="w-full flex items-center gap-8 text-base">
                            <S.Input
                                type="date"
                                onChange={(e) => setStartDate(e.target.value)}
                                value={startDate}
                            />
                            -
                            <S.Input
                                type="date"
                                onChange={(e) => setEndDate(e.target.value)}
                                value={endDate}
                            />
                        </div>
                        <div className="w-full flex items-center gap-8 text-base">
                            <S.ReasonInput
                                type="text"
                                placeholder="장기 결석 사유를 입력해주세요."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            />
                        </div>
                        <S.Submit
                            onClick={() =>
                                mutateAsync({
                                    reason,
                                    startDate,
                                    endDate,
                                }).then(() => {
                                    setModalVisible(false);
                                })
                            }
                        >
                            수정하기
                        </S.Submit>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LongAbsenceItem;
