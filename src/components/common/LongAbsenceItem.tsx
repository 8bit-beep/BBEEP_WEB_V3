import { useState } from "react";
import { useDeleteLongAbsence } from "../../queries/longAbsence/deleteLongAbsence";
import { LongAbsenceItem as LongAbsenceItemProps } from "../../types/longAbsence/longAbsenceItem";
import { parseDate } from "../../utils/parseDate";
import { X } from "lucide-react";
import { useEditLongAbsence } from "../../queries/longAbsence/editLongAbsence";
import TableItemContent from "./Table/TableItemContent";
import TableButton from "./Table/TableButton";

const LongAbsenceItem = ({ data }: { data: LongAbsenceItemProps }) => {
    const [startDate, setStartDate] = useState(data.startDate);
    const [endDate, setEndDate] = useState(data.endDate);
    const [reason, setReason] = useState(data.reason);
    const [modalVisible, setModalVisible] = useState(false);
    const { mutateAsync } = useEditLongAbsence(data.id);
    const { mutate } = useDeleteLongAbsence(data.id);

    return (
        <div className="w-full flex items-center">
            {/* 메인 테이블 */}
            <TableItemContent $flex={2}>
                {data.id}
                {data.cls}
                {data.num > 9 ? data.num : `0${data.num}`}
            </TableItemContent>
            <TableItemContent $flex={2}>{data.username}</TableItemContent>
            <TableItemContent $flex={6}>
                {parseDate(data.startDate)}~{parseDate(data.endDate)}
            </TableItemContent>
            <TableItemContent $flex={5} $notCenter>
                {data.reason}
            </TableItemContent>
            <TableItemContent $flex={1.2}>
                <TableButton
                    isSelected={true}
                    onClick={() => setModalVisible(true)}
                >
                    수정
                </TableButton>
            </TableItemContent>
            <TableItemContent $flex={1.2}>
                <TableButton
                    isSelected={false}
                    onClick={() => {
                        mutate();
                    }}
                >
                    삭제
                </TableButton>
            </TableItemContent>
            {/* modal */}
            {modalVisible && (
                <div
                    className="w-full h-full fixed top-0 left-0 z-1000 flex justify-center items-center p-5"
                    onClick={() => setModalVisible(false)}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                    {/* 위에는 그림자, 밑에는 모달 내용 */}
                    <div
                        className="min-w-5 p-5 rounded-xl flex flex-col items-start gap-6 bg-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="gap-5 flex flex-col">
                            <div className="w-full flex items-center justify-between">
                                {/* title wrap */}
                                <p className="text-xl font-medium text-black">
                                    장기 결석자 수정
                                </p>
                                <X
                                    className="cursor-pointer w-5"
                                    onClick={() => setModalVisible(false)}
                                />
                            </div>
                            {/* field wrap */}
                            <div className="w-full justify-between flex items-center text-base text-black font-medium">
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
                                    onChange={(e) => setEndDate(e.target.value)}
                                    value={endDate}
                                />
                            </div>
                            {/* 서유 적는 곳 */}
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
                        <div
                            className="w-full py-2.5 rounded-xl text-base text-white cursor-pointer font-medium bg-main flex justify-center"
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LongAbsenceItem;
