import { FormValidator } from "../../utils/validate";
import Spacer from "../Common/Spacer";
import StyledButton from "../Common/StyledButton";
import StyledInput from "../Common/StyledInput";
import Warning from "../Common/Warning";
import * as S from "./style";
import useSignup from "../../hooks/auth/useSignup";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useSignupPhaseStore } from "../../store/signup/useSignupPhaseStore";
import { SignupPhase } from "../../types/store/signupPhaseState";

const SignupInfo = () => {
  const { handleData } = useSignup();
  const { signupData } = useSignupDataStore();
  const { error } = useErrorStore();
  const { setSignupPhase } = useSignupPhaseStore();

  const isEmailConflict = error?.response.data.status === 409;
  const isFormValid = FormValidator.areObjectFieldsFilled(signupData, [
    "email",
    "name",
  ]);

  return (
    <S.Container>
      <S.Title>개인정보 입력</S.Title>
      <S.InputWrap>
        <StyledInput
          name="name"
          placeholder="이름을 입력하세요."
          type="text"
          onChange={handleData}
          value={signupData.name}
          error={false}
        />
        <StyledInput
          name="email"
          placeholder="이메일을 입력하세요."
          type="email"
          onChange={handleData}
          value={signupData.email}
          error={isEmailConflict}
        />
        <Spacer />
        <StyledButton
          disabled={!isFormValid}
          onClick={() => setSignupPhase(SignupPhase.PASSWORD)}
        >
          다음
        </StyledButton>
        <Warning visible={isEmailConflict}>이미 유저가 존재합니다.</Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default SignupInfo;
