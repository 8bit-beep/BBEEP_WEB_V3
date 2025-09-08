import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="w-full h-full flex flex-col gap-5 overflow-visible items-center justify-around rounded-xl">
            {/* Logo Section */}
            <div className="flex items-center gap-1 flex-col">
                <img className="w-14" src="/assets/Logo.svg" />
                <p className="text-base font-normal text-main text-center">
                    인원체크를 간편하게
                </p>
            </div>
            {/* Button Section */}
            <button className="w-[80%] flex flex-col justify-center items-center gap-4 bg-[#0083F0] rounded-xl">
                <Link
                    className="w-full py-3 text-white flex gap-4 justify-center items-center rounded-xl self-center cursor-pointer decoration-none"
                    to={`https://dauth.b1nd.com/login?client_id=${
                        import.meta.env.VITE_DAUTH_CLIENT_ID
                    }&redirect_uri=https://beep.cher1shrxd.me/callback/dauth`}
                >
                    <p className="text-base font-semibold text-white">
                        도담도담으로 로그인
                    </p>
                    <img className="w-5" src="/assets/DodamLogo.svg" />
                </Link>
            </button>
            <div className="w-full h-5" />
        </div>
    );
};

export default LoginForm;
