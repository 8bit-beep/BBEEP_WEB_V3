import { ChangeEvent, useState } from "react";
import { useLoadingStore } from "../../store/global/useLoadingStore";
import { useResetPasswordMutation } from "../../queries/auth/resetPassword";
import { useResetPasswordDataStore } from "../../store/resetPassword/useResetPasswordData";
import { useSendEmailMutation } from "../../queries/auth/sendEmail";

const useResetPassword = () => {
  const { resetPasswordData, setResetPasswordData } =
    useResetPasswordDataStore();
  const { loading, setLoading } = useLoadingStore();
  const resetPasswordMutation = useResetPasswordMutation();
  const sendEmailMutation = useSendEmailMutation({
    endpoint: "/users/password/send",
  });
  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetPasswordData({ ...resetPasswordData, [name]: value });
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const sendEmail = async () => {
    if (loading) return;
    setLoading(sendEmailMutation.isPending);
    await sendEmailMutation.mutateAsync();
    setLoading(false);
  };

  const onSubmit = async () => {
    if (loading) return;
    setLoading(true);
    await resetPasswordMutation.mutateAsync();
    setLoading(false);
  };

  const [passwordCheck, setPasswordCheck] = useState("");

  return {
    onSubmit,
    handleData,
    isSuccess: resetPasswordMutation.isSuccess,
    activeEnter,
    passwordCheck,
    setPasswordCheck,
    sendEmail,
  };
};

export default useResetPassword;
