import LoginForm from "../../components/auth/LoginForm";
import * as S from "./style";

const Login = () => {
  return (
    <S.Container>
      <S.Form>
        <S.ImgWrap />
        <S.FormWrap>
          <LoginForm />
        </S.FormWrap>
      </S.Form>
    </S.Container>
  );
};

export default Login;
