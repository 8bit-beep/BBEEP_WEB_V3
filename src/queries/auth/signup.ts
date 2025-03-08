import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useSignupPhaseStore } from "../../store/signup/useSignupPhaseStore";
import { SignupPhase } from "../../types/store/signupPhaseState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useCodeCertifiedStore } from "../../store/signup/useCodeCertified";

export const useSignUpMutation = () => {
  const { signupData } = useSignupDataStore();
  const { setSignupPhase } = useSignupPhaseStore();
  const { setError } = useErrorStore();
  const navigate = useNavigate();
  const { setIsCodeCertified } = useCodeCertifiedStore();
  return useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/sign-up`,
        {
          email: signupData.email,
          password: signupData.password,
          username: signupData.name,
          role: "TEACHER",
          grade: 0,
          cls: 0,
          num: 0,
          fixedRoom: "NOTFOUND",
        }
      );
      return data;
    },
    onError: (err: never) => {
      setError(err);
      notification.open({
        message: "오류가 발생했습니다.",
      });
    },
    onSuccess: () => {
      setIsCodeCertified(false);
      setSignupPhase(SignupPhase.EMAIL);
      notification.open({
        message: "회원가입 성공",
        description: "서비스 이용을 위해 로그인 해주세요.",
      });
      navigate("/login");
    },
  });
};
