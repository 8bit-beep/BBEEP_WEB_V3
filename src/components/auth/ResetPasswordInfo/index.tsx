import ConfirmStyledInput from "../../common/ConfirmStyledInput";
ResetPassword
import * as S from "./style";

const ResetPasswordInfo = () => {
  return (
    <S.Container>
      <S.Title>비밀번호 재설정</S.Title>
      <S.InputWrap>
        <ConfirmStyledInput type="email" placeholder="이메일을 입력하세요." />
      </S.InputWrap>
    </S.Container>
  );
};

export default ResetPasswordInfo;
