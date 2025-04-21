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
display:flex;
align-items:center;
gap: 1rem;
@media (max-width:768px) {
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  align-self:center;
  
}
`

export const Spacer = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
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
  gap: 2rem;
`;

export const TableColumn = styled.p<{ $flex: string; $notCenter?: boolean }>`
  flex: ${({ $flex }) => $flex};
  font-size: 2rem;
  font-weight: 600;
  color: ${COLOR.White};
  text-align: ${({ $notCenter }) => ($notCenter ? "" : "center")};
  @media (max-width: 783px) {
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    display: ${(props) => (props.$flex === "4" ? "none" : props.$flex)};
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

export const TableItem = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${COLOR.White};
  text-align: center;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Approve = styled(Button)`
  background-color: ${COLOR.Main};
`;

export const Reject = styled(Button)`
  background-color: ${COLOR.Red};
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 1rem;
  flex: 2;
  justify-content: center;
`;

export const TableItemContent = styled.p<{
  $flex: string;
  $notCenter?: boolean;
}>`
  font-size: 1.6rem;
  height: 3rem;
  display: flex;
  align-items: center;
  flex: ${({ $flex }) => $flex};
  justify-content: ${({ $notCenter }) => ($notCenter ? "" : "center")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: scroll;
`;

export const NoContent = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: ${COLOR.Gray};
`;


export const Status = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  flex: 2;
  justify-content: center;
  gap: 1rem;
`;

export const StatusText = styled.p<{ $isApproved: boolean }>`
  color: ${({$isApproved})=> $isApproved ? COLOR.Main : COLOR.Red};
  font-size: 1.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
