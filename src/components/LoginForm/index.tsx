import useLogin from "../../hooks/auth/useLogin";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useLoginDataStore } from "../../store/login/useLoginDataStore";
import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput";
import * as S from "./style";

const LoginForm = () => {
  const { handleData, onSubmit } = useLogin();
  const { loginData } = useLoginDataStore();
  const { error } = useErrorStore();

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
        <S.SelectWrapper>
          <S.CheckBox type="checkbox" />
          로그인 유지
        </S.SelectWrapper>
        <StyledButton
          disabled={
            loginData.password.trim().length === 0 ||
            loginData.email.trim().length === 0
          }
          onClick={() => onSubmit(loginData)}
        >
          로그인
        </StyledButton>
        <S.OptionWrapper>
          <S.Option>계정이 없으신가요?</S.Option>
          <div style={{ fontSize: "1.7rem", color: "#D9D9D9" }}>|</div>
          <S.Option>비밀번호를 잊으셨나요?</S.Option>
        </S.OptionWrapper>
      </S.InputWrap>
    </S.Container>
  );
};

export default LoginForm;
