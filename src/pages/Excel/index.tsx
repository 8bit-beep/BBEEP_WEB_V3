import ThemedIcon from "../../components/common/ThemedIcon";
import Dropdown from "../../components/common/Dropdown";
import {useState} from "react";
import {Option} from "../../types/props/dropdownProps.ts";
import * as S from "./style";
import {monthOption} from "../../constants/month/monthOption.ts";
import {useGetExcels} from "../../hooks/excels/useGetExcels.ts";
import Skeleton from "../../components/common/Skeleton";
import ExcelItem from "../../components/ExcelItem";

const Excel = () => {
  const currentMonth = new Date().getMonth();
  const [year, setYear] = useState<Option>({ name: "2025년", value: "2025" });
  const [month, setMonth] = useState<Option>({ name: `${currentMonth+1}월`, value: `${currentMonth+1}` });
  
  const handleYear = (option: Option) => {
    setYear(option);
  }
  
  const handleMonth = (option: Option) => {
    setMonth(option);
  }
  
  const { data, isLoading } = useGetExcels(year.value, month.value);
  
  return (
    <S.Container>
      <S.ContentWrap>
        <S.ContentHeaderWrap>
          <S.HeaderWrap>
            <ThemedIcon src="/assets/Lab.svg" width="2.5rem" height="2.5rem" />
            <div>
              <S.Title>엑셀 다운로드</S.Title>
              <S.Subtitle>
                출석 기록을 다운로드 하세요!
              </S.Subtitle>
            </div>
          </S.HeaderWrap>
          <S.Spacer />
          <Dropdown setValue={handleYear} value={year} options={[{ name: "2025년", value: "2025" }]} />
          <Dropdown setValue={handleMonth} value={month} options={monthOption} />
        </S.ContentHeaderWrap>
            <S.Grid>
              {
                isLoading ? Array.from({ length: 4 }).map((_, idx) => (
                  <Skeleton key={idx} width="100%" height="24rem" borderRadius="0.8rem" />
                )) : data && data.length > 0 ? data.map((item) => (
                  <ExcelItem fileName={item} key={item} />
                )) : <S.NoContent>출석 기록이 없습니다.</S.NoContent>
              }
            </S.Grid>
      </S.ContentWrap>
    </S.Container>
  )
}
export default Excel
