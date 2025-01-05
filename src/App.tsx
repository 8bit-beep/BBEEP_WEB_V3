import { useEffect } from "react";
import Router from "./components/Router";
import { useErrorStore } from "./store/global/useErrorStore";
import { notification } from "antd";

const App = () => {
  const { error, setError } = useErrorStore();

  useEffect(() => {
    if (!error) return;
    switch (error.response.data.message) {
      case "wrong password":
        notification.open({
          message: "비밀번호가 틀립니다.",
        });
        break;
      case "user not found":
        notification.open({
          message: "존재하지 않는 유저입니다.",
        });
        break;
      default:
        notification.open({
          message: "네트워크 에러",
        });
    }
    setError(null);
  }, [error]);

  return <Router />;
};

export default App;
