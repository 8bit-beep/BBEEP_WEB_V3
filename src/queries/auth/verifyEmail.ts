import { useMutation } from "@tanstack/react-query";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import axios from "axios";
import { useErrorStore } from "../../store/global/useErrorStore";
import { notification } from "antd";
import { useCodeCertifiedStore } from "../../store/signup/useCodeCertified";

export const useVerifyEmailMutation = () => {
  const { signupData } = useSignupDataStore();
  const { setIsCodeCertified } = useCodeCertifiedStore();
  const { setError } = useErrorStore();
  return useMutation({
    mutationFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/email/verify`,
        {
          params: {
            email: signupData.email,
            code: signupData.code,
          },
          headers: { "Content-Type": "application/json", 'ngrok-skip-browser-warning': '69420', },
        }
      );
      return data;
    },
    onError: (err: any) => {
      setError(err);
      notification.open({
        message: "이메일 인증에 실패했습니다.",
      });
    },
    onSuccess: () => {
      setIsCodeCertified(true);
      notification.open({
        message: "이메일 인증에 성공했습니다.",
      });
    },
  });
};
