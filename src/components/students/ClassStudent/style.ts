import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`

export const Column = styled.div<{ $flex: string; }>`
  flex: ${({ $flex }) => $flex};
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

