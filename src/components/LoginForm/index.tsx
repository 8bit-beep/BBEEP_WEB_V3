import useLogin from "../../hooks/auth/useLogin";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useLoginDataStore } from "../../store/login/useLoginDataStore";
import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput";
import * as S from "./style";

const LoginForm = () => {
  const { handleData, onSubmit } = useLogin();
  const { loginData } = useLoginDataStore();
  return (
    <S.Container>
      <S.InputWrap>
        <StyledInput
          name="email"
          placeholder="이메일"
          type="email"
          onChange={handleData}
          value={loginData.email}
          error={false}
        />
        <StyledInput
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={handleData}
          value={loginData.password}
          error={false}
        />
      </S.InputWrap>
      <StyledButton
        disabled={
          loginData.password.trim().length > 0 &&
          loginData.email.trim().length > 0
        }
        onClick={() => onSubmit(loginData)}
      >
        다음
      </StyledButton>
    </S.Container>
  );
};

export default LoginForm;
