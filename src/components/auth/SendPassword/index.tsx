import * as S from "./style";
import Warning from "../../common/Warning";
import { useErrorStore } from "../../../store/global/useErrorStore";
import CertificationInput from "../../common/CertificationInput";
import useResetPassword from "../../../hooks/auth/useResetPassword";
import { useResetPasswordDataStore } from "../../../store/resetPassword/useResetPasswordData";

const SendPassword = () => {
  const { handleData, sendEmail } = useResetPassword();
  const { resetPasswordData } = useResetPasswordDataStore();
  const { error } = useErrorStore();
  return (
    <S.Container>
      <S.Title>비밀번호 변경</S.Title>
      <S.InputWrap>
        <CertificationInput
          name="email"
          placeholder="계정 이메일을 입력하세요."
          type="email"
          onChange={handleData}
          value={resetPasswordData.email}
          error={error}
          buttonName="전송하기"
          action={sendEmail}
        />
        <Warning visible={error?.response?.data?.status === 404}>
          존재하지 않는 이메일입니다.
        </Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default SendPassword;
