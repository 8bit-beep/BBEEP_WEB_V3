export enum ResetPasswordPhase {
  INFO = "INFO",
  PASSWORD = "PASSWORD",
}

export interface ResetPasswordPhaseState {
  resetPasswordPhase: ResetPasswordPhase;
  setResetPasswordPhase: (resetPasswordPhase: ResetPasswordPhase) => void;
}
