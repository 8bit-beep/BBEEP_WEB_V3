import { useState } from "react";
import * as S from "./style";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../../../constants/token/token.ts";
import { Link } from "react-router-dom";
import { COLOR } from "../../../../style/color/color.ts";
import { useGetme } from "../../../../queries/user/getme.ts";
import { cookie } from "../../../../utils/tokenStore.ts";

const ProfileDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { me, initUser } = useGetme();

  return (
    <S.Container>
      <S.ProfileButton onClick={() => setIsOpened((prev) => !prev)}>
        {me ? (
          <S.ProfileName>{me?.username} 선생님</S.ProfileName>
        ) : (
          <Link
            to="/login"
            style={{ fontSize: 16, textDecoration: "none", color: COLOR.Main }}
          >
            로그인
          </Link>
        )}

        {me && (
          <S.Arrow
            src="/assets/ListOpen.svg"
            alt="화살표"
            $isOpened={isOpened}
          />
        )}
      </S.ProfileButton>
      {isOpened && (
        <S.OptionContainer>
          {me?.email}
          <S.LogoutButton
            onClick={() => {
              cookie.remove(ACCESS_TOKEN_KEY);
              cookie.remove(REFRESH_TOKEN_KEY);
              initUser();
              setIsOpened(false);
            }}
          >
            로그아웃
          </S.LogoutButton>
        </S.OptionContainer>
      )}
    </S.Container>
  );
};

export default ProfileDropdown;
