import * as S from "./style.ts";

const Forbidden = () => {
  return (
    <S.Container>
      <S.Logo src="/assets/Logo.svg" alt="로고" />
      <S.Title>403 Forbidden :(</S.Title>
      <S.Content>학생은 선생님용 삑을 이용할 수 없어요.</S.Content>
    </S.Container>
  );
}
export default Forbidden;
