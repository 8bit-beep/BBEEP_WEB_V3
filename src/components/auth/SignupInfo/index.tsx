import * as S from "./style";
import Spacer from "../../common/Spacer";
import { FormValidator } from "../../../utils/validate";
import StyledButton from "../../common/StyledButton";
import StyledInput from "../../common/StyledInput";
import Warning from "../../common/Warning";
import useSignup from "../../../hooks/auth/useSignup";
import { useSignupDataStore } from "../../../store/signup/useSignupDataStore";

const SignupInfo = () => {
  const { signupData } = useSignupDataStore();
  const { handleData, onSubmit, passwordCheck, setPasswordCheck } = useSignup();
  const passwordValidation = FormValidator.validatePasswordMatch(
    signupData.password,
    passwordCheck
  );

  return (
    <S.Container>
      <S.Title>회원정보 설정</S.Title>
      <S.InputWrap>
        <StyledInput
          name="text"
          placeholder="이름을 입력하세요."
          type="text"
          onChange={handleData}
          value={signupData.name}
          error={false}
        />
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
          회원가입
        </StyledButton>
        <Warning visible={passwordValidation.showError}>
          비밀번호가 일치하지 않습니다.
        </Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default SignupInfo;
