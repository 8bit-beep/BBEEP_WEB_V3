import * as S from './style.ts'
import {ExcelItemProps} from "../../types/props/ExcelItemProps.ts";
import {useDownloadExcels} from "../../hooks/excels/useDownloadExcels.ts";

const ExcelItem = ({ fileName }: ExcelItemProps) => {
  const download = useDownloadExcels(fileName);
  
  return (
    <S.Container onClick={download}>{fileName}</S.Container>
  )
}
export default ExcelItem
