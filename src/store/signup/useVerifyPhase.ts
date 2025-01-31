import { create } from "zustand";
import { VerifyPhase, VerifyPhaseState } from "../../types/store/verifyPhase";

export const useVerifyPhaseStore = create<VerifyPhaseState>((set) => ({
  verifyPhase: VerifyPhase.EMAIL,
  setVerifyPhase: (verifyPhase: VerifyPhase) => set({ verifyPhase }),
}));
