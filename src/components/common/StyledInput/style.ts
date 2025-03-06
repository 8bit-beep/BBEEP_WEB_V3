import styled from "@emotion/styled";
import { COLOR } from "../../../style/color/color";

export const Input = styled.input<{ $isError: boolean }>`
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
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
