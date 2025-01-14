import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/auth/useLogin";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useLoginDataStore } from "../../store/login/useLoginDataStore";
import * as S from "./style";
import Warning from "../common/Warning";
import StyledInput from "../common/StyledInput";
import StyledButton from "../common/StyledButton";

const LoginForm = () => {
  const { handleData, onSubmit } = useLogin();
  const { loginData } = useLoginDataStore();
  const { error } = useErrorStore();
  const navigate = useNavigate();

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(loginData);
    }
  };

  return (
    <S.Container>
      <S.Title>개인정보 입력</S.Title>
      <S.InputWrap>
        <StyledInput
          name="email"
          placeholder="이메일"
          type="email"
          onChange={handleData}
          value={loginData.email}
          error={error}
          onKeyDown={(e) =>
            activeEnter(e as React.KeyboardEvent<HTMLInputElement>)
          }
        />
        <StyledInput
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={handleData}
          value={loginData.password}
          error={error}
          onKeyDown={(e) =>
            activeEnter(e as React.KeyboardEvent<HTMLInputElement>)
          }
        />
        <S.OptionsContainer>
          {" "}
          {/*로그인 유지, 비밀번호 오류*/}
          <S.CheckWrap>
            <S.CheckBox type="checkbox" />
            로그인 유지
          </S.CheckWrap>
          <Warning
            visible={
              error?.response?.data?.status === 400 ||
              error?.response?.data?.status === 404
            }
          >
            {error?.response?.data?.status === 400
              ? "비밀번호가 잘못되었습니다."
              : error?.response?.data?.status === 404
              ? "존재하지 않는 이메일입니다."
              : ""}
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
          <S.OptionBar>|</S.OptionBar>
          <S.Option>비밀번호를 잊으셨나요?</S.Option>
        </S.OptionWrapper>
      </S.InputWrap>
    </S.Container>
  );
};

export default LoginForm;
