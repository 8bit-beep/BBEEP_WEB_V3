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
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setError } = useErrorStore();
  const { loginData, setLoginData } = useLoginDataStore();
  const { loading, setLoading } = useLoadingStore();
  const navigate = useNavigate();

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = async (loginForm: LoginForm) => {
    if (loading) return;
    try {
      setLoading(true);
      const { data } = await axios.post<BaseResponse<LoginResponse>>(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        loginForm
      );
      if (data) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
        navigate("/home");
      }
      return data;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { handleData, onSubmit };
};

export default useLogin;
