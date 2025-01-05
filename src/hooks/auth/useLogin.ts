import { useLoadingStore } from "../../store/global/useLoadingStore";
import { LoginForm } from "../../types/auth/loginForm";
import axios from "axios";
import { useErrorStore } from "../../store/global/useErrorStore";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constants/token/token";
import { BaseResponse } from "../../types/response/baseResponse";
import { LoginResponse } from "../../types/response/loginResponse";

const useLogin = () => {
  const { loading, setLoading } = useLoadingStore();
  const { setError } = useErrorStore();

  const onSubmit = async (loginForm: LoginForm) => {
    if (loading) return;
    try {
      setLoading(true);
      const { data } = await axios.post<BaseResponse<LoginResponse>>(
        `${import.meta.env.VITE_API_URL}/auth/sign-in`,
        loginForm
      );
      if (data) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
      }
      return data;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return onSubmit;
};

export default useLogin;
