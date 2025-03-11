import axios from "axios";
import { useResetPasswordDataStore } from "../../store/resetPassword/useResetPasswordData";
import { useMutation } from "@tanstack/react-query";
import { useErrorStore } from "../../store/global/useErrorStore";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";

export const useResetPasswordMutation = () => {
  const { resetPasswordData } = useResetPasswordDataStore();
  const { setError } = useErrorStore();
  const navigate = useNavigate();
  const params = useParams();
  return useMutation({
    mutationFn: async () => {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/password/${params.id}`,
        { password: resetPasswordData.password }
      );
      return data;
    },
    onError: (err: any) => {
      setError(err);
    },
    onSuccess: () => {
      notification.open({
        message: "비밀번호 변경에 성공했습니다.",
      });
      navigate("/login");
    },
  });
};
