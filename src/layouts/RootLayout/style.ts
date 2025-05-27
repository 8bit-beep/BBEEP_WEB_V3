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


export const MemoWrap = styled.div<{ $isOpened: boolean, $isMainPage: boolean }>`
  position: fixed;
  top: ${({ $isMainPage }) => ($isMainPage ? "14rem" : "8rem")};
  left: 1rem;
  width: ${({ $isOpened }) => ($isOpened ? "64rem" : "6rem")};
  max-width: 100vw;
  height: ${({ $isOpened }) => ($isOpened ? "32rem" : "6rem")};
  border-radius: ${({ $isOpened }) => ($isOpened ? "1.2rem" : "6rem")};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 0.1rem solid #F1F1F1;
  transition: all 0.2s;
`

export const Memo = styled.textarea`
  width: 100%;
  height: 28rem;
  border-radius: 1.2rem;
  border: none;
  resize: none;
  outline: none;
  padding: 1.2rem;
  padding-top: 0;
  font-size: 1.4rem;
`

export const MemoHeader = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-size: 20px;
  }
`