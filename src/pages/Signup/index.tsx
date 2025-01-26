import { useSignupPhaseStore } from "../../store/signup/useSignupPhaseStore";
import { SignupPhase } from "../../types/store/signupPhaseState";
import * as S from "./style";
import SignupEmail from "../../components/auth/SignupEmail";
import SignupInfo from "../../components/auth/SignupInfo";

const Signup = () => {
  const { signupPhase } = useSignupPhaseStore();

  return (
    <S.Container>
      <S.Form>
        <S.LogoWrap>
          <S.Logo src="/assets/Logo.svg" />
          <S.RouteName>삑에 회원가입</S.RouteName>
        </S.LogoWrap>
        <S.FormContentWrap>
          {signupPhase === SignupPhase.EMAIL ? <SignupEmail /> : <SignupInfo />}
        </S.FormContentWrap>
      </S.Form>
    </S.Container>
  );
};

export default Signup;
