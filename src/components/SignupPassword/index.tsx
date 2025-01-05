import { useState } from 'react';
import useSignup from '../../hooks/auth/useSignup';
import { useSignupDataStore } from '../../store/signup/useSignupDataStore';
import StyledInput from '../StyledInput';
import * as S from './style'
import Spacer from '../Spacer';
import StyledButton from '../StyledButton';
import Warning from '../Warning';

const SignupPassword = () => {
  const { signupData } = useSignupDataStore();
  const { handleData, onSubmit } = useSignup();
  const [passwordCheck, setPasswordCheck] = useState("");

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
          error={
            signupData.password.trim().length > 0 &&
            passwordCheck.trim().length > 0 &&
            signupData.password.trim() !== passwordCheck.trim()
          }
        />
        <StyledInput
          name="passwordCheck"
          placeholder="비밀번호를 재입력하세요."
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
          value={passwordCheck}
          error={
            signupData.password.trim().length > 0 &&
            passwordCheck.trim().length > 0 &&
            signupData.password.trim() !== passwordCheck.trim()
          }
        />
        <Spacer />
        <StyledButton
          disabled={
            signupData.password.trim().length < 1 ||
            passwordCheck.trim().length < 1 ||
            signupData.password.trim() !== passwordCheck.trim()
          }
          onClick={onSubmit}
        >
          다음
        </StyledButton>
        <Warning
          visible={
            signupData.password.trim().length > 0 &&
            passwordCheck.trim().length > 0 &&
            signupData.password.trim() !== passwordCheck.trim()
          }
        >
          비밀번호가 일치하지 않습니다.
        </Warning>
      </S.InputWrap>
    </S.Container>
  );
}

export default SignupPassword