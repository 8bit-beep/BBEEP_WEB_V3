export enum SignupPhase {
  INFO = "INFO",
  PASSWORD = "PASSWORD",
}

export interface SignupPhaseState {
  signupPhase: SignupPhase;
  setSignupPhase: (signupPhase: SignupPhase) => void;
}
