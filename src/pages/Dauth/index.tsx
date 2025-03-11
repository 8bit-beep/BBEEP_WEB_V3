import * as S from "./style.ts";
import {useAuth} from "../../hooks/auth/useAuth.ts";

const Dauth = () => {
  const { isError, isPending } = useAuth();
  
  return (
    <S.Container>
      <S.Form>
        <S.ImgWrap />
        <S.FormWrap>
          <S.Content>
            <S.LoadingText>
              {
                isPending ? "인증 중입니다..." : !isError ? "인증에 성공했습니다." : "인증에 실패했습니다."
              }
            </S.LoadingText>
            {
              isPending ? <S.Spinner /> : <S.Button to="/">메인으로</S.Button>
            }
          </S.Content>
        </S.FormWrap>
      </S.Form>
    </S.Container>
  );
}
export default Dauth
