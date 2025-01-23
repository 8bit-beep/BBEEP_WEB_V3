import { create } from "zustand";
import {
  ResetPasswordPhase,
  ResetPasswordPhaseState,
} from "../../types/store/resetPasswordPhase";

export const useResetPasswordPhaseStore = create<ResetPasswordPhaseState>(
  (set) => ({
    resetPasswordPhase: ResetPasswordPhase.INFO,
    setResetPasswordPhase: (resetPasswordPhase: ResetPasswordPhase) =>
      set({ resetPasswordPhase }),
  })
);
