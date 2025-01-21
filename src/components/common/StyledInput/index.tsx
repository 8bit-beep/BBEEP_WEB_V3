import { FC } from "react";
import * as S from "./style";
import { StyledInputProps } from "../../../types/props/styledInputProps";

const StyledInput: FC<StyledInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  error,
  onKeyDown,
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
