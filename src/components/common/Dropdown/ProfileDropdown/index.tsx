import { useState } from "react";
import * as S from "./style";

const ProfileDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <S.Container>
      <S.ProfileButton onClick={() => setIsOpened((prev) => !prev)}>
        <S.ProfileName>이름</S.ProfileName>
        <S.Arrow src="/assets/ListOpen.svg" alt="화살표" $isOpened={isOpened} />
      </S.ProfileButton>
      {isOpened && (
        <S.OptionContainer>
          imground11@gmail.com
          <S.LogoutButton
            onClick={() => localStorage.removeItem("ACCESS_TOKEN_KEY")}
          >
            로그아웃
          </S.LogoutButton>
        </S.OptionContainer>
      )}
    </S.Container>
  );
};

export default ProfileDropdown;
