import { useState, useEffect } from "react";
import * as S from "./style";
import Logo from "/assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfileDropdown from "../Dropdown/ProfileDropdown";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<
    "홈" | "반별 조회" | "실 이동 관리" | "결석자 조회"
  >("홈");

  const handleLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveItem("홈");
    } else if (location.pathname === "/attends") {
      setActiveItem("반별 조회");
    } else if (location.pathname === "/shifts") {
      setActiveItem("실 이동 관리");
    } else if (location.pathname === "/not-attend") {
      setActiveItem("결석자 조회");
    }
  }, [location.pathname]);

  return (
    <S.Container>
      <S.HeaderWrap>
        <S.Logo onClick={handleLogoClick} src={Logo} />
        <S.MenuWrap>
          <S.Menu>
            <S.MenuItem to="/" active={activeItem === "홈"}>
              홈
            </S.MenuItem>
            <S.MenuItem to="/attends" active={activeItem === "반별 조회"}>
              반별 조회
            </S.MenuItem>
            <S.MenuItem to="/shifts" active={activeItem === "실 이동 관리"}>
              실 이동 관리
            </S.MenuItem>
            <S.MenuItem to="not-attend" active={activeItem === "결석자 조회"}>
              결석자 조회
            </S.MenuItem>
          </S.Menu>
        </S.MenuWrap>
        <ProfileDropdown />
      </S.HeaderWrap>
    </S.Container>
  );
};

export default Header;
