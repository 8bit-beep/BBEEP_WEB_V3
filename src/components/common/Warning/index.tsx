import * as S from "./style";
import { WarningProps } from "../../../types/props/warningProps";

const Warning = ({ children, visible }: WarningProps) => {
  return <S.Warning>{visible && children}</S.Warning>;
};

export default Warning;
