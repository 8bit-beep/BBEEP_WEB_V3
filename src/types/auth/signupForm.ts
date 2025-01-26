export interface SignupForm {
  email: string;
  password: string;
  name: string;
  authority: "STUDENT" | "TEACHER";
}
