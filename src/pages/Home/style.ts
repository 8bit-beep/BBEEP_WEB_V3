import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color.ts";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

export const MapWrap = styled.div<{ scale: number }>`
  display: flex;
  align-items: center;
  position:relative;
  padding: 1.6rem;
  transform: ${({ scale }) => (`scale(${1 - (0.1 * scale)})`)};
  transform-origin: ${({ scale }) => (`${100 * scale}px`)}; 
  width: 100%;
`

export const Map = styled.img`
  object-fit: contain;
  margin: 8rem auto;
  height: 72rem;
  padding-right: 16rem;
`;

export const ToggleWrap = styled.div`
  width: 18rem;
  padding: 0.4rem;
  display: flex;
  background: ${COLOR.White};
  border-radius: 0.8rem;
  position: fixed;
  top: 8rem;
  left: 1rem;
  gap: 0.4rem;
  border: 0.1rem solid ${COLOR.Main};
`

export const ToggleItem = styled.div<{ $isFocused: boolean }>`
  flex: 1;
  padding: 0.8rem 0;
  background: ${({ $isFocused }) => ($isFocused ? COLOR.Main : COLOR.White)};
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ $isFocused }) => ($isFocused ? COLOR.White : COLOR.Black)};
  border-radius: 0.4rem;
  text-align: center;
`;

export const ConfirmAttend = styled.button`
  width: 18rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLOR.Main};
  background: ${COLOR.Main};
  text-align: center;
  position: fixed;
  top: 8rem;
  left: 20rem;
  color: ${COLOR.White};
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    background: ${COLOR.Gray};
    border: 0.1rem solid ${COLOR.Gray};
  }
`

export const MemoWrap = styled.div<{ $isOpened: boolean }>`
  position: fixed;
  top: 14rem;
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

export const ScaleControllerWrap = styled.div`
  width: 7rem;
  height: 14rem;
  border: 0.1rem solid #f1f1f1;
  border-radius: 8px;
  background-color: white;
  position: fixed;
  right: 2rem;
  bottom: 9rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
`