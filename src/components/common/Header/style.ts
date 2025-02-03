import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100vw;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
`

export const Logo = styled.div`

`

export const Menu = styled.nav`

`

export const MenuItem = styled(Link)<{ active: boolean }>`

`