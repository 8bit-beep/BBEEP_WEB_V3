import * as S from "./style";
import Logo from "/assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfileDropdown from "../Dropdown/ProfileDropdown";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.HeaderWrap>
        <S.Logo onClick={handleLogoClick} src={Logo} />
        <S.MenuWrap>
          <S.Menu>
            <S.MenuItem to="/" active={location.pathname === "/"}>
              홈
            </S.MenuItem>
            <S.MenuItem to="/classes" active={location.pathname === "/classes"}>
              반별 조회
            </S.MenuItem>
            <S.MenuItem to="/shifts" active={location.pathname === "/shifts"}>
              실 이동 관리
            </S.MenuItem>
            <S.MenuItem to="not-attend" active={location.pathname === "/not-attend"}>
              결석자 조회
            </S.MenuItem>
            <S.MenuItem to="excel" active={location.pathname === "/excel"}>
              엑셀 다운로드
            </S.MenuItem>
          </S.Menu>
        </S.MenuWrap>
        <S.ProfileWrap>
          <ProfileDropdown />
        </S.ProfileWrap>
      </S.HeaderWrap>
    </S.Container>
  );
};

export default Header;
