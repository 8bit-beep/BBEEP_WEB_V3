import { useState } from "react";
import { useCreateLongAbsence } from "../queries/longAbsence/createLongAbsence";
import { useGetLongAbsenceQuery } from "../queries/longAbsence/getLongAbsence";
import TableContainer from "../components/common/table/TableContainer";
import TableHeader from "../components/common/table/TableHeader";
import TableColumn from "../components/common/table/TableColumn";
import LongAbsenceItem from "../components/common/LongAbsenceItem";
import Skeleton from "../components/common/Skeleton";
import LongAbsenceModal from "../components/common/modal/LongAbsenceModal.tsx";

const LongAbsence = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { mutateAsync } = useCreateLongAbsence();
    const { data, isLoading } = useGetLongAbsenceQuery();

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Excluded.svg"
                    title="장기 결석자"
                    description="오랫동안 출석하지 않는 학생을 등록하고 확인하세요!"
                >
                    <div
                        className="bg-main text-base text-white px-4 py-2 rounded-xl cursor-pointer"
                        onClick={() => setModalVisible(true)}
                    >
                        장기 결석자 등록
                    </div>
                </TableHeader>

                <div className="py-3 px-10 flex w-full bg-main">
                    <TableColumn $flex={2}>학번</TableColumn>
                    <TableColumn $flex={2}>이름</TableColumn>
                    <TableColumn $flex={6}>기간</TableColumn>
                    <TableColumn $flex={5} $notCenter>사유</TableColumn>
                    <TableColumn $flex={1.2}/>
                    <TableColumn $flex={1.2}/>
                </div>

                <div className="w-full flex-1 overflow-y-scroll flex flex-col gap-9 py-9 px-20">
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, idx) => (
                            <Skeleton key={idx} width="100%" height="5rem" borderRadius="0.8rem" margin />
                        ))
                    ) : data?.length ? (
                        data.map((item) => <LongAbsenceItem key={item.id} data={item} />)
                    ) : (
                        <div className="w-full h-10 flex justify-center items-center text-xl text-gray">
                            결석자가 없습니다.
                        </div>
                    )}
                </div>
            </TableContainer>

            <LongAbsenceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={(form) =>
                    mutateAsync(form).then(() => setModalVisible(false))
                }
            />
        </div>
    );
};

export default LongAbsence;
