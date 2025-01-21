import LoginForm from "../../components/auth/LoginForm";
import * as S from "./style";

const Login = () => {
  return (
    <S.Container>
      <S.Form>
        <S.ImgWrap />
        <S.FormWrap>
          <S.LogoWrap>
            <S.Logo src="/assets/Logo.svg" />
          </S.LogoWrap>
          <LoginForm />
        </S.FormWrap>
      </S.Form>
    </S.Container>
  );
};

export default Login;
