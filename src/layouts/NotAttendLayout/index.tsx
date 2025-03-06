import { Outlet } from "react-router-dom";
import { Container, Sidebar, SidebarItem } from "./style";

const NotAttendLayout = () => {
  return (
    <Container>
      <Outlet />
      <Sidebar>
        <SidebarItem to="/not-attend" end replace>
          전체 불참자 조회
        </SidebarItem>
        <SidebarItem to="/not-attend/today" replace>
          오늘 불참자 조회
        </SidebarItem>
      </Sidebar>
    </Container>
  );
};

export default NotAttendLayout;
