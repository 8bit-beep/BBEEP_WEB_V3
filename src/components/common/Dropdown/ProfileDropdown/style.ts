import styled from "@emotion/styled";

export const Container = styled.div`
    
`

export const ProfileButton = styled.button`
    display: flex;
    gap: 25px;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 55px;
`

export const ProfileName = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #000;
`

export const Arrow = styled.img<{ $isOpened: boolean }>`
    position: relative;
    top: 3px;
    transform: ${(props) => (props.$isOpened ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.5s ease;
    margin-left: 
`

export const OptionContainer = styled.div`

`

export const Email = styled.p`
    font-size: 11px;
    font-weight: 500;
`

export const LogoutButton = styled.button`
    font-size: 12px;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    color: #FF6C6C;
`