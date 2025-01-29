export enum VerifyPhase {
  EMAIL = "EMAIL",
  CODE = "CODE",
}

export interface VerifyPhaseState {
  verifyPhase: VerifyPhase;
  setVerifyPhase: (verifyPhase: VerifyPhase) => void;
}
