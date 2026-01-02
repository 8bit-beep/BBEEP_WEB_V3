import {Link} from "react-router-dom";
import {useAuth} from "../hooks/auth/useAuth";

const Dauth = () => {
    const {isError, isPending} = useAuth();
    return (
        <div
            className="w-full h-[100svh] flex items-center justify-center
        bg-[url('/assets/BbeepBackGround.svg')] bg-no-repeat bg-center bg-cover p-8 overflow-visible"
        >
            <div
                className="w-[848px] h-[536px] bg-white rounded-xl flex overflow-hidden"
                style={{
                    boxShadow: "0 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
                }}
            >
                {/* Left */}
                <div className="w-1/2 h-full bg-[url('/assets/LoginBackGround.svg')] bg-no-repeat bg-center"/>

                {/* Right */}
                <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center">
                    <p className="text-base font-normal text-dark text-center">
                        {isPending
                            ? "인증 중입니다..."
                            : !isError
                                ? "인증에 성공했습니다."
                                : "인증에 실패했습니다."}
                    </p>
                    {isPending ? (
                        <>
                            <div
                                className="w-16 h-16 border-4 border-gray-300 border-t-main rounded-full animate-spin"/>
                            {/* spinner (로딩)*/}
                        </>
                    ) : (
                        <button className="w-[80%] h-12 bg-main text-white rounded-md">
                            <Link to="/">메인으로</Link>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dauth;
