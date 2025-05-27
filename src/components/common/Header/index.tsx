import * as S from "./style";
import Logo from "/assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import {useEffect, useState} from "react";
import {AlignJustify, X} from "lucide-react";


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  return (
    <S.Container $mobileMenu={mobileMenu}>
      <S.HeaderWrap>
        <S.Logo onClick={handleLogoClick} src={Logo} />
        <S.MenuWrap>
          <S.Menu>
            <S.MenuItem to="/" active={(location.pathname === "/").toString()}>
              홈
            </S.MenuItem>
            <S.MenuItem to="/classes" active={(location.pathname === "/classes").toString()}>
              반별 조회
            </S.MenuItem>
            <S.MenuItem to="/shifts" active={(location.pathname === "/shifts").toString()}>
              실 이동 관리
            </S.MenuItem>
            <S.MenuItem to="not-attend" active={(location.pathname === "/not-attend").toString()}>
              결석자 조회
            </S.MenuItem>
            <S.MenuItem to="excel" active={(location.pathname === "/excel").toString()}>
              엑셀 다운로드
            </S.MenuItem>
            <S.MenuItem to="attend-approve" active={(location.pathname === "/attend-approve").toString()}>
              출석 승인 현황
            </S.MenuItem>
            {/* <S.MenuItem to="long-absence" active={(location.pathname === "/long-absence").toString()}>
              장기 결석자
            </S.MenuItem> */}
          </S.Menu>
        </S.MenuWrap>
        <S.ProfileWrap>
          <ProfileDropdown />
        </S.ProfileWrap>
        <S.MobileMenu>
          {
            mobileMenu ? <X onClick={() => setMobileMenu(false)} /> : <AlignJustify onClick={() => setMobileMenu(true)} />
          }
        </S.MobileMenu>
      </S.HeaderWrap>
      {
        mobileMenu && (
          <>
            <S.MenuItem to="/" active={(location.pathname === "/").toString()}>
              홈
            </S.MenuItem>
            <S.MenuItem to="/classes" active={(location.pathname === "/classes").toString()}>
              반별 조회
            </S.MenuItem>
            <S.MenuItem to="/shifts" active={(location.pathname === "/shifts").toString()}>
              실 이동 관리
            </S.MenuItem>
            <S.MenuItem to="not-attend" active={(location.pathname === "/not-attend").toString()}>
              결석자 조회
            </S.MenuItem>
            <S.MenuItem to="excel" active={(location.pathname === "/excel").toString()}>
              엑셀 다운로드
            </S.MenuItem>
            <S.MenuItem to="attend-approve" active={(location.pathname === "/attend-approve").toString()}>
              출석 승인 현황
            </S.MenuItem>
            {/* <S.MenuItem to="long-absence" active={(location.pathname === "/long-absence").toString()}>
              장기 결석자
            </S.MenuItem> */}
          </>
        )
      }
    </S.Container>
  );
};

export default Header;
