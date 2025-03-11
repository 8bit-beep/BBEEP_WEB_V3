import styled from "@emotion/styled";
import {COLOR} from "../../style/color/color.ts";
import { keyframes } from "@emotion/react";
import {Link} from "react-router-dom";

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100svh;
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
  background: url("/assets/LoginBackGround.svg") no-repeat center;
  background-size: cover;
`;

export const FormWrap = styled(ImgWrap)`
  background-color: ${COLOR.LoginBackground};
  padding: 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: auto;
  justify-content: flex-start;
  align-items: flex-end;
  background-image: none;
`;


export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`

export const LoadingText = styled.p`
  font-size: 2rem;
`

export const Spinner = styled.div`
  border: 0.4rem solid ${COLOR.Gray};
  width: 4rem;
  height: 4rem;
  border-radius: 16rem;
  border-top: 0.4rem solid ${COLOR.Main};
  animation: ${Spin} 1s linear infinite;
`

export const Button = styled(Link)`
  text-decoration: none;
  width: 100%;
  padding: 1.2rem 0;
  text-align: center;
  font-size: 1.6rem;
  background-color: ${COLOR.Main};
  color: ${COLOR.White};
  border-radius: 0.8rem;
`