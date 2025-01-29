import * as S from "./style";
import BbeepLogo from "/assets/Logo.svg";

const Header = () => {
  return (
    <>
    <S.Container>
      <S.HeaderWrap>
        <img src={BbeepLogo} alt="로고" />
      </S.HeaderWrap>

      <S.NavWrap>
        <S.NavItem>홈</S.NavItem>
        <S.NavItem>실 조회</S.NavItem>
        <S.NavItem>실 이동 관리</S.NavItem>
        <S.NavItem>결석자 조회</S.NavItem>
      </S.NavWrap>

    </S.Container>
    </>
  );
};

export default Header;