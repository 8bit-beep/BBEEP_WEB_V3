import { LoginForm } from "../auth/loginForm";

export interface LoginDataState {
  loginData: LoginForm;
  setLoginData: (loginData: LoginForm) => void;
}
