import * as S from "./style";
import { ConfirmStyledInputProps } from "../../../types/props/confirmStyledInputProps";

const ConfirmStyledInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  error,
  onKeyDown,
  confirmOption,
  maxLength,
}: ConfirmStyledInputProps) => {
  return (
    <S.InputWrap>
      <S.InputContainer>
        <S.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          $isError={error}
          onKeyDown={onKeyDown}
          maxLength={maxLength}
        />
        <S.ConfirmButton>{confirmOption}</S.ConfirmButton>
      </S.InputContainer>
    </S.InputWrap>
  );
};

export default ConfirmStyledInput;
