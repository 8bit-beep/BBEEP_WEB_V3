import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import Logo from '/assets/Logo.svg';

const Header = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<"홈" | "실 조회" | "실 이동 관리" | "결석자 조회">("홈");

  // 경로에 맞춰 activeItem 업데이트
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveItem("홈");
    } else if (location.pathname === "/attends") {
      setActiveItem("실 조회");
    } else if (location.pathname === "/shifts") {
      setActiveItem("실 이동 관리");
    } else if (location.pathname === "/not-attend") {
      setActiveItem("결석자 조회");
    }
  }, [location.pathname]);

  return (
    <S.Container>
      <S.HeaderWrap>
        <S.Logo>
          <img src={Logo} alt="logo" />
        </S.Logo>

        <S.Menu>
          <S.MenuItem 
            to="/" 
            active={activeItem === "홈"}>
            홈
          </S.MenuItem>
          <S.MenuItem 
            to="/attends" 
            active={activeItem === "실 조회"}>
            실 조회
          </S.MenuItem>
          <S.MenuItem 
            to="/shifts" 
            active={activeItem === "실 이동 관리"}>
            실 이동 관리
          </S.MenuItem>
          <S.MenuItem 
            to="not-attend" 
            active={activeItem === "결석자 조회"}>
            결석자 조회
          </S.MenuItem>
        </S.Menu>
      </S.HeaderWrap>
    </S.Container>
  );
};

export default Header;