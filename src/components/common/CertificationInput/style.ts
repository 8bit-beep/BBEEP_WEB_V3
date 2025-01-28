import styled from "@emotion/styled";
import { COLOR } from "../../../style/color/color";

export const InputContainer = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;
`;

export const Button = styled.div`
  background-color: ${COLOR.Dark};
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  position: absolute;
  color: ${COLOR.White};
  right: 2%;
  top: 18%;
  cursor: pointer;
`;
