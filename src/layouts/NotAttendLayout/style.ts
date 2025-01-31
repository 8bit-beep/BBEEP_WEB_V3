import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.Background};
  padding: 3.4rem 0;
`;

export const Sidebar = styled.div`
  width: 15rem;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLOR.White};
  border-radius: 0 1rem 1rem 0;
  position: fixed;
  top: calc(50% - 9rem);
  left: 0;
`

export const SidebarItem = styled(NavLink)`
  width: 100%;
  padding: 1.2rem 0;
  background-color: ${COLOR.White};
  color: ${COLOR.Black};
  cursor: pointer;
  text-align: center;
  font-size: 1.6rem;
  text-decoration: none;
  &.active {
    color: ${COLOR.White};
    background-color: ${COLOR.Dark};
  }
`;