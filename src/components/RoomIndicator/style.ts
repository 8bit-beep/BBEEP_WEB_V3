import styled from "@emotion/styled";

export const IndicatorContainer = styled.div<{
  top: string | number;
  left: string | number;
}>`
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: white;
  box-shadow: 0 0 1rem 0.001rem rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 300ms;
  border-radius: 0.8rem;
  &:active {
    transform: scale(0.95);
  }
`;

export const Label = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
`;
