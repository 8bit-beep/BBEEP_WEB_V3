import ResetPasswordInfo from "../../components/auth/ResetPasswordInfo";
import * as S from "./style";

const ResetPassword = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Logo src="/assets/Logo.svg" />
        <S.FormContentWrap>
          <ResetPasswordInfo />
        </S.FormContentWrap>
      </S.Form>
    </S.Container>
  );
};

export default ResetPassword;
