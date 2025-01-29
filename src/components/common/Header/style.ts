import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 71px;
  background-color: pink;
  display: flex;
  align-items: center;
  position: relative;
`

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 130px;
  padding: 0 20px;
`

export const NavWrap = styled.div`
  display: flex;
  gap: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const NavItem = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
`