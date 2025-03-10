import * as S from './style.ts'
import {ExcelItemProps} from "../../types/props/ExcelItemProps.ts";
import {File} from "lucide-react";

const ExcelItem = ({ fileName }: ExcelItemProps) => {
  const date = fileName.split('attendance_')[1].split('.xlsx')[0]
  
  return (
    <S.Container>
      <S.Content>
        <File size={64} />
        <S.Date>{date}</S.Date>
      </S.Content>
      <S.Download to={`${import.meta.env.VITE_API_URL}/excel/download?date=${date}`}>다운로드</S.Download>
    </S.Container>
  )
}
export default ExcelItem
