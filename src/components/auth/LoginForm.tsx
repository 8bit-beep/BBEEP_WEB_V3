import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="w-full h-full flex flex-col gap-5 overflow-visible items-center justify-around">
            <img className="w-32" src="/assets/Logo.svg" />
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="text-2xl">로그인 하기</div>
                <Link
                    className="w-[80%] h-20 text-white flex gap-4 justify-center items-center rounded-xl self-center cursor-pointer decoration-none"
                    to={`https://dauth.b1nd.com/login?client_id=${
                        import.meta.env.VITE_DAUTH_CLIENT_ID
                    }&redirect_uri=https://beep.cher1shrxd.me/callback/dauth`}
                >
                    <p className="text-2xl font-bold">도담도담으로 로그인</p>
                    <img className="w-8" src="/assets/DodamLogo.svg" />
                </Link>
            </div>
            <div className="w-full h-32" />
        </div>
    );
};

export default LoginForm;
