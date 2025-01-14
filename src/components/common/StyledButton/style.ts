import styled from "@emotion/styled";
import { COLOR } from "../../../constants/color/color";

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  background-color: ${COLOR.tint};
  text-align: center;
  font-size: 1.8rem;
  color: white;
  border-radius: 0.8rem;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.4s;
  &:disabled {
    background-color: #c9c9c9;
    cursor: not-allowed;
  }
`;
