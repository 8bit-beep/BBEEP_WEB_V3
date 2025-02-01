import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100vw;
  height: 71px;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 130px;
`

export const Menu = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  margin-left: 338px;
`

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 17px;
  text-decoration: none;
  color: black;
`