import * as S from "./style";
import { StyledInputProps } from "../../../types/props/styledInputProps";
import StyledInput from "../StyledInput";

const ConfirmStyledInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  error,
  onKeyDown,
}: StyledInputProps) => {
  return (
    <S.InputWrap>
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        $isError={error}
        onKeyDown={onKeyDown}
      />
      <S.ConfirmButton>보내기</S.ConfirmButton>
    </S.InputWrap>
  );
};

export default ConfirmStyledInput;
