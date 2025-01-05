import { useLoadingStore } from "../../store/global/useLoadingStore";
import { LoginForm } from "../../types/auth/loginForm";
import axios from "axios";
import { useErrorStore } from "../../store/global/useErrorStore";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constants/token/token";

const useLogin = () => {
  const { loading, setLoading } = useLoadingStore();
  const { setError } = useErrorStore();

  const onSubmit = async (loginForm: LoginForm) => {
    if (loading) return;
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        loginForm
      );
      if (data) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
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
