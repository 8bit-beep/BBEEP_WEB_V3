import styled from "@emotion/styled";
import { COLOR } from "../../constants/color/color";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: visible;
  align-items: center;
`;

export const InputWrap = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: visible;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 4.5rem;
  align-items: center;
`;

export const CheckWrap = styled.label`
  display: flex;
  width: 13rem;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  height: 4.5rem;
  cursor: pointer;
  color: ${COLOR.check};
`;

export const CheckBox = styled.input`
  all: unset;
  width: 1.8rem;
  height: 1.8rem;
  border: 1px solid ${COLOR.check};
  border-radius: 0.2rem;

  :checked {
    background-image: url("/assets/LoginCheck.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  width: 100%;
  color: #acadae; // 사실상 일회용 컬러
  gap: 10%;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.div`
  font-size: 1.2em;
  cursor: pointer;
`;
