import styled from "@emotion/styled";
import { COLOR } from "../../../../style/color/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileButton = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
`;

export const ProfileName = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Arrow = styled.img<{ $isOpened: boolean }>`
  transform: ${(props) =>
    props.$isOpened ? "rotate(180deg)" : "rotate(0deg)"};
  width: 1rem;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: white;
  box-shadow: 0px 3px 5px 0.1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  top: 7rem;
  font-size: 1.2rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
`;

export const LogoutButton = styled.div`
  color: ${COLOR.Red};
  cursor: pointer;
  font-size: 1.2rem;
`;
