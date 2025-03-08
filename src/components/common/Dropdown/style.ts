import styled from "@emotion/styled";
import { COLOR } from "../../../style/color/color";

export const Container = styled.div`
  padding: 1rem 2rem;
  min-width: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
  box-shadow: 0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  background-color: ${COLOR.White};
  position: relative;
  cursor: pointer;
`;

export const Value = styled.p`
  color: ${COLOR.Dark};
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Arrow = styled.img<{ $isOpened: boolean }>`
  width: 1rem;
  height: 1rem;
  object-fit: contain;
  object-position: center;
  transform: rotate(${({ $isOpened }) => ($isOpened ? "180deg" : "0deg")});
  transition: transform 0.4s;
`;

export const OptionContainer = styled.div`
  width: 100%;
  max-height: 17rem;
  background-color: ${COLOR.White};
  overflow: scroll;
  border-radius: 1rem;
  position: absolute;
  left: 0;
  top: calc(100% + 1rem);
  z-index: 100;
  box-shadow: 0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05);
  -ms-overflow-style: scrollbar;
  scrollbar-width: thin;
`;

export const Option = styled.div<{ $isSelected: boolean }>`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $isSelected }) => $isSelected ? COLOR.Main : COLOR.Black};
  font-size: 1.5rem;
  font-weight: 600;
  background-color: ${({ $isSelected }) =>
    $isSelected ? COLOR.Background : COLOR.White};
`;
