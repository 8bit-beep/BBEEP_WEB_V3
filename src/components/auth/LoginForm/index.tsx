import * as S from "./style";
const LoginForm = () => {
  return (
    <S.Container>
      <S.Logo src="/assets/Logo.svg" />
      <S.ButtonWrap>
        <S.Title>로그인 하기</S.Title>
        <S.Button onClick={() => console.log("디어스로 가져라!!")}>
          <S.ButtonText>도담도담으로 로그인</S.ButtonText>{" "}
          <S.DodamLogo src="/assets/DodamLogo.svg" />
        </S.Button>
      </S.ButtonWrap>
      <S.Blank />
    </S.Container>
  );
};

export default LoginForm;
