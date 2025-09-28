import Dropdown from "../components/common/dropdown/DropDown.tsx";
import {useState} from "react";
import {Option} from "../types/props/dropdownProps.ts";
import {monthOption} from "../constants/month/monthOption.ts";
import {useGetExcels} from "../hooks/excels/useGetExcels.ts";
import TableHeader from "../components/common/table/TableHeader.tsx";
import TableContainer from "../components/common/table/TableContainer.tsx";
import ExcelItem from "../components/ExcelItem.tsx";
import Skeleton from "../components/common/Skeleton.tsx";

const Excel = () => {
    const currentMonth = new Date().getMonth();
    const [year, setYear] = useState<Option>({name: "2025년", value: "2025"});
    const [month, setMonth] = useState<Option>({
        name: `${currentMonth + 1}월`,
        value: `${currentMonth + 1}`,
    });

    const handleYear = (option: Option) => {
        setYear(option);
    };

    const handleMonth = (option: Option) => {
        setMonth(option);
    };

    const {data, isLoading} = useGetExcels(year.value, month.value);

    return (
        <div className="w-full h-full flex justify-center items-center bg-background p-14">
            <TableContainer>
                <TableHeader
                    icon="/assets/Lab.svg"
                    title="엑셀 다운로드"
                    description="출석 기록을 다운로드 하세요!"
                >
                    <Dropdown
                        setValue={handleYear}
                        value={year}
                        options={[{name: "2025년", value: "2025"}]}
                    />
                    <Dropdown
                        setValue={handleMonth}
                        value={month}
                        options={monthOption}
                    />
                </TableHeader>
                <div
                    className="w-full flex flex-1 overflow-x-hidden overflow-y-scroll px-10 py-3"
                    style={{
                        msOverflowStyle: "scrollbar",
                        scrollbarWidth: "thin",
                    }}
                >
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {isLoading ? (
                            Array.from({length: 4}).map((_, idx) => (
                                <Skeleton
                                    key={idx}
                                    width="100%"
                                    height="24rem"
                                    borderRadius="0.8rem"
                                    margin={true}
                                />
                            ))
                        ) : data && data.length > 0 ? (
                            data.map((item) => (
                                <ExcelItem fileName={item} key={item}/>
                            ))
                        ) : (
                            <div className="w-full h-10 flex justify-center items-center text-xl text-gray">
                                엑셀 파일이 없습니다.
                            </div>
                        )}
                    </div>
                </div>
            </TableContainer>
        </div>
    );
};
export default Excel;
