import styled from "@emotion/styled";
import { COLOR } from "../../constants/color/color";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLOR.Background};
  padding: 0 3.4rem;
`;

export const ContentWrap = styled.div`
  width: 100%;
  max-width: 140rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  overflow-y: scroll;
  padding: 3.4rem 0;
`;

export const SectionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem 5rem;
  flex-wrap: wrap;
`;

export const TableHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const TableColumn = styled.p<{ $flex: string; $notCenter?: boolean }>`
  flex: ${({ $flex }) => $flex};
  font-size: 1.6rem;
  font-weight: 600;
  color: ${COLOR.Main};
  text-align: ${({ $notCenter }) => ($notCenter ? "" : "center")};
`;

export const TableContent = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const TableItem = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const TableItemContent = styled.p<{ $flex: string; $notCenter?: boolean }>`
  font-size: 1.3rem;
  flex: ${({ $flex }) => $flex};
  text-align: ${({ $notCenter }) => ($notCenter ? "" : "center")};
`;