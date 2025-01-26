import { ChangeEvent, useState } from "react";
import { useLoadingStore } from "../../store/global/useLoadingStore";
import { mutation } from "../../queries/auth/resetPassword";
import { useResetPasswordDataStore } from "../../store/resetPassword/useResetPasswordData";

const useResetPassword = () => {
  const { resetPasswordData, setResetPasswordData } =
    useResetPasswordDataStore();
  const { loading, setLoading } = useLoadingStore();

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetPasswordData({ ...resetPasswordData, [name]: value });
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = async () => {
    if (loading) return;
    setLoading(mutation.isPending);
    await mutation.mutateAsync();
    setLoading(false);
  };

  const [passwordCheck, setPasswordCheck] = useState("");

  return {
    onSubmit,
    handleData,
    isSuccess: mutation.isSuccess,
    activeEnter,
    passwordCheck,
    setPasswordCheck,
  };
};

export default useResetPassword;
