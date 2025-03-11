import * as S from "./style";
const LoginForm = () => {
  return (
    <S.Container>
      <S.Logo src="/assets/Logo.svg" />
      <S.ButtonWrap>
        <S.Title>로그인 하기</S.Title>
        <S.Button to={`https://dauth.b1nd.com/login?client_id=${import.meta.env.VITE_DAUTH_CLIENT_ID}&redirect_uri=https://beep.cher1shrxd.me/callback/dauth`}>
          <S.ButtonText>도담도담으로 로그인</S.ButtonText>
          <S.DodamLogo src="/assets/DodamLogo.svg" />
        </S.Button>
      </S.ButtonWrap>
      <S.Blank />
    </S.Container>
  );
};

export default LoginForm;
