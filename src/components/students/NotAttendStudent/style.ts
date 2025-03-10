import styled from "@emotion/styled";
import {COLOR} from "../../../style/color/color.ts";

export const TableItem = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const TableItemContent = styled.p<{
  $flex: string;
}>`
  font-size: 1.6rem;
  height: 3rem;
  display: flex;
  align-items: center;
  flex: ${({ $flex }) => $flex};
  justify-content: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const DropdownWrapper = styled.div`
  flex: 7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`

export const Save = styled.button`
  padding: 0.2rem;
  border: 0.1rem ${COLOR.Green} solid;
  background: white;
  border-radius: 100rem;
  outline: none;
  transition: all 0.2s;
  &:active {
    transform: scale(0.95);
  }
`

export const Clear = styled.button`
  padding: 0.2rem;
  border: 0.1rem ${COLOR.Red} solid;
  background: white;
  border-radius: 100rem;
  outline: none;
  transition: all 0.2s;
  &:active {
    transform: scale(0.95);
  }
`