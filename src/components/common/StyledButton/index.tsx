import * as S from "./style";
import { StyledButtonProps } from "../../../types/props/styledButtonProps";

const StyledButton = ({ children, onClick, disabled }: StyledButtonProps) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default StyledButton;
