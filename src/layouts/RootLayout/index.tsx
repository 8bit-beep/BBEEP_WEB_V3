import { Outlet } from "react-router-dom";
import * as S from "./style";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import {X} from "lucide-react";
import Sidebar from "../../components/common/Sidebar";
import {useSidebarDataStore} from "../../store/sidebar/useSidebarDataStore.ts";

const RootLayout = () => {
  const { sidebarData, setSidebarData } = useSidebarDataStore();
  
  return (
    <S.Container>
      <Header />
      <S.Content $sidebarOpen={!!sidebarData}>
        <Outlet />
        <S.CloseButton
          $sidebarOpen={!!sidebarData}
          onClick={() => setSidebarData(null)}
        >
           <X />
        </S.CloseButton>
        <S.SidebarContainer $sidebarOpen={!!sidebarData}>
          <Sidebar />
        </S.SidebarContainer>
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default RootLayout;
