import {useState} from "react";
import {X} from "lucide-react";
import {Option} from "../../../types/props/dropdownProps.ts";
import CustomDropdown from "../dropdown/DropDown.tsx";
import {CLASS_OPTIONS, GRADE_OPTIONS} from "../../../constants/school/schoolOption.ts";

interface LongAbsenceModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (form: {
        grade: number;
        cls: number;
        num: number;
        reason: string;
        startDate: string;
        endDate: string;
    }) => void;
}

const LongAbsenceModal = ({visible, onClose, onSubmit}: LongAbsenceModalProps) => {
    const [grade, setGrade] = useState<Option>({name: "1학년", value: "1"});
    const [cls, setCls] = useState<Option>({name: "1반", value: "1"});
    const [num, setNum] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reason, setReason] = useState("");

    if (!visible) return null;

    return (
        <div
            className="w-full h-full fixed top-0 left-0 z-1000 flex justify-center items-center"
            onClick={onClose}
            style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}
        >
            {/* 위에는 그림자, 밑에는 모달 내용 */}
            <div
                className="min-w-5 p-5 rounded-xl flex flex-col items-start gap-6 bg-white"
                onClick={(e) => e.stopPropagation()}
            >
                {/* 헤더 */}
                <div className="w-full flex items-center justify-between">
                    <p className="text-xl font-medium text-black">장기 결석자 등록</p>
                    <X className="cursor-pointer w-5" onClick={onClose}/>
                </div>
                {/* 입력 폼 */}
                <div className="gap-5 flex flex-col w-full">
                    <div className="flex justify-between">
                        <CustomDropdown value={grade} setValue={setGrade} options={GRADE_OPTIONS}/>
                        <CustomDropdown value={cls} setValue={setCls} options={CLASS_OPTIONS}/>
                        <input
                            className="w-[30%] px-2 py-2.5 rounded-xl"
                            placeholder="번호"
                            type="number"
                            style={{boxShadow: "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)"}}
                            min={0}
                            max={19}
                            value={num}
                            onChange={(e) => setNum(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between">
                        <input
                            type="date"
                            value={startDate}
                            style={{boxShadow: "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)"}}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="px-5 py-2.5 rounded-xl"
                        />
                        -
                        <input
                            type="date"
                            value={endDate}
                            style={{boxShadow: "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)"}}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="px-5 py-2.5 rounded-xl"
                        />
                    </div>
                    <input
                        className="w-full px-5 py-2.5 rounded-xl"
                        placeholder="장기 결석 사유를 입력해주세요."
                        style={{boxShadow: "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)"}}
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </div>
                {/* 버튼 */}
                <div
                    className="w-full py-2.5 rounded-xl text-base text-white cursor-pointer font-medium bg-main flex justify-center"
                    onClick={() => {
                        onSubmit({
                            grade: Number(grade.value),
                            cls: Number(cls.value),
                            num: Number(num),
                            reason,
                            startDate,
                            endDate,
                        });
                        onClose();
                    }}
                >
                    등록하기
                </div>
            </div>
        </div>
    );
};

export default LongAbsenceModal;
