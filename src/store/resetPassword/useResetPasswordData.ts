import { create } from "zustand";
import { ResetPasswordDataState } from "../../types/store/resetPasswordData";
import { ResetPasswordForm } from "../../types/auth/resetPasswordForm";

export const useResetPasswordDataStore = create<ResetPasswordDataState>(
  (set) => ({
    resetPasswordData: {
      email: "",
      code: 0,
    },
    setResetPasswordData: (resetPasswordData: ResetPasswordForm) =>
      set({ resetPasswordData }),
  })
);
