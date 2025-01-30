import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: yellow;
  display: flex;
  align-items: center;
  position: relative;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 130px;
  padding: 0 20px;
`;

export const NavWrap = styled.div`
  display: flex;
  gap: 40px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavItem = styled.div<{ selected: boolean }>`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  position: relative; /* absolute를 relative로 변경 */
  padding-bottom: 5px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ selected }) => (selected ? "30px" : "0")};
    height: 2px;
    background-color: #305B7D;
    border-radius: 5px;
    ${({ selected }) => !selected && "display: none"}
  }
`;