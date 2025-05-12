import * as S from './style.ts'
import {ExcelItemProps} from "../../types/props/ExcelItemProps.ts";
import {File} from "lucide-react";
import { useDownloadExcel } from '../../hooks/excels/useDownloadExcel.ts';

const ExcelItem = ({ fileName }: ExcelItemProps) => {
  const date = fileName.split('attendance_')[1].split('.xlsx')[0];
  const getUrl = useDownloadExcel(date);
  
  return (
    <S.Container>
      <S.Content>
        <File size={64} />
        <S.Date>{date}</S.Date>
      </S.Content>
      <S.Download onClick={getUrl}>다운로드</S.Download>
    </S.Container>
  )
}
export default ExcelItem
