import * as S from "./style";
import useSignup from "../../../hooks/auth/useSignup";
import { useSignupDataStore } from "../../../store/signup/useSignupDataStore";
import StyledButton from "../../common/StyledButton";
import Warning from "../../common/Warning";
import { FormValidator } from "../../../utils/validate";
import { SignupPhase } from "../../../types/store/signupPhaseState";
import { useErrorStore } from "../../../store/global/useErrorStore";
import { useSignupPhaseStore } from "../../../store/signup/useSignupPhaseStore";
import CertificationInput from "../../common/CertificationInput";

const SignupEmail = () => {
  const { handleData, code, setCode } = useSignup();
  const { signupData } = useSignupDataStore();
  const { setSignupPhase } = useSignupPhaseStore();
  const { error } = useErrorStore();
  const isFormValid = FormValidator.areObjectFieldsFilled(signupData, [
    "email",
  ]);

  return (
    <S.Container>
      <S.Title>이메일 인증</S.Title>
      <S.InputWrap>
        <CertificationInput
          name="email"
          placeholder="이메일을 입력하세요."
          type="email"
          onChange={handleData}
          value={signupData.email}
          error={false}
          buttonName="전송하기"
        />
        <CertificationInput
          name="code"
          placeholder="인증코드를 입력하세요."
          type="text"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          error={false}
          buttonName="인증하기"
        />
        <StyledButton
          disabled={!isFormValid}
          onClick={() => setSignupPhase(SignupPhase.INFO)}
        >
          다음
        </StyledButton>
        <Warning visible={false}>이미 유저가 존재합니다.</Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default SignupEmail;
