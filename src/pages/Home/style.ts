import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color.ts";

export const Map = styled.img`
  object-fit: contain;
  margin: 8rem auto;
  height: 72rem;
  padding-right: 16rem;
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