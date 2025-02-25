import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLOR } from '../../../style/color/color';

export const Container = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  background-color: ${COLOR.White};
  box-shadow: 0px 4px 10px ${COLOR.Black};
  padding: 0 20px;
`

export const HeaderWrap = styled.div`
  display: flex;
  margin-left: 125px;

`

export const Logo = styled.div`
  cursor: pointer;
`

export const Menu = styled.nav`

`

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  color: ${COLOR.Black};
  cursor: pointer;
  position: relative;
  padding-bottom: 5px;

  &::after {
    content: '';
    position: absolute;
    top: 46px;
    left: 50%;
    width: 30px;
    height: 2px;
    border-radius: 5px;
    background-color: ${({ active }) => (active ? '#305B7D' : 'transparent')};
    transform: translateX(-50%);
  }
`