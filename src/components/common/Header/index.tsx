import * as S from "./style";
import Logo from "/assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { COLOR } from "../../../style/color/color";
import { Link } from "react-router-dom";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { to: "/", label: "홈" },
        { to: "/classes", label: "반별 조회" },
        { to: "/shifts", label: "실 이동 관리" },
        { to: "/not-attend", label: "결석자 조회" },
        { to: "/excel", label: "엑셀 다운로드" },
        { to: "/attend-approve", label: "출석 승인 현황" },
        { to: "/long-absence", label: "장기 결석자" },
    ];

    const handleLogoClick = () => {
        navigate("/");
    };

    useEffect(() => {
        setMobileMenu(false);
    }, [location.pathname]);

    return (
        <div
            className="w-full h-18 flex flex-col justify-center items-center bg-white fixed top-0 z-100 transition-all duration-[0.2s]"
            style={{
                padding: mobileMenu ? "1rem 4rem" : "0 4.5rem",
                alignItems: mobileMenu ? "start" : "center",
                boxShadow: "box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.07);",
            }}
        >
            {/* header wrapper */}
            <div className="w-full h-full max-w-[160rem] flex justify-between items-center">
                <img
                    className="h-11 cursor-pointer"
                    onClick={handleLogoClick}
                    src={Logo}
                />
                <div className="h-full flex items-center">
                    {/* nav list */}
                    <nav className="h-full gap-10 hidden xl:flex">
                        {menuItems.map((i) => (
                            <Link
                                className="text-base h-full font-normal flex items-center text-black mx-4"
                                style={{
                                    borderBottom:
                                        location.pathname === i.to
                                            ? `2px solid ${COLOR.Main}`
                                            : `0px solid ${COLOR.Main}`,
                                }}
                                to={i.to}
                            >
                                {i.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                {/* profile wrap */}
                <div className="flex items-center justify-end">
                    <ProfileDropdown />
                </div>
                <S.MobileMenu>
                    {mobileMenu ? (
                        <X onClick={() => setMobileMenu(false)} />
                    ) : (
                        <AlignJustify onClick={() => setMobileMenu(true)} />
                    )}
                </S.MobileMenu>
            </div>
            {mobileMenu && (
                <>
                    <S.MenuItem
                        to="/"
                        active={(location.pathname === "/").toString()}
                    >
                        홈
                    </S.MenuItem>
                    <S.MenuItem
                        to="/classes"
                        active={(location.pathname === "/classes").toString()}
                    >
                        반별 조회
                    </S.MenuItem>
                    <S.MenuItem
                        to="/shifts"
                        active={(location.pathname === "/shifts").toString()}
                    >
                        실 이동 관리
                    </S.MenuItem>
                    <S.MenuItem
                        to="not-attend"
                        active={(
                            location.pathname === "/not-attend"
                        ).toString()}
                    >
                        결석자 조회
                    </S.MenuItem>
                    <S.MenuItem
                        to="excel"
                        active={(location.pathname === "/excel").toString()}
                    >
                        엑셀 다운로드
                    </S.MenuItem>
                    <S.MenuItem
                        to="attend-approve"
                        active={(
                            location.pathname === "/attend-approve"
                        ).toString()}
                    >
                        출석 승인 현황
                    </S.MenuItem>
                    <S.MenuItem
                        to="long-absence"
                        active={(
                            location.pathname === "/long-absence"
                        ).toString()}
                    >
                        장기 결석자
                    </S.MenuItem>
                </>
            )}
        </div>
    );
};

export default Header;
