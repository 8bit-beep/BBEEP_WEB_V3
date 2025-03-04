import { useState } from 'react';
import * as S from "./style";

const ProfileDropdown = () => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <S.Container>
            <S.ProfileButton onClick={() => setIsOpened((prev) => !prev)}>
                <S.ProfileName>김익현 선생님</S.ProfileName>
                <S.Arrow src="/assets/ListOpen.svg" alt="화살표" $isOpened={isOpened} />
            </S.ProfileButton>

            {isOpened && (
                <S.OptionContainer>
                    <S.Email>imground11@gmail.com</S.Email>
                    <S.LogoutButton>로그아웃</S.LogoutButton>
                </S.OptionContainer>
            )}
        </S.Container>
    );
};

export default ProfileDropdown