import styled from "@emotion/styled";
import { COLOR } from "../../constants/color/color";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/assets/BbeepBackGround.svg") no-repeat center;
  background-size: cover;
  padding: 2rem;
  overflow: visible;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 100rem;
  height: 62rem;
  background-color: white;
  box-shadow: 0.4rem 0.4rem 3rem 0 rgba(0, 0, 0, 0.37);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  overflow: visible;
`;

export const ImgWrap = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${COLOR.main};
`;

export const FormWrap = styled(ImgWrap)`
  background-color: ${COLOR.soft};
  padding: 3.2rem 1.2rem;
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.p`
  font-family: "SBAggroB";
  font-size: 8rem;
  color: ${COLOR.tint};
`;

export const RouteName = styled.p`
  font-size: 1.5rem;
  color: ${COLOR.tint};
`;
