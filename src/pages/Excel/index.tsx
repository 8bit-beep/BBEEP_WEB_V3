import ThemedIcon from "../../components/common/ThemedIcon";
import Dropdown from "../../components/common/Dropdown/DropDown.tsx";
import { useState } from "react";
import { Option } from "../../types/props/dropdownProps.ts";
import * as S from "./style";
import { monthOption } from "../../constants/month/monthOption.ts";
import { useGetExcels } from "../../hooks/excels/useGetExcels.ts";
import Skeleton from "../../components/common/Skeleton";
import ExcelItem from "../../components/ExcelItem";
import TableHeader from "../../components/common/TableHeader.tsx";
import TableContainer from "../../components/common/Table/TableContainer.tsx";

const Excel = () => {
    const currentMonth = new Date().getMonth();
    const [year, setYear] = useState<Option>({ name: "2025년", value: "2025" });
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

    const { data, isLoading } = useGetExcels(year.value, month.value);

    return (
        <S.Container>
            <TableContainer>
                <TableHeader
                    icon="/assets/Lab.svg"
                    title="엑셀 다운로드"
                    description="출석 기록을 다운로드 하세요!"
                >
                    <Dropdown
                        setValue={handleYear}
                        value={year}
                        options={[{ name: "2025년", value: "2025" }]}
                    />
                    <Dropdown
                        setValue={handleMonth}
                        value={month}
                        options={monthOption}
                    />
                </TableHeader>
                <S.GridWrap>
                    <S.Grid>
                        {isLoading ? (
                            Array.from({ length: 4 }).map((_, idx) => (
                                <Skeleton
                                    key={idx}
                                    width="100%"
                                    height="24rem"
                                    borderRadius="0.8rem"
                                />
                            ))
                        ) : data && data.length > 0 ? (
                            data.map((item) => (
                                <ExcelItem fileName={item} key={item} />
                            ))
                        ) : (
                            <S.NoContent>출석 기록이 없습니다.</S.NoContent>
                        )}
                    </S.Grid>
                </S.GridWrap>
            </TableContainer>
        </S.Container>
    );
};
export default Excel;
