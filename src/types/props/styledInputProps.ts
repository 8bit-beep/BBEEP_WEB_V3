import { ChangeEvent } from "react";

export interface StyledInputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  name: string;
  error: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
