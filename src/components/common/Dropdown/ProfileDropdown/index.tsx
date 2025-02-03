import { useState, useEffect, useRef } from 'react';
import * as S from "./style";

const ProfileDropdown = () => {
    const [isOpened, setIsOpened] = useState(false);
    const dropdownRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpened(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <S.Container>
            <S.ProfileButton ref={dropdownRef} onClick={() => setIsOpened((prev) => !prev)}>
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