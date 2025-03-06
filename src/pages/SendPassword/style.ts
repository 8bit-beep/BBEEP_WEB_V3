import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color";

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
  background-color: ${COLOR.LoginBackground};
  box-shadow: 0.4rem 0.4rem 3rem 0 rgba(0, 0, 0, 0.37);
  border-radius: 0.5rem;
  display: flex;
  gap: 7rem;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 1.2rem;
  overflow: visible;
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const FormContentWrap = styled.div`
  width: 100%;
  max-width: 35rem;
  height: 28rem;
  overflow: visible;
`;
