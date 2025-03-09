import styled from "@emotion/styled";
import {COLOR} from "../../style/color/color.ts";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1.6rem;
  overflow: scroll;
`
export const Map = styled.img`
  object-fit: contain;
  margin: 8rem auto;
  height: 72rem;
`

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
  background: ${({ $isFocused }) => $isFocused ? COLOR.Main : COLOR.White};
  font-size: 1.6rem;
  color: ${({ $isFocused }) => $isFocused ? COLOR.White : COLOR.Black};
  border-radius: 0.4rem;
  text-align: center;
`