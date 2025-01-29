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
}: CertificationInputProps) => {
  const { sendEmail, verifyEmail } = useSignup();
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
      <S.Button
        onClick={
          buttonName == "전송하기" ? () => sendEmail() : () => verifyEmail()
        }
      >
        {buttonName}
      </S.Button>
    </S.InputContainer>
  );
};

export default CertificationInput;
