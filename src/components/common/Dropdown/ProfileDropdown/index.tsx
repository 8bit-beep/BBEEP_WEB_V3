import { useState } from "react";
import * as S from "./style";
import {useGetme} from "../../../../queries/auth/getme.ts";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "../../../../constants/token/token.ts";
import {Link} from "react-router-dom";
import {COLOR} from "../../../../style/color/color.ts";

const ProfileDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);
  const data = useGetme();

  return (
    <S.Container>
      <S.ProfileButton onClick={() => setIsOpened((prev) => !prev)}>
        {
          data ? <S.ProfileName>{data?.username} 선생님</S.ProfileName> : <Link to='/login' style={{ fontSize: 16, textDecoration: "none", color: COLOR.Main }}>로그인</Link>
        }
        
        {data && <S.Arrow src="/assets/ListOpen.svg" alt="화살표" $isOpened={isOpened} /> }
      </S.ProfileButton>
      {isOpened && (
        <S.OptionContainer>
          {data?.email}
          <S.LogoutButton
            onClick={() => {
              localStorage.removeItem(ACCESS_TOKEN_KEY)
              localStorage.removeItem(REFRESH_TOKEN_KEY)
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
