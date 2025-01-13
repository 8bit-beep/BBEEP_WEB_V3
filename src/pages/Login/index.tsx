import LoginForm from "../../components/LoginForm";
import * as S from "./style";

const Login = () => {
  return (
    <S.Container>
      <S.Form>
        <S.ImgWrap />
        <S.FormWrap>
          <S.LogoWrap>
            <S.LogoText>삑</S.LogoText>
          </S.LogoWrap>
          <LoginForm />
        </S.FormWrap>
      </S.Form>
    </S.Container>
  );
};

export default Login;
