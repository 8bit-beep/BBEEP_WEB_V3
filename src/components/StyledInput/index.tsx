import { ChangeEvent } from "react";
import * as S from "./style";

const StyledInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  error,
  onKeyDown,
}: {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  name: string;
  error: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // 엔터 키 눌러서 로그인할 때 사용
}) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      $isError={error}
      onKeyDown={onKeyDown}
    />
  );
};

export default StyledInput;
