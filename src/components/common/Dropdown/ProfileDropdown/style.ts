import styled from "@emotion/styled";

export const Container = styled.div`
    position: relative;
`;

export const ProfileButton = styled.button`
    display: flex;
    gap: 25px;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 120px;
    align-items: center;
`;

export const ProfileName = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #000;
`;

export const Arrow = styled.img<{ $isOpened: boolean }>`
    transition: transform 0.4s ease;
    transform: ${(props) => (props.$isOpened ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const OptionContainer = styled.div`
    width: 140px;
    position: absolute;
    top: 40px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 10px 0;
`;

export const Email = styled.p`
    margin-left: 17px;
    margin-top: 13px;
    font-size: 11px;
    font-weight: 500;
`;

export const LogoutButton = styled.button`
    width: 140px;
    height: 37px;
    font-size: 12px;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    color: #FF6C6C;
    margin-top: 13px;

    &:hover {
        color: #FF4C4C;
    }
`;