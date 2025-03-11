import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: visible;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  justify-self: flex-start;
  width: 80%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const Button = styled.div`
  background-color: #0083f0;
  color: white;
  width: 80%;
  height: 5rem;
  font-size: 2rem;
  font-weight: 900;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  align-self: center;
  cursor: pointer;
`;

export const DodamLogo = styled.img`
  width: 2rem;
`;

export const Blank = styled.div`
  width: 100%;
  height: 8rem;
`;
