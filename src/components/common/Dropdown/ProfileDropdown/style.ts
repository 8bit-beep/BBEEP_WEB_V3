import styled from "@emotion/styled";
import { COLOR } from "../../../../style/color/color";

export const Container = styled.div`

`

export const ProfileButton = styled.button`

`

export const ProfileName = styled.div`

`

export const Arrow = styled.img<{ $isOpened: boolean }>`
    transition: transform 0.4s ease;
    transform: ${(props) => (props.$isOpened ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const OptionContainer = styled.div`

`

export const Email = styled.p`

`

export const LogoutButton = styled.button`

`