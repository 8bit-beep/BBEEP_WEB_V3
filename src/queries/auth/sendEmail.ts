import { useMutation } from "@tanstack/react-query";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import axios from "axios";
import { useErrorStore } from "../../store/global/useErrorStore";
import { notification } from "antd";
import { useVerifyPhaseStore } from "../../store/signup/useVerifyPhase";
import { VerifyPhase } from "../../types/store/verifyPhase";
import { UseSendEmailMutationProps } from "../../types/store/sendEmail";
import { useResetPasswordDataStore } from "../../store/resetPassword/useResetPasswordData";

export const useSendEmailMutation = ({
  endpoint,
}: UseSendEmailMutationProps) => {
  const { signupData } = useSignupDataStore();
  const { resetPasswordData } = useResetPasswordDataStore();
  const { setError } = useErrorStore();
  const { setVerifyPhase } = useVerifyPhaseStore();

  return useMutation({
    mutationFn: async () => {
      const email =
        endpoint === "/users/password/send"
          ? resetPasswordData.email
          : signupData.email;
      await axios.post(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        email,
      });
    },
    onError: (err: any) => {
      setError(err);
    },
    onSuccess: () => {
      notification.open({
        message: "이메일을 보냈습니다.",
      });
      endpoint === "/users/password/send"
        ? ""
        : setVerifyPhase(VerifyPhase.CODE);
    },
  });
};
