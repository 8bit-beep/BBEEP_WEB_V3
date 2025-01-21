import SignupInfo from "../../components/auth/SignupInfo";
import SignupPassword from "../../components/auth/SignupPassword";
import { useSignupPhaseStore } from "../../store/signup/useSignupPhaseStore";
import { SignupPhase } from "../../types/store/signupPhaseState";
import * as S from "./style";

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
          {signupPhase === SignupPhase.INFO ? (
            <SignupInfo />
          ) : (
            <SignupPassword />
          )}
        </S.FormContentWrap>
      </S.Form>
    </S.Container>
  );
};

export default Signup;
