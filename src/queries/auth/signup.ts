import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useSignupPhaseStore } from "../../store/signup/useSignupPhaseStore";
import { SignupPhase } from "../../types/store/signupPhaseState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

export const useSignUpMutation = () => {
  const { signupData } = useSignupDataStore();
  const { setSignupPhase } = useSignupPhaseStore();
  const { setError } = useErrorStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/sign-up`,
        {
          email: signupData.email,
          password: signupData.password,
          role: "TEACHER",
        }
      );
      return data;
    },
    onError: (err: any) => {
      setError(err);
      setSignupPhase(SignupPhase.INFO);
    },
    onSuccess: () => {
      notification.open({
        message: "회원가입 성공",
        description: "서비스 이용을 위해 로그인 해주세요.",
      });
      navigate("/login");
    },
  });
};
