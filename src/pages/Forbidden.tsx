const Forbidden = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-1">
            <img className="w-4 h-4" src="/assets/Logo.svg" alt="로고"/>
            <h1 className="text-4xl font-bold">403 Forbidden :(</h1>
            <p className="text-2xl font-medium">
                학생은 선생님용 삑을 이용할 수 없어요.
            </p>
        </div>
    );
};
export default Forbidden;
