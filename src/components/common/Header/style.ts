import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { COLOR } from "../../../style/color/color";

interface BottombarProp {
  location: string;
}
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
  position: relative;
`;

export const MenuWrap = styled.div``;

export const BottomBar = styled.div<BottombarProp>`
  position: absolute;
  width: 3rem;
  height: 0.3rem;
  background-color: ${COLOR.Main};
  border-radius: 2rem;
  left: ${(props) =>
    props.location === "/"
      ? "34.5%"
      : props.location === "/attends"
      ? "40%"
      : props.location === "/shifts"
      ? "47.5%"
      : "56.25%"};
  top: 6.7rem;
`;

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: none;
  color: ${COLOR.Black};
  cursor: pointer;
  position: relative;
`;
