import useLogin from "../../hooks/auth/useLogin";
import { useErrorStore } from "../../store/global/useErrorStore";
import StyledInput from "../StyledInput";
import * as S from "./style";

const { error } = useErrorStore();
const { handleData } = useLogin();
const Login = () => {
  return (
    <S.Container>
      <S.InputWrap>
        <StyledInput
          name="name"
          placeholder="이름을 입력하세요."
          type="text"
          onChange={handleData}
          value={loginData.id}
          error={false}
        />
      </S.InputWrap>
    </S.Container>
  );
};

export default Login;
