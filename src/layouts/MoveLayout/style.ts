import styled from "@emotion/styled";
import { COLOR } from "../../constants/color/color";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 7rem);
`;

export const Sidebar = styled.div`
  width: 15rem;
  height: 18rem;
  background-color: ${COLOR.White};
  border-radius: 0 1rem 1rem 0;
  position: fixed;
  left: 0;
  top: calc(50% - 9rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SidebarItem = styled(NavLink)`
  width: 100%;
  padding: 1.4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${COLOR.Black};
  background-color: ${COLOR.White};
  font-size: 1.6rem;

  &.active {
    color: ${COLOR.White};
    background-color: ${COLOR.Dark};
  }
`;
