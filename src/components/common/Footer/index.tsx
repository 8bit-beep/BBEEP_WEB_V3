import * as S from './style';
import WhiteLogo from '/assets/WhiteLogo.svg';
import PhoneIcon from '/assets/PhoneIcon.svg';
import FooterSentence from '/assets/FooterSentence.svg';

const Footer = () => {
  return (
    <S.Container>
      <S.Logo src={WhiteLogo} alt="로고" />
      <S.FooterSentence src={FooterSentence} alt="출석체크하기 좋은 방법" /> 
      <S.PhoneIcon src={PhoneIcon} alt="폰사진" />

      <S.TextWrapper>
        <S.Text>연락처</S.Text>
        <S.Text>Copyright 2023. Team 8bit All rights reserved.</S.Text>
      </S.TextWrapper>

      <S.Logo src={WhiteLogo} alt="logo" />
    </S.Container>
  )
}

export default Footer