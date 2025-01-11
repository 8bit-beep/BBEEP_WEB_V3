import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: visible;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

export const InputWrap = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: visible;
`;

export const SelectWrap = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid #c9c9c9;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  overflow: visible;
  cursor: pointer;
`;

export const SelectValue = styled.p`
  font-size: 1.4rem;
`;

export const SelectList = styled.div`
  position: absolute;
  top: 5rem;
  left: -0.1rem;
  border: 0.1rem solid #c9c9c9;
  border-top: none;
  width: calc(100% + 0.2rem);
  height: 15rem;
  background-color: white;
  z-index: 10;
  border-radius: 0.8rem;
  overflow-y: scroll;
`;

export const SelectItem = styled.div<{ $isLast: boolean }>`
  width: 100%;
  height: 4.4rem;
  border-bottom: ${({ $isLast }) => ($isLast ? "0" : "0.1rem")} solid #c9c9c9;
  display: flex;
  align-items: center;
  padding: 2rem;
  font-size: 1.4rem;
`;

export const ListOpen = styled.img<{ $isOpened: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  object-position: center;
  transform: rotate(${({$isOpened})=>$isOpened ? '180deg' : '0'});
  transition: all 0.4s;
`;
