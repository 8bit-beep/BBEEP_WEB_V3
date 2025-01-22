import * as S from "./style";
import BbeepLogo from "/assets/Logo.svg";

const Header = () => {
  return (
    <>
    <S.Container>
      <S.HeaderWrap>
        <img src={BbeepLogo} alt="로고" />
      </S.HeaderWrap>
    </S.Container>
    </>
  );
};

export default Header;