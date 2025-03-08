import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.Background};
  padding: 3.4rem;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100rem;
  background-color: ${COLOR.White};
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ContentHeaderWrap = styled.div`
  width: 100%;
  padding: 2.5rem 8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLOR.Black};
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${COLOR.Black};
`;

export const TableHead = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  background-color: ${COLOR.Dark};
  display: flex;
  gap: 2rem;
`;

export const TableColumn = styled.p<{ $flex: string; $notCenter?: boolean }>`
  flex: ${({ $flex }) => $flex};
  font-size: 2rem;
  font-weight: 600;
  color: ${COLOR.White};
  text-align: ${({ $notCenter }) => ($notCenter ? "" : "center")};
`;

export const TableContent = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  -ms-overflow-style: scrollbar;
  scrollbar-width: thin;
  padding: 2.2rem 5rem;
`;


export const ListGap = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

export const NoContent = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${COLOR.Gray};
`