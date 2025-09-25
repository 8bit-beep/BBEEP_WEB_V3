import { useState } from "react";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "../../../constants/token/token.ts";
import { Link } from "react-router-dom";
import { useGetMe } from "../../../queries/user/getme.ts";
import { cookie } from "../../../utils/tokenStore.ts";

const ProfileDropdown = () => {
    const [isOpened, setIsOpened] = useState(false);
    const { me, initUser } = useGetMe();

    return (
        <div className="flex flex-col">
            {/* profile buttons */}
            <div
                className="flex gap-7 items-center"
                onClick={() => setIsOpened((prev) => !prev)}
            >
                {me ? (
                    <div className="font-medium text-xl text-black ">
                        {me?.username} 선생님
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="text-base decoration-0 text-main"
                    >
                        로그인
                    </Link>
                )}
                {/* 계정 있으면 여기로 */}
                {me && (
                    <img
                        src="/assets/ListOpen.svg"
                        alt="화살표"
                        className="w-3 cursor-pointer"
                        style={{
                            transform: isOpened
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                        }}
                    />
                )}
            </div>
            {/* Dropdown */}
            {isOpened && (
                <div
                    className="absolute flex flex-col items-center gap-4 top-12 bg-white"
                    style={{
                        boxShadow: "0px 3px 5px 0.1px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {me?.email}
                    <div
                        className="font-normal text-xs text-red cursor-pointer"
                        onClick={() => {
                            cookie.remove(ACCESS_TOKEN_KEY);
                            cookie.remove(REFRESH_TOKEN_KEY);
                            initUser();
                            setIsOpened(false);
                        }}
                    >
                        로그아웃
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
