import {useState} from "react";
import {useDeleteLongAbsence} from "../../queries/longAbsence/deleteLongAbsence";
import {LongAbsenceItem as LongAbsenceItemProps} from "../../types/longAbsence/longAbsenceItem";
import {parseDate} from "../../utils/parseDate";
import {useEditLongAbsence} from "../../queries/longAbsence/editLongAbsence";
import TableItemContent from "./table/TableItemContent";
import TableButton from "./table/TableButton";
import LongAbsenceModal from "./modal/LongAbsenceModal.tsx";

const LongAbsenceItem = (data: LongAbsenceItemProps ) => {
    const [modalVisible, setModalVisible] = useState(false);
    const {mutateAsync} = useEditLongAbsence(data.absenceId);
    const {mutate} = useDeleteLongAbsence(data.absenceId);

    return (
        <div className="w-full flex items-center">
            {/* main table */}
            <TableItemContent $flex={2}>
                {data.absenceId}
                {data.studentInfo.cls}
                {data.studentInfo.num > 9 ? data.studentInfo.num : `0${data.studentInfo.num}`}
            </TableItemContent>
            <TableItemContent $flex={2}>{data.studentName}</TableItemContent>
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
                <LongAbsenceModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSubmit={(form) =>
                        mutateAsync(form).then(() => {
                        })
                    }
                />
            )}
        </div>
    );
};

export default LongAbsenceItem;
