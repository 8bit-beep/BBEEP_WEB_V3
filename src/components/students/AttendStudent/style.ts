import styled from "@emotion/styled";
import {COLOR} from "../../../style/color/color.ts";

export const Container = styled.div`
  width: 100%;
  padding: 1.4rem;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 0.8rem;
  gap: 0.8rem;
`

export const StudentId = styled.p`
  font-size: 1.4rem;
  color: ${COLOR.Gray};
`

export const StudentName = styled.p`
  font-size: 1.8rem;
`

export const Spacer = styled.div`
  flex: 1;
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