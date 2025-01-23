import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent } from "react";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useLoadingStore } from "../../store/global/useLoadingStore";
import { useSignupPhaseStore } from "../../store/signup/useSignupPhaseStore";
import { SignupPhase } from "../../types/store/signupPhaseState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useResetPasswordDataStore } from "../../store/resetPassword/useResetPasswordData";

const useResetPassword = () => {
  const { resetPasswordData, setResetPasswordData } =
    useResetPasswordDataStore();
  const { setSignupPhase } = useSignupPhaseStore();
  const { setError } = useErrorStore();
  const { loading, setLoading } = useLoadingStore();
  const navigate = useNavigate();

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetPasswordData({ ...resetPasswordData, [name]: value });
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/sign-up`,
        resetPasswordData
      );
      return data;
    },
    onError: (err: any) => {
      setError(err);
      setSignupPhase(SignupPhase.INFO);
    },
    onSuccess: () => {
      notification.open({
        message: "비밀번호 변경에 성공했습니다.",
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

export default useResetPassword;
