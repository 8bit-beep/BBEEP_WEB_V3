import SendPassword from "../../components/auth/SendPassword";
import * as S from "./style";

const SendPasswordPage = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Logo src="/assets/Logo.svg" />
        <SendPassword />
      </S.Form>
    </S.Container>
  );
};

export default SendPasswordPage;
