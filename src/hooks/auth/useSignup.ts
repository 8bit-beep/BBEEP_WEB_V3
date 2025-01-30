import { ChangeEvent, useState } from "react";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import { useLoadingStore } from "../../store/global/useLoadingStore";
import { useSignUpMutation } from "../../queries/auth/signup";
import { useVerifyEmailMutation } from "../../queries/auth/verifyEmail";
import { useSendEmailMutation } from "../../queries/auth/sendEmail";
import { useErrorStore } from "../../store/global/useErrorStore";

const useSignup = () => {
  const { signupData, setSignupData } = useSignupDataStore();
  const { loading, setLoading } = useLoadingStore();
  const signUpPasswordMutation = useSignUpMutation();
  const sendEmailMutation = useSendEmailMutation();
  const verifyEmailMutation = useVerifyEmailMutation();
  const [passwordCheck, setPasswordCheck] = useState("");
  const [codeStatus, setCodeStatus] = useState();
  const { setError } = useErrorStore();

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const onSubmit = async () => {
    if (loading) return;
    setLoading(signUpPasswordMutation.isPending);
    await signUpPasswordMutation.mutateAsync();
    setLoading(false);
  };

  const sendEmail = async () => {
    if (loading) return;
    setLoading(sendEmailMutation.isPending);
    await sendEmailMutation.mutateAsync();
    setLoading(false);
  };

  const verifyEmail = async () => {
    if (loading) return;
    setLoading(verifyEmailMutation.isPending);
    try {
      const response = await signUpPasswordMutation.mutateAsync();
      setError("");
      setCodeStatus(response.status);
    } catch (error: any) {
      if (error.response?.status === 404) {
        setError("인증 코드가 올바르지 않습니다.");
      } else {
        setError("인증 과정에서 오류가 발생했습니다.");
      }
    }
    setLoading(false);
  };

  return {
    onSubmit,
    handleData,
    isSuccess: signUpPasswordMutation.isSuccess,
    passwordCheck,
    setPasswordCheck,
    sendEmail,
    verifyEmail,
    codeStatus,
    setCodeStatus,
  };
};

export default useSignup;
