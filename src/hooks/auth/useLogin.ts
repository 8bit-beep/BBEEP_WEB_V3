import { useLoadingStore } from "../../store/global/useLoadingStore";
import { LoginForm } from "../../types/auth/loginForm";
import axios from "axios";
import { useErrorStore } from "../../store/global/useErrorStore";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token";
import { BaseResponse } from "../../types/response/baseResponse";
import { LoginResponse } from "../../types/response/loginResponse";
import { useLoginDataStore } from "../../store/login/useLoginDataStore";
import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const useLogin = () => {
  const { setError } = useErrorStore();
  const { loginData, setLoginData } = useLoginDataStore();
  const { loading, setLoading } = useLoadingStore();
  const navigate = useNavigate();

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(loginData);
    }
  };

  useEffect(() => {
    return () => {
      setError("");
    };
  }, [setError]);

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = async (loginData: LoginForm) => {
    if (loading) return;
    try {
      setLoading(true);
      const { data } = await axios.post<BaseResponse<LoginResponse>>(
        `${import.meta.env.VITE_API_URL}/auth/sign-in`,
        loginData
      );
      if (data) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
        navigate("/");
        notification.open({
          message: "로그인 성공",
        });
      }
      return data;
    } catch (err: any) {
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { handleData, onSubmit, activeEnter };
};

export default useLogin;
