import { useMutation } from "@tanstack/react-query";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import axios from "axios";
import { useErrorStore } from "../../store/global/useErrorStore";
import { notification } from "antd";
import { useVerifyPhaseStore } from "../../store/signup/useVerifyPhase";
import { VerifyPhase } from "../../types/store/verifyPhase";

export const useSendEmailMutation = () => {
  const { signupData } = useSignupDataStore();
  const { setError } = useErrorStore();
  const { setVerifyPhase } = useVerifyPhaseStore();

  return useMutation({
    mutationFn: async () => {
      await axios.post(`${import.meta.env.VITE_API_URL}/email/send`, {
        email: signupData.email,
      });
    },
    onError: (err: any) => {
      setError(err);
    },
    onSuccess: () => {
      notification.open({
        message: "이메일을 보냈습니다.",
      });
      setVerifyPhase(VerifyPhase.CODE);
    },
  });
};
