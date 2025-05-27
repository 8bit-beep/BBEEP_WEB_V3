import styled from "@emotion/styled";
import {COLOR} from "../../../style/color/color.ts";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
  padding: 1.6rem;
`

export const SidebarHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const RoomName = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  flex: 1;
`

export const StudentsWrap = styled.div`
  width: 100%;
  flex: 1;
  background: ${COLOR.Background};
  border-radius: 1.6em;
  overflow: scroll;
  padding: 0.8rem;
`

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

export const Refetch = styled.div`
  padding: 0.8rem 1.6rem;
  color: ${COLOR.Main};
  background: ${COLOR.Background};
  border-radius: 100rem;
  transition: all 0.3s;
  font-size: 1.4rem;
  &:active {
    transform: scale(0.95);
  }
`

export const ApproveButton = styled.button<{ $isApproved: boolean }>`
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  background-color: ${({ $isApproved }) => $isApproved ? COLOR.Red : COLOR.Main};
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1.4rem;
`