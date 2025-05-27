import { useState } from 'react';
import Dropdown from '../../components/common/Dropdown';
import ThemedIcon from '../../components/common/ThemedIcon';
import * as S from './style';
import { Option } from '../../types/props/dropdownProps';
import { X } from 'lucide-react';

const LongAbsence = () => {
  const [grade, setGrade] = useState<Option>({ name: "1학년", value: "1"});
  const [cls, setCls] = useState<Option>({ name: "1반", value: "1"});
  const [num, setNum] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <S.Container>
      <S.ContentWrap>
        <S.ContentHeaderWrap>
          <S.HeaderWrap>
            <ThemedIcon src="/assets/Excluded.svg" width="2.5rem" height="2.5rem" />
            <div>
              <S.Title>장기 결석자</S.Title>
              <S.Subtitle>
                오랫동안 출석하지 않는 학생을 등록하고 확인하세요!
              </S.Subtitle>
            </div>
            <S.Spacer />
            <S.RegisterButton onClick={() => setModalVisible(true)}>장기 결석자 등록</S.RegisterButton>
          </S.HeaderWrap>
          <S.Spacer />
        </S.ContentHeaderWrap>
        <S.TableHead>
          <S.TableColumn $flex="2">이름</S.TableColumn>
          <S.TableColumn $flex="2">학번</S.TableColumn>
          <S.TableColumn $flex="5">기간</S.TableColumn>
          <S.TableColumn $flex="6" $notCenter>
            사유
          </S.TableColumn>
          <S.TableColumn $flex="1" />
        </S.TableHead>
        <S.TableContent>
          
        </S.TableContent>
      </S.ContentWrap>
      {
        modalVisible && (
          <S.ModalShadow onClick={() => setModalVisible(false)}>
            <S.ModalWrap onClick={(e) => e.stopPropagation()}>
              <S.ModalTitle><p>장기 결석자 등록</p> <X onClick={() => setModalVisible(false)} /></S.ModalTitle>
              <S.FieldWrap>
                <Dropdown value={grade} setValue={(e) => setGrade(e)} options={[{ name: "1학년", value: "1"},{ name: "2학년", value: "2"},{ name: "3학년", value: "3"}]} />
                <Dropdown value={cls} setValue={(e) => setCls(e)} options={[{ name: "1반", value: "1"},{ name: "2반", value: "2"},{ name: "3반", value: "3"},{ name: "4반", value: "4"}]} />
                <S.Input placeholder='번호' type='number' min={0} max={19} />
              </S.FieldWrap>
              <S.FieldWrap>
                <S.Input type='date' />
                -
                <S.Input type='date' />
              </S.FieldWrap>
              <S.FieldWrap>
                <S.ReasonInput type='text' placeholder='장기 결석 사유를 입력해주세요.' value={num} onChange={(e) => setNum(e.target.value)} />
              </S.FieldWrap>
              <S.Submit>등록하기</S.Submit>
            </S.ModalWrap>
          </S.ModalShadow>
        )
      }
    </S.Container>
  )
}

export default LongAbsence