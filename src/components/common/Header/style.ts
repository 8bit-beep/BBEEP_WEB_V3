import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { COLOR } from "../../../style/color/color";

export const Container = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.White};
  box-shadow: 0px 4px 10px ${COLOR.Black};
  padding: 0 20px;
`;

export const HeaderWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 5rem;
`;

export const MenuWrap = styled.div``;

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: none;
  color: ${COLOR.Black};
  cursor: pointer;
  padding: 0 1rem;
  padding-bottom: 2px;
  border-bottom: ${({ active })=> active ? "2px" : "0px"} solid ${COLOR.Main};
`;
