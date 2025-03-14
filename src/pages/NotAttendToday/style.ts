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
  align-self:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
}
`

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${COLOR.Black};
  @media (max-width:768px) {
    font-size:1.6rem;
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
  background-color: ${COLOR.Dark};
  display: flex;
  justify-content:space-around;
`;

export const TableColumn = styled.p<{ $flex: string; $notCenter?: boolean }>`
  font-size: 2rem;
  font-weight: 600;
  color: ${COLOR.White};
  text-align: ${({ $notCenter }) => ($notCenter ? "" : "center")};
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



export const NoContent = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: ${COLOR.Gray};
`;