import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${COLOR.Background};
  padding: 3.4rem;
  overflow-y: scroll;
`;

export const ContentWrap = styled.div`
  width: 100%;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
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
  max-width: 72rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const TableColumn = styled.p<{ $flex: string; $notCenter?: boolean }>`
  flex: ${({ $flex }) => $flex};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${COLOR.Main};
  text-align: ${({ $notCenter }) => ($notCenter ? "" : "center")};
`;

export const TableContent = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  -ms-overflow-style: scrollbar;
  scrollbar-width: thin;
`;

export const TableItem = styled.div`
  width: 100%;
  max-width: 72rem;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const TableItemContent = styled.p<{
  $flex: string;
  $notCenter?: boolean;
}>`
  font-size: 1.3rem;
  flex: ${({ $flex }) => $flex};
  text-align: ${({ $notCenter }) => ($notCenter ? "" : "center")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const NoLog = styled.span`
  color: ${COLOR.Gray};
  font-size: 1.6rem;
`;
