import { Outlet, useLocation } from "react-router-dom";
import * as S from "./style";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import {ChevronLeft, NotebookIcon, X} from "lucide-react";
import Sidebar from "../../components/common/Sidebar";
import {useSidebarDataStore} from "../../store/sidebar/useSidebarDataStore.ts";
import { useEditMemo } from "../../hooks/memo/useEditMemo.ts";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const { sidebarData, setSidebarData } = useSidebarDataStore();
  const { memo, handleMemo } = useEditMemo();
  const [isMemoOpened, setIsMemoOpened] = useState(true);
  const location = useLocation();
  const [isMainPage, setIsMainPage] = useState(false);

  useEffect(() => {
    if(location.pathname === "/") {
      setIsMainPage(true);
    }else{
      setIsMainPage(false);
    }
  },[location.pathname]);
  
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
      <S.MemoWrap $isOpened={isMemoOpened} $isMainPage={isMainPage}>
        {
            isMemoOpened ? (
                <>
                    <S.MemoHeader>
                        <p>메모사항</p>
                        <ChevronLeft onClick={() => setIsMemoOpened(false)} />
                    </S.MemoHeader>
                    <S.Memo placeholder="메모사항을 입력해주세요." onChange={handleMemo} value={memo} />
                </>
            ) : (
                <NotebookIcon onClick={() => setIsMemoOpened(true)} />
            )
        }
      </S.MemoWrap>
    </S.Container>
  );
};

export default RootLayout;
