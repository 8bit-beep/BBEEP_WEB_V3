import styled from "@emotion/styled";
import { COLOR } from "../../style/color/color.ts";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 1.6rem;
    overflow: scroll;
`;
export const Map = styled.img`
    object-fit: contain;
    margin: 8rem auto;
    height: 72rem;
`;

export const ToggleWrap = styled.div`
    width: 18rem;
    padding: 0.5rem 1.9375rem 0.5rem 0.5rem;
    display: flex;
    background: ${COLOR.White};
    border-radius: 0.8rem;
    position: fixed;
    top: 8rem;
    left: 1rem;
    gap: 0.4rem;
    border: 0.1rem solid ${COLOR.Main};
`;

export const ToggleItem = styled.div<{ $isFocused: boolean }>`
    flex: 1;
    padding: 0.8rem 0;
    background: ${({ $isFocused }) => ($isFocused ? COLOR.Main : COLOR.White)};
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ $isFocused }) => ($isFocused ? COLOR.White : COLOR.Black)};
    border-radius: 0.3125rem;
    text-align: center;
`;

export const ConfirmAttend = styled.button`
    width: 18rem;
    padding: 1.6rem;
    font-weight: 600;
    border-radius: 0.8rem;
    border: 0.1rem solid ${COLOR.Main};
    background: ${COLOR.Main};
    text-align: center;
    position: fixed;
    top: 8rem;
    left: 20rem;
    color: ${COLOR.White};
    font-size: 1.6rem;
    cursor: pointer;
    &:disabled {
        background: ${COLOR.Gray};
        border: 0.1rem solid ${COLOR.Gray};
    }
`;
