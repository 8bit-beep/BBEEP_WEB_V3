import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/common/layouts/Footer.tsx";
import { ChevronLeft, NotebookIcon, X } from "lucide-react";
import Sidebar from "../components/common/layouts/Sidebar.tsx";
import { useSidebarDataStore } from "../store/sidebar/useSidebarDataStore.ts";
import { useEditMemo } from "../hooks/memo/useEditMemo.ts";
import { useEffect, useState } from "react";
import Header from "../components/common/layouts/Header.tsx";

const RootLayout = () => {
  const { sidebarData: sidebarOpen, setSidebarData } = useSidebarDataStore();
  const { memo, handleMemo } = useEditMemo();
  const [isMemoOpened, setIsMemoOpened] = useState(true);
  const location = useLocation();
  const [isMainPage, setIsMainPage] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-[100svh] pt-12 bg-background">
      <Header />
      {/* content */}
      <div
        className="w-full relative transition-all duration-300 overflow-hidden"
        style={{
          height: "calc(100svh - 8rem)",
        }}
      >
        <Outlet />
        {/* sidebar X 버튼 */}
        <div
          className="w-16 h-16 absolute top-10 bg-white rounded-full flex
          items-center justify-center transition-all duration-300 delay-75 cursor-pointer"
          style={{ right: sidebarOpen ? "532px" : "-4rem" }}
          onClick={() => setSidebarData(null)}
        >
          <X />
        </div>
        {/* sidebar container */}
        <div
          className="w-screen max-w-[520px] absolute top-0 transition-all duration-300"
          style={{ right: sidebarOpen ? "0" : "-520px" }}
        >
          <Sidebar />
        </div>
      </div>
      <Footer />
      <div
        className="fixed left-4 max-w-screen overflow-hidden flex justify-center
      items-center flex-col bg-white border border-main transition-all duration-[0.2s] cursor-pointer"
        style={{
          top: isMainPage ? "10rem" : "6rem",
          width: isMemoOpened ? "29rem" : "5rem",
          height: isMemoOpened ? "29rem" : "5rem",
          borderRadius: isMemoOpened ? "0.75rem" : "10rem",
        }}
        onClick={() => setIsMemoOpened(true)}
      >
        {isMemoOpened ? (
          <>
            {/* 메모 적는 곳 */}
            <div className="w-full h-8 px-2.5 py-0 flex justify-between items-center">
              <div className="text-2xl text-dark pl-2.5">메모사항</div>
              <ChevronLeft
                onClick={() => setIsMemoOpened(false)}
                className="w-8 h-8"
              />
            </div>
            <textarea
              className="w-full h-96 pt-4 p-5 border-none resize-none
              outline-none text-base"
              placeholder="메모사항을 입력해주세요."
              onChange={handleMemo}
              value={memo}
            />
          </>
        ) : (
          <NotebookIcon />
        )}
      </div>
    </div>
  );
};

export default RootLayout;
