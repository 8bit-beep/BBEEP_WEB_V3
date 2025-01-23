import styled from "@emotion/styled";
import { COLOR } from "../../../style/color/color";

export const InputWrap = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ $isError: boolean }>`
  width: 100%;
  height: 5rem;
  border: 0.1rem solid
    ${({ $isError }) => ($isError ? `${COLOR.Red}` : `${COLOR.Gray}`)};
  padding: 2rem;
  outline: none;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  transition: all 0.4s;
  ::placeholder {
    color: ${COLOR.Placeholder};
  }
`;

export const ConfirmButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${COLOR.White};
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  background-color: ${COLOR.Dark};
  cursor: pointer;
`;
