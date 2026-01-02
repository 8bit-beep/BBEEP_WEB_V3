import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { cookie } from "../../utils/tokenStore";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token";
import { notification } from "antd";

/** 로그인하는 곳*/
export const useAuth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");

  const isError = !accessToken || !refreshToken;
  const isPending = !isError && (!accessToken || !refreshToken);

  useEffect(() => {
    if (!isError && accessToken && refreshToken) {
      cookie.set(ACCESS_TOKEN_KEY, accessToken);
      cookie.set(REFRESH_TOKEN_KEY, refreshToken);

      notification.open({
        message: "환영합니다!",
        description: "로그인 되었습니다.",
      });

      navigate("/");
    }
  }, []);

  return {
    isError,
    isPending,
  };
};
