import LoginForm from "../components/auth/LoginForm";

const Login = () => {
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
                <div className="w-1/2 h-full bg-[url('/assets/LoginBackGround.svg')] bg-no-repeat bg-center" />

                {/* Right */}
                <div className="w-1/2 h-full bg-white flex">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
