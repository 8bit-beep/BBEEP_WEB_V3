import styled from "@emotion/styled";
import { COLOR } from "../../../constants/color/color";

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  background-color: ${COLOR.Dark};
  text-align: center;
  font-size: 1.8rem;
  color: white;
  border-radius: 0.8rem;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.4s;
  font-weight: 600;
  &:disabled {
    background-color: ${COLOR.Gray};
    cursor: not-allowed;
  }
`;
