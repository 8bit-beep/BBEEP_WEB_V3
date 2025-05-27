import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import { COLOR } from "../../../style/color/color";

export const Container = styled.header<{ $mobileMenu: boolean }>`
  width: 100%;
  height: ${({ $mobileMenu }) => $mobileMenu ? "40rem" : "7rem"};
  padding: ${({ $mobileMenu }) => $mobileMenu ? "1rem" : "0"} 4rem;
  display: flex;
  flex-direction: column;
  align-items: ${({ $mobileMenu }) => $mobileMenu ? "start" : "center"};
  justify-content: center;
  background-color: ${COLOR.White};
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 1rem 0 0.1rem 0.001rem ${COLOR.Gray};
  transition: all 0.2s;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 160rem;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 5rem;
  margin-right: 9rem;
`;

export const Menu = styled.nav`
  height: 100%;
  gap: 2rem;
  display: flex;
  @media (max-width: 80rem) {
    display: none;
  }
`;

export const MenuWrap = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled(Link)<{ active: string }>`
  font-size: 1.6rem;
  height: 100%;
  font-weight: 400;
  text-decoration: none;
  color: ${COLOR.Black};
  cursor: pointer;
  padding-top: 2.5rem;
  margin: 0 1rem;
  border-bottom: ${({ active })=> active === "true" ? "2px" : "0px"} solid ${COLOR.Main};
`;

export const ProfileWrap = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 80rem) {
    display: flex;
  }
`
