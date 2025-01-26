import { useState } from "react";
import useResetPassword from "../../../hooks/auth/useResetPassword";
import { useResetPasswordDataStore } from "../../../store/resetPassword/useResetPasswordData";
import { FormValidator } from "../../../utils/validate";
import StyledButton from "../../common/StyledButton";
import StyledInput from "../../common/StyledInput";
import Warning from "../../common/Warning";
import * as S from "./style";

const ResetPasswordChange = () => {
  const { handleData, onSubmit } = useResetPassword();
  const [passwordCheck, setPasswordCheck] = useState("");
  const { resetPasswordData } = useResetPasswordDataStore();
  const passwordValidation = FormValidator.validatePasswordMatch(
    resetPasswordData.password,
    passwordCheck
  );
  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <S.Container>
      <S.Title>비밀번호 재설정</S.Title>
      <S.InputWrap>
        <StyledInput
          name="password"
          placeholder="새 비밀번호를 입력하세요."
          type="password"
          onChange={handleData}
          value={resetPasswordData.password}
          error={passwordValidation.showError}
          onKeyDown={(e) =>
            activeEnter(e as React.KeyboardEvent<HTMLInputElement>)
          }
        />
        <StyledInput
          name="passwordCheck"
          placeholder="새 비밀번호를 재입력하세요."
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
          value={passwordCheck}
          error={passwordValidation.showError}
          onKeyDown={(e) =>
            activeEnter(e as React.KeyboardEvent<HTMLInputElement>)
          }
        />
        <StyledButton disabled={!passwordValidation.isValid} onClick={onSubmit}>
          변경하기
        </StyledButton>
        <Warning visible={passwordValidation.showError}>
          비밀번호가 일치하지 않습니다.
        </Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default ResetPasswordChange;
