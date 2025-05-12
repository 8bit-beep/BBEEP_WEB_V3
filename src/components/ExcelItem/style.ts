import styled from "@emotion/styled";
import {COLOR} from "../../style/color/color.ts";

export const Container = styled.div`
  width: 100%;
  height: 24rem;
  border: 0.1rem solid ${COLOR.Gray};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.4rem;
`

export const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
`

export const Date = styled.p`
  font-size: 2rem;
`

export const Download = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  font-size: 1.4rem;
  color: ${COLOR.White};
  background-color: ${COLOR.Main};
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-decoration: none;
`