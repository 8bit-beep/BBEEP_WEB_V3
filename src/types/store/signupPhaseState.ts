export enum SignupPhase {
  EMAIL = "EMAIL",
  INFO = "INFO",
}

export interface SignupPhaseState {
  signupPhase: SignupPhase;
  setSignupPhase: (signupPhase: SignupPhase) => void;
}
