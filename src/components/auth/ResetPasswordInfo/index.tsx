import useResetPassword from "../../../hooks/auth/useResetPassword";
import { useErrorStore } from "../../../store/global/useErrorStore";
import { useResetPasswordDataStore } from "../../../store/resetPassword/useResetPasswordData";
import { useResetPasswordPhaseStore } from "../../../store/resetPassword/useResetPasswordPhase";
import { ResetPasswordPhase } from "../../../types/store/resetPasswordPhase";
import { FormValidator } from "../../../utils/validate";
import ConfirmStyledInput from "../../common/ConfirmStyledInput";
import Spacer from "../../common/Spacer";
import StyledButton from "../../common/StyledButton";
import * as S from "./style";

const ResetPasswordInfo = () => {
  const { resetPasswordData } = useResetPasswordDataStore();
  const { setResetPasswordPhase } = useResetPasswordPhaseStore();
  const { handleData } = useResetPassword();
  const { error } = useErrorStore();
  const isFormValid = FormValidator.areObjectFieldsFilled(resetPasswordData, [
    "email",
    "code",
  ]);
  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setResetPasswordPhase(ResetPasswordPhase.PASSWORD);
    }
  };
  return (
    <S.Container>
      <S.Title>비밀번호 재설정</S.Title>
      <S.InputWrap>
        <ConfirmStyledInput
          type="email"
          placeholder="이메일을 입력하세요."
          value={resetPasswordData.email}
          onChange={handleData}
          name="email"
          error={error}
          onKeyDown={(e) =>
            activeEnter(e as React.KeyboardEvent<HTMLInputElement>)
          }
          confirmOption="보내기"
          maxLength={50}
        />
        <ConfirmStyledInput
          type="text"
          placeholder="인증코드를 입력하세요."
          value={resetPasswordData.code}
          onChange={handleData}
          name="code"
          error={error}
          onKeyDown={(e) =>
            activeEnter(e as React.KeyboardEvent<HTMLInputElement>)
          }
          confirmOption="확인하기"
          maxLength={4}
        />
      </S.InputWrap>
      <Spacer />
      <StyledButton
        disabled={!isFormValid}
        onClick={() => setResetPasswordPhase(ResetPasswordPhase.PASSWORD)}
      >
        다음
      </StyledButton>
    </S.Container>
  );
};

export default ResetPasswordInfo;
