import Logo from "/assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { COLOR } from "../../../style/color/color";
import { Link } from "react-router-dom";
import ProfileDropdown from "../Dropdown/ProfileDropDown";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {to: "/", label: "홈"},
        {to: "/attend", label: "출석 조회"},
        {to: "/shifts", label: "실 이동 관리"},
        {to: "/not-attend", label: "결석자 조회"},
        {to: "/excel", label: "엑셀 다운로드"},
        {to: "/attend-approve", label: "출석 승인 현황"},
        {to: "/long-absence", label: "장기 결석자"},
    ];

    const handleLogoClick = () => {
        navigate("/");
    };

    useEffect(() => {
        setMobileMenu(false);
    }, [location.pathname]);

    return (
        <header
            className="w-full h-18 flex flex-col justify-center items-center bg-white fixed top-0 z-38 transition-all duration-[0.2s]"
            style={{
                padding: mobileMenu ? "1rem 3rem" : "0 3rem",
                height: mobileMenu ? "23rem" : "4.5rem",
                alignItems: mobileMenu ? "start" : "center",
                boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.07)",
            }}
        >
            {/* header wrapper - 모바일 아님, 웹*/}
            <div className="w-full h-full max-w-[160rem] flex justify-between items-center">
                {/*logo */}
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
                                className="text-base h-full font-normal flex items-center mx-4"
                                style={{
                                    borderBottom:
                                        location.pathname === i.to
                                            ? `2px solid ${COLOR.Main}`
                                            : `0px solid ${COLOR.Main}`,
                                    color:
                                        location.pathname === i.to
                                            ? COLOR.Main
                                            : COLOR.Black,
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
                    <ProfileDropdown/>
                </div>
                <div className="flex xl:hidden">
                    {mobileMenu ? (
                        <X onClick={() => setMobileMenu(false)}/>
                    ) : (
                        <AlignJustify onClick={() => setMobileMenu(true)}/>
                    )}
                </div>
            </div>
            {/* 모바일 메뉴 or 태블릿일 때 */}
            {mobileMenu && (
                <>
                    {menuItems.map((i) => (
                        <Link
                            to={i.to}
                            style={{
                                borderBottom:
                                    location.pathname === i.to
                                        ? `2px solid ${COLOR.Main}`
                                        : `0px solid ${COLOR.Main}`,
                                color:
                                    location.pathname === i.to
                                        ? COLOR.Main
                                        : COLOR.Black,
                                marginTop: mobileMenu ? "1rem" : undefined,
                            }}
                        >
                            {i.label}
                        </Link>
                    ))}
                </>
            )}
        </header>
    );
};

export default Header;
