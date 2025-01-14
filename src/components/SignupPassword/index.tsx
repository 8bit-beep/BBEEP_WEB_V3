import { useState } from "react";
import useSignup from "../../hooks/auth/useSignup";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import StyledInput from "../common/StyledInput";
import * as S from "./style";
import Spacer from "../common/Spacer";
import StyledButton from "../common/StyledButton";
import Warning from "../common/Warning";
import { FormValidator } from "../../utils/validate";

const SignupPassword = () => {
  const { signupData } = useSignupDataStore();
  const { handleData, onSubmit } = useSignup();
  const [passwordCheck, setPasswordCheck] = useState("");

  const passwordValidation = FormValidator.validatePasswordMatch(
    signupData.password,
    passwordCheck
  );

  return (
    <S.Container>
      <S.Title>비밀번호 설정</S.Title>
      <S.InputWrap>
        <StyledInput
          name="password"
          placeholder="비밀번호를 입력하세요."
          type="password"
          onChange={handleData}
          value={signupData.password}
          error={passwordValidation.showError}
        />
        <StyledInput
          name="passwordCheck"
          placeholder="비밀번호를 재입력하세요."
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
          value={passwordCheck}
          error={passwordValidation.showError}
        />
        <Spacer />
        <StyledButton disabled={!passwordValidation.isValid} onClick={onSubmit}>
          다음
        </StyledButton>
        <Warning visible={passwordValidation.showError}>
          비밀번호가 일치하지 않습니다.
        </Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default SignupPassword;
