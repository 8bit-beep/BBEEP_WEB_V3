import StyledInput from "../StyledInput";
import * as S from "./style";
import { CertificationInputProps } from "../../../types/props/certificationInputProps";

const CertificationInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  error,
  onKeyDown,
  button,
}: CertificationInputProps) => {
  return (
    <S.InputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        $isError={error}
        onKeyDown={onKeyDown}
      />
      <S.Button>{button}</S.Button>
    </S.InputContainer>
  );
};

export default CertificationInput;
