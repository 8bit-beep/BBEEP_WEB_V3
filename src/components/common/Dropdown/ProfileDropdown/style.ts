import styled from "@emotion/styled";
import { COLOR } from "../../../../style/color/color";

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
    color: ${COLOR.Black};
`;

export const Arrow = styled.img<{ $isOpened: boolean }>`
    transition: transform 0.4s ease;
    transform: ${(props) => (props.$isOpened ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const OptionContainer = styled.div`
    width: 140px;
    position: absolute;
    top: 40px;
    background: ${COLOR.White};
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
    font-size: 13px;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    color: ${COLOR.Red};
    margin-top: 13px;
`;