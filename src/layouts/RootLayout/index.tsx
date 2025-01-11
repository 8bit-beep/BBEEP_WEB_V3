import { Outlet } from "react-router-dom";
import { Container, ExceptHeader, ExceptSidebar } from "./style";
import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <ExceptHeader>
        <Sidebar />
        <ExceptSidebar>
          <Outlet />
        </ExceptSidebar>
      </ExceptHeader>
    </Container>
  );
};

export default RootLayout;
