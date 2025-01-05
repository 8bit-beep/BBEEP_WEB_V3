import { TokenResponse } from "./tokenResponse";

export interface LoginResponse extends TokenResponse {
  refreshToken: string;
}