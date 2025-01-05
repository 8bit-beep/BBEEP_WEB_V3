import { create } from "zustand";
import { SignupPhase, SignupPhaseState } from "../../types/store/signupPhaseState";

export const useSignupPhaseStore = create<SignupPhaseState>(set=>({
  signupPhase: SignupPhase.INFO,
  setSignupPhase: (signupPhase: SignupPhase) => set({ signupPhase })
}));