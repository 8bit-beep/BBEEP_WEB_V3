import { ChangeEvent, useState } from "react";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import { useLoadingStore } from "../../store/global/useLoadingStore";
import { useSignUpMutation } from "../../queries/auth/signup";

const useSignup = () => {
  const { signupData, setSignupData } = useSignupDataStore();
  const { loading, setLoading } = useLoadingStore();
  const signUpPasswordMutation = useSignUpMutation();

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

  const [passwordCheck, setPasswordCheck] = useState("");
  const [code, setCode] = useState("");

  return {
    onSubmit,
    handleData,
    isSuccess: signUpPasswordMutation.isSuccess,
    passwordCheck,
    setPasswordCheck,
    code,
    setCode,
  };
};

export default useSignup;
