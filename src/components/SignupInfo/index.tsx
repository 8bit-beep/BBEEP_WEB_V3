import { useState } from "react";
import Spacer from "../Spacer";
import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput";
import Warning from "../Warning";
import * as S from "./style";
import useSignup from "../../hooks/auth/useSignup";
import { useSignupDataStore } from "../../store/signup/useSignupDataStore";
import { useErrorStore } from "../../store/global/useErrorStore";
import { useSignupPhaseStore } from "../../store/signup/useSignupPhaseStore";
import { SignupPhase } from "../../types/store/signupPhaseState";

const SignupInfo = () => {
  const [listVisible, setListVisible] = useState(false);
  const [department, setDepartment] = useState("");
  const handleList = () => {
    setListVisible((prev) => !prev);
  };
  const { handleData } = useSignup();
  const { signupData } = useSignupDataStore();
  const { error } = useErrorStore();
  const { setSignupPhase } = useSignupPhaseStore();
  const departments = [
    "교무기획부",
    "교육연구부",
    "전문교육부",
    "마이스터부",
    "학생안전부",
    "산학협력부",
    "학년부",
    "입학홍보진로부",
  ];

  return (
    <S.Container>
      <S.Title>개인정보 입력</S.Title>
      <S.InputWrap>
        <StyledInput
          name="name"
          placeholder="이름을 입력하세요."
          type="text"
          onChange={handleData}
          value={signupData.name}
          error={false}
        />
        <StyledInput
          name="email"
          placeholder="이메일을 입력하세요."
          type="email"
          onChange={handleData}
          value={signupData.email}
          error={error?.response.data.status === 409}
        />
        <S.SelectWrap onClick={handleList}>
          <S.SelectValue>{department || "부서 선택하기"}</S.SelectValue>
          {listVisible && (
            <S.SelectList>
              {departments.map((item, idx) => (
                <S.SelectItem
                  $isLast={idx == departments.length - 1}
                  onClick={() => setDepartment(item)}
                >
                  {item}
                </S.SelectItem>
              ))}
            </S.SelectList>
          )}
          <S.ListOpen src="/assets/ListOpen.svg" $isOpened={listVisible} />
        </S.SelectWrap>
        <Spacer />
        <StyledButton disabled={
          signupData.email.trim().length < 1 ||
          signupData.name.trim().length < 1 ||
          department.length < 1
        } onClick={() => setSignupPhase(SignupPhase.PASSWORD)}>
          다음
        </StyledButton>
        <Warning visible={error?.response.data.status === 409}>
          이미 유저가 존재합니다.
        </Warning>
      </S.InputWrap>
    </S.Container>
  );
};

export default SignupInfo;
