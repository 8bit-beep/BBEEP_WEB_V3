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
import { useVerifyPhaseStore } from "../../../store/signup/useVerifyPhase";
import { VerifyPhase } from "../../../types/store/verifyPhase";
import { useCodeCertifiedStore } from "../../../store/signup/useCodeCertified";

const SignupEmail = () => {
  const { handleData } = useSignup();
  const { isCodeCertified } = useCodeCertifiedStore();
  const { signupData } = useSignupDataStore();
  const { setSignupPhase } = useSignupPhaseStore();
  const { error } = useErrorStore();
  const isFormValid = FormValidator.areObjectFieldsFilled(signupData, [
    "email",
    "code",
  ]);
  const { verifyPhase } = useVerifyPhaseStore();

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
        {verifyPhase === VerifyPhase.EMAIL ? (
          <></>
        ) : (
          <CertificationInput
            name="code"
            placeholder="인증코드를 입력하세요."
            type="text"
            onChange={handleData}
            value={signupData.code}
            error={error?.message === "인증번호가 유효하지 않습니다."}
            buttonName="인증하기"
          />
        )}

        <StyledButton
          disabled={!isFormValid || !isCodeCertified}
          onClick={() => setSignupPhase(SignupPhase.INFO)}
        >
          다음
        </StyledButton>
        <Warning visible={!!error}>
          {error?.message || "이미 유저가 존재합니다."}
        </Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default SignupEmail;
