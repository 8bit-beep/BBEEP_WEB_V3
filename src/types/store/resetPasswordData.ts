import { ResetPasswordForm } from "../auth/resetPasswordForm";

export interface ResetPasswordDataState {
  resetPasswordData: ResetPasswordForm;
  setResetPasswordData: (resetPasswordData: ResetPasswordForm) => void;
}
