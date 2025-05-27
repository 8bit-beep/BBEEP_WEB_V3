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
  max-width: 100rem;
  height: 100%;
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

export const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLOR.Black};
  @media (max-width:768px) {
    font-size:1.6rem;
  }
  @media  (max-width:714px) {
    font-size:1.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${COLOR.Black};
  @media (max-width:768px) {
    display:none;
  }
`;

export const TableHead = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  background-color: ${COLOR.Main};
  display: flex;
`;

export const TableColumn = styled.p<{ $flex: string; $notCenter?: boolean }>`
  font-size: 2rem;
  font-weight: 600;
  color: ${COLOR.White};
  text-align: ${({ $notCenter }) => ($notCenter ? "" : "center")};
  flex: ${({ $flex }) => $flex};
  @media (max-width:768px) {
    font-size:1.6rem;
  }
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

export const Spacer = styled.div`
  flex: 1;
`

export const RegisterButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: ${COLOR.Main};
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
  background-color: ${COLOR.Main};
  border-radius: 1rem;
  border: none;
  outline: none;
  font-size: 1.4rem;
`

