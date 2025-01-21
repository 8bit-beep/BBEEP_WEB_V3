import { Outlet } from "react-router-dom";
import { Container, Sidebar, SidebarItem } from "./style";

const MoveLayout = () => {
  return (
    <Container>
      <Outlet />
      <Sidebar>
        <SidebarItem to="/move" end>학번 조회하기</SidebarItem>
        <SidebarItem to="/move/approved">승인 명단 조회하기</SidebarItem>
      </Sidebar>
    </Container>
  );
};

export default MoveLayout;
