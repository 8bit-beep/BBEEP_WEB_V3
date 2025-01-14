import { create } from "zustand";
import { SignupDataState } from "../../types/store/signupDataState";
import { SignupForm } from "../../types/auth/signupForm";

export const useSignupDataStore = create<SignupDataState>((set) => ({
  signupData: {
    email: "",
    password: "",
    name: "",
    authority: "TEACHER",
  },
  setSignupData: (signupData: SignupForm) => set({ signupData }),
}));
