import { useMutation } from "@tanstack/react-query";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import axios from "axios";
import { useErrorStore } from "../../store/global/useErrorStore";
import { notification } from "antd";

export const useSendEmailMutation = () => {
  const { signupData } = useSignupDataStore();
  const { setError } = useErrorStore();

  return useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/email/send`,
        { email: signupData.email }
      );
      return data;
    },
    onError: (err: any) => {
      setError(err);
    },
    onSuccess: () => {
      notification.open({
        message: "이메일을 보냈습니다.",
      });
    },
  });
};
