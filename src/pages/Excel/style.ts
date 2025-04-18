import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color";

interface GridProps {
  isLoading : any;
  data : any;
}

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
  display:flex;
  flex-direction:column;
  align-items:center;
}
`

export const Spacer = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  text-align:center;
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


export const Grid = styled.div<GridProps>`
  width: 100%;
  flex: 1;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 24rem;
  padding: 1rem;
  gap: 1rem;
`

export const NoContent = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: ${COLOR.Gray};
`;