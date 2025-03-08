import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import { COLOR } from "../../../style/color/color";

export const Container = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.White};
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 1rem 0 0.1rem 0.001rem ${COLOR.Gray}
`;

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 160rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Menu = styled.nav`
  height: 100%;
  display: flex;
  gap: 5rem;
`;

export const MenuWrap = styled.div`
  height: 100%;
`;

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 1.6rem;
  height: 100%;
  font-weight: 400;
  text-decoration: none;
  color: ${COLOR.Black};
  cursor: pointer;
  padding: 2.5rem 1rem 0 1rem;
  border-bottom: ${({ active })=> active ? "2px" : "0px"} solid ${COLOR.Main};
`;
