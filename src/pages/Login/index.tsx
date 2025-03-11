import LoginForm from "../../components/auth/LoginForm";
import * as S from "./style";
import {X} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  return (
    <S.Container>
      <S.Form>
        <S.ImgWrap />
        <S.FormWrap>
          <X size={32} onClick={() => navigate(-1)} />
          <LoginForm />
        </S.FormWrap>
      </S.Form>
    </S.Container>
  );
};

export default Login;
