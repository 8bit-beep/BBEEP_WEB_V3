import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100vw;
  height: 71px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
`;

export const HeaderWrap = styled.div`
  width: 1020px;
  display: flex;
  align-items: center;
  margin-left: 130px;
`;

export const Logo = styled.div`
  width: 47.6px;
  height: 43.3px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 337px;
  gap: 40px;
`;

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
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
`;