import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent } from "react";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useLoadingStore } from "../../store/global/useLoadingStore";
import { useSignupPhaseStore } from "../../store/signup/useSignupPhaseStore";
import { SignupPhase } from "../../types/store/signupPhaseState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const useSignup = () => {
  const { signupData, setSignupData } = useSignupDataStore();
  const { setSignupPhase } = useSignupPhaseStore();
  const { setError } = useErrorStore();
  const { loading, setLoading } = useLoadingStore();
  const navigate = useNavigate();

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/sign-up`,
        signupData
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

  const onSubmit = async () => {
    if (loading) return;
    setLoading(mutation.isPending);
    await mutation.mutateAsync();
    setLoading(false);
  };

  return {
    onSubmit,
    handleData,
    isSuccess: mutation.isSuccess,
  };
};

export default useSignup;
