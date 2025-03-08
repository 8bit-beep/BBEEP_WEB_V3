import styled from "@emotion/styled";
import {COLOR} from "../../style/color/color.ts";

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  padding-top: 7rem;
  background-color: ${COLOR.Background};
`;

export const Content = styled.div<{
  $sidebarOpen: boolean;
}>`
  width: 100%;
  height: calc(100svh - 14rem);
  padding-right: ${props => props.$sidebarOpen ? '520px' : '0'};
  position: relative;
  transition: all 300ms;
  overflow: hidden;
`;

export const CloseButton = styled.div<{
  $sidebarOpen: boolean;
}>`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 0.75rem;
  right: ${props => props.$sidebarOpen ? '532px' : '-4rem'};
  background-color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms;
  transition-delay: 75ms;
`;

export const SidebarContainer = styled.div<{
  $sidebarOpen: boolean;
}>`
  width: 100vw;
  max-width: 520px;
  height: calc(100svh - 14rem);
  position: absolute;
  top: 0;
  right: ${props => props.$sidebarOpen ? '0' : '-520px'};
  transition: all 300ms;
`;
