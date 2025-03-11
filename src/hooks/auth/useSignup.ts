import { ChangeEvent, useEffect, useState } from "react";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import { useLoadingStore } from "../../store/global/useLoadingStore";
import { useSignUpMutation } from "../../queries/auth/signup.ts";
import { useVerifyEmailMutation } from "../../queries/auth/verifyEmail";
import { useSendEmailMutation } from "../../queries/auth/sendEmail";
import { useErrorStore } from "../../store/global/useErrorStore";

const useSignup = () => {
  const { signupData, setSignupData } = useSignupDataStore();
  const { loading, setLoading } = useLoadingStore();
  const signUpPasswordMutation = useSignUpMutation();
  const sendEmailMutation = useSendEmailMutation({ endpoint: "/email/send" });
  const verifyEmailMutation = useVerifyEmailMutation();
  const [passwordCheck, setPasswordCheck] = useState("");
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

  useEffect(() => {
    return () => {
      setError("");
    };
  }, [setError]);

  const sendEmail = async () => {
    if (loading) return;
    setLoading(sendEmailMutation.isPending);
    await sendEmailMutation.mutateAsync();
    setLoading(false);
  };

  const verifyEmail = async () => {
    if (loading) return;
    setLoading(verifyEmailMutation.isPending);
    await verifyEmailMutation.mutateAsync();
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
  };
};

export default useSignup;
