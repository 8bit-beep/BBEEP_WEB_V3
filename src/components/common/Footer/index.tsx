import * as S from "./style";

const Footer = () => {
  return (
    <S.Container>
      <S.Logo src="/assets/WhiteLogo.svg" alt="로고" />
      <S.FooterSentence
        src="/assets/FooterSentence.svg"
        alt="출석체크하기 좋은 방법"
      />
      <S.PhoneIcon src="/assets/PhoneIcon.svg" alt="폰사진" />

      <S.TextWrapper>
        <S.Text>연락처</S.Text>
        <S.Text>Copyright 2023. Team 8bit All rights reserved.</S.Text>
      </S.TextWrapper>
    </S.Container>
  );
};

export default Footer;
