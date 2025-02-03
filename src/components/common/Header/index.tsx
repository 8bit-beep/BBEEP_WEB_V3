import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import Logo from '/assets/Logo.svg';

const Header = () => {
  const location = useLocation();
  const [Item, setItem] = useState<"홈"|"실 조회"|"실 이동 관리"|"결석자 조회">("홈");

  useEffect(() => {
    if (location.pathname === "/") {
      setItem("홈");
    } else if (location.pathname === "/class") {
      setItem("실 조회");
    } else if (location.pathname === "/class/move") {
      setItem("실 이동 관리");
    } else if (location.pathname === "/absent") {
      setItem("결석자 조회");
    }
  }, [location.pathname]);

  return (
    <S.Container>
      <S.Logo>
        <img src={Logo} alt="logo" />
      </S.Logo>

      <S.Menu>
        <S.MenuItem to="/" $active={Item === "홈"}>홈</S.MenuItem>
        <S.MenuItem to="/class" $active={Item === "실 조회"}>실 조회</S.MenuItem>
        <S.MenuItem to="/class/move" $active={Item === "실 이동 관리"}>실 이동 관리</S.MenuItem>
        <S.MenuItem to="/absent" $active={Item === "결석자 조회"}>결석자 조회</S.MenuItem>
      </S.Menu>
    </S.Container>
  );
};

export default Header