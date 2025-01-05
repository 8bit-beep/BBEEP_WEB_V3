import { SignupForm } from "../auth/signupForm";

export interface SignupDataState {
  signupData: SignupForm;
  setSignupData: (signupData: SignupForm) => void;
}
