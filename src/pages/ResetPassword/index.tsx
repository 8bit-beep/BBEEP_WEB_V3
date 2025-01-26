import ResetPasswordChange from "../../components/auth/ResetPasswordChange";
import * as S from "./style";

const ResetPassword = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Logo src="/assets/Logo.svg" />
        <ResetPasswordChange />
      </S.Form>
    </S.Container>
  );
};

export default ResetPassword;
