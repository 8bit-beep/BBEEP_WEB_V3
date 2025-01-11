import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/auth/useLogin";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useLoginDataStore } from "../../store/login/useLoginDataStore";
import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput";
import * as S from "./style";
import Warning from "../Warning";

const LoginForm = () => {
  const { handleData, onSubmit } = useLogin();
  const { loginData } = useLoginDataStore();
  const { error } = useErrorStore();
  const navigate = useNavigate();

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
        <S.OptionsContainer>
          {" "}
          {/*로그인 유지, 비밀번호 오류*/}
          <S.CheckWrap>
            <S.CheckBox type="checkbox" />
            로그인 유지
          </S.CheckWrap>
          <Warning visible={loginData.email.length === 0}>
            아이디 또는 비밀번호가 일치하지 않습니다.
          </Warning>
        </S.OptionsContainer>
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
          <S.Option onClick={() => navigate("/signup")}>
            계정이 없으신가요?
          </S.Option>
          <div style={{ fontSize: "1.7rem", color: "#D9D9D9" }}>|</div>
          <S.Option>비밀번호를 잊으셨나요?</S.Option>
        </S.OptionWrapper>
      </S.InputWrap>
    </S.Container>
  );
};

export default LoginForm;
