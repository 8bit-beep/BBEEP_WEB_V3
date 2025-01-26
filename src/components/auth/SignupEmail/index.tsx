import * as S from "./style";
import useSignup from "../../../hooks/auth/useSignup";
import { useSignupDataStore } from "../../../store/signup/useSignupDataStore";
import StyledInput from "../../common/StyledInput";
import StyledButton from "../../common/StyledButton";
import Warning from "../../common/Warning";
import { FormValidator } from "../../../utils/validate";
import { SignupPhase } from "../../../types/store/signupPhaseState";
import { useErrorStore } from "../../../store/global/useErrorStore";
import { useSignupPhaseStore } from "../../../store/signup/useSignupPhaseStore";

const SignupEmail = () => {
  const { handleData } = useSignup();
  const { signupData } = useSignupDataStore();
  const { setSignupPhase } = useSignupPhaseStore();
  const { error } = useErrorStore();
  const isEmailConflict = error?.response.data.status === 409;
  const isFormValid = FormValidator.areObjectFieldsFilled(signupData, [
    "email",
  ]);

  return (
    <S.Container>
      <S.Title>이메일 인증</S.Title>
      <S.InputWrap>
        <StyledInput
          name="email"
          placeholder="이메일을 입력하세요."
          type="email"
          onChange={handleData}
          value={signupData.email}
          error={isEmailConflict}
        />
        <StyledInput
          name="name"
          placeholder="인증코드를 입력하세요."
          type="text"
          onChange={handleData}
          value={signupData.name}
          error={false}
        />
        <StyledButton
          disabled={!isFormValid}
          onClick={() => setSignupPhase(SignupPhase.INFO)}
        >
          다음
        </StyledButton>
        <Warning visible={isEmailConflict}>이미 유저가 존재합니다.</Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default SignupEmail;
