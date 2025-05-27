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

export const DeleteButton = styled.button`
  padding: 0.8rem 1.4rem;
  border-radius: 1rem;
  background-color: ${COLOR.Red};
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1.4rem;
`

export const EditButton = styled.button`
  padding: 0.8rem 1.4rem;
  border-radius: 1rem;
  background-color: ${COLOR.Serve};
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1.4rem;
`

export const ModalShadow = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const ModalWrap = styled.div`
  width: 100%;
  max-width: 40rem;
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`

export const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > * {
    font-size: 2rem;
  }
`

export const FieldWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
`

export const Input = styled.input`
  font-size: 1.6rem;
  min-width: 8rem;
  border: none;
  box-shadow: 0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  outline: none;
`

export const ReasonInput = styled(Input)`
  min-width: 100%;
`

export const Submit = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  color: white;
  background-color: ${COLOR.Serve};
  border-radius: 1rem;
  border: none;
  outline: none;
  font-size: 1.4rem;
`

