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
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const MenuItem = styled(Link)<{ active: boolean }>`
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  color: ${({ active }) => (active ? "#305B7D" : "#000")};
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ active }) => (active ? "#305B7D" : "transparent")};
  }

  &:hover {
    color: #305B7D;
  }
`;