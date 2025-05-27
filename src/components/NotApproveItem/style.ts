import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color";

export const TableItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TableItemContent = styled.p<{
  $flex: string;
  $notCenter?: boolean;
}>`
  font-size: 1.6rem;
  height: 4rem;
  display: flex;
  align-items: center;
  flex: ${({ $flex }) => $flex};
  justify-content: ${({ $notCenter }) => $notCenter ? "" : "center"};;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const DropdownWrapper = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`

export const ApproveButton = styled.button<{ $isApproved: boolean }>`
  padding: 0.8rem 2rem;
  border-radius: 1rem;
  background-color: ${({ $isApproved }) => $isApproved ? COLOR.Red : COLOR.Main};
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1.4rem;
`