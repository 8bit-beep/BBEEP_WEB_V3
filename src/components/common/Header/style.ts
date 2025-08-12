import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { COLOR } from "../../../style/color/color";

export const HeaderWrap = styled.div`
    width: 100%;
    max-width: 160rem;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;

export const MenuItem = styled(Link)<{ active: string }>`
    font-size: 1.6rem;
    height: 100%;
    font-weight: 400;
    text-decoration: none;
    color: ${COLOR.Black};
    cursor: pointer;
    margin: 0 1rem;
    border-bottom: ${({ active }) => (active === "true" ? "2px" : "0px")} solid
        ${COLOR.Main};
`;

export const ProfileWrap = styled.div`
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
