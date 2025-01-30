import { useState } from "react";
import * as S from "./style";
import BbeepLogo from "/assets/Logo.svg";

const navItems = ["홈", "실 조회", "실 이동 관리", "결석자 조회"];

const Header = () => {
  const [activeTab, setActiveTab] = useState("홈");

  return (
    <S.Container>
      <S.HeaderWrap>
        <img src={BbeepLogo} alt="로고" />
      </S.HeaderWrap>

      <S.NavWrap>
        {navItems.map((item) => (
          <S.NavItem
            key={item}
            selected={activeTab === item}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </S.NavItem>
        ))}
      </S.NavWrap>
    </S.Container>
  );
};

export default Header;