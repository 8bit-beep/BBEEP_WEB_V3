import styled from "@emotion/styled";
import { COLOR } from "../../../style/color/color";

export const Input = styled.input<{ $isError: boolean }>`
  border: 0.1rem solid
    ${({ $isError }) => ($isError ? `${COLOR.Red}` : `${COLOR.Gray}`)};
  padding: 2rem;
  outline: none;
  font-size: 1.4rem;
  transition: all 0.4s;
  ::placeholder {
    color: ${COLOR.Placeholder};
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 5rem;
`;

export const ConfirmButton = styled.div`
  width: 20%;
  padding: 2rem;
  font-size: 1rem;
`;
