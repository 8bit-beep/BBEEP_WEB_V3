import StyledInput from "../StyledInput";
import * as S from "./style";
import { CertificationInputProps } from "../../../types/props/certificationInputProps";
import useSignup from "../../../hooks/auth/useSignup";

const CertificationInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  error,
  onKeyDown,
  buttonName,
  action,
}: CertificationInputProps) => {
  return (
    <S.InputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        error={error}
        onKeyDown={onKeyDown}
      />
      <S.Button onClick={action}>{buttonName}</S.Button>
    </S.InputContainer>
  );
};

export default CertificationInput;
