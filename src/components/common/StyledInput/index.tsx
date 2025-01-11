import { ChangeEvent } from "react";
import * as S from "./style";

const StyledInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  error
}: {
  type: "text" | "email" | "password"
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  name: string;
  error: boolean
}) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      $isError={error}
    />
  );
};

export default StyledInput;
