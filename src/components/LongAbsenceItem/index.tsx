import { useState } from 'react';
import { useDeleteLongAbsence } from '../../queries/longAbsence/deleteLongAbsence';
import { LongAbsenceItem as LongAbsenceItemProps } from '../../types/longAbsence/longAbsenceItem'
import { parseDate } from '../../utils/parseDate'
import * as S from './style'
import { Option } from '../../types/props/dropdownProps';
import Dropdown from '../common/Dropdown';
import { X } from 'lucide-react';
import { useEditLongAbsence } from '../../queries/longAbsence/editLongAbsence';

const LongAbsenceItem = ({ data }: { data: LongAbsenceItemProps }) => {
  const [grade, setGrade] = useState<Option>({ name: `${data.grade}학년`, value: `${data.grade}`});
  const [cls, setCls] = useState<Option>({ name: `${data.cls}반`, value: `${data.cls}`});
  const [num, setNum] = useState(`${data.num}`);
  const [startDate, setStartDate] = useState(data.startDate);
  const [endDate, setEndDate] = useState(data.endDate);
  const [reason, setReason] = useState(data.reason);
  const [modalVisible, setModalVisible] = useState(false);
  const { mutateAsync } = useEditLongAbsence(data.id);
  const { mutate } = useDeleteLongAbsence(data.id);
      
  return (
    <S.TableItem>
      <S.TableItemContent $flex="2">
        {data.username}
      </S.TableItemContent>
      <S.TableItemContent $flex="2">{data.grade}{data.cls}{data.num}</S.TableItemContent>
      <S.TableItemContent $flex="6">{parseDate(data.startDate)}~{parseDate(data.endDate)}</S.TableItemContent>
      <S.TableItemContent $flex="5" $notCenter>
        {data.reason}
      </S.TableItemContent>
      <S.TableItemContent $flex="1.2">
        <S.EditButton onClick={() => setModalVisible(true)}>수정</S.EditButton>
      </S.TableItemContent>
      <S.TableItemContent $flex="1.2">
        <S.DeleteButton onClick={() => {mutate()}}>삭제</S.DeleteButton>
      </S.TableItemContent>
      {
        modalVisible && (
          <S.ModalShadow onClick={() => setModalVisible(false)}>
            <S.ModalWrap onClick={(e) => e.stopPropagation()}>
              <S.ModalTitle><p>장기 결석자 수정</p> <X onClick={() => setModalVisible(false)} /></S.ModalTitle>
              <S.FieldWrap>
                <Dropdown value={grade} setValue={(e) => setGrade(e)} options={[{ name: "1학년", value: "1"},{ name: "2학년", value: "2"},{ name: "3학년", value: "3"}]} />
                <Dropdown value={cls} setValue={(e) => setCls(e)} options={[{ name: "1반", value: "1"},{ name: "2반", value: "2"},{ name: "3반", value: "3"},{ name: "4반", value: "4"}]} />
                <S.Input placeholder='번호' type='number' min={0} max={19} onChange={(e) => setNum(e.target.value)} value={num} />
              </S.FieldWrap>
              <S.FieldWrap>
                <S.Input type='date' onChange={(e) => setStartDate(e.target.value)} value={startDate} />
                -
                <S.Input type='date' onChange={(e) => setEndDate(e.target.value)} value={endDate} />
              </S.FieldWrap>
              <S.FieldWrap>
                <S.ReasonInput type='text' placeholder='장기 결석 사유를 입력해주세요.' value={reason} onChange={(e) => setReason(e.target.value)} />
              </S.FieldWrap>
              <S.Submit 
                onClick={() => mutateAsync({ grade: Number(grade.value), cls: Number(cls.value), num: Number(num), reason, startDate, endDate })
                .then(() => {
                  setModalVisible(false);
                  setGrade({ name: "1학년", value: "1" });
                  setCls({ name: "1반", value: "1" });
                  setNum("");
                  setEndDate("");
                  setStartDate("");
                  setReason("");
                })}
                >
                  수정하기
                </S.Submit>
            </S.ModalWrap>
          </S.ModalShadow>
        )
      }
    </S.TableItem>
  )
}

export default LongAbsenceItem