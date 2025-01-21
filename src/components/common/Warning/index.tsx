import { FC } from "react";
import * as S from "./style";
import { WarningProps } from "../../../types/props/warningProps";

const Warning: FC<WarningProps> = ({ children, visible }) => {
  return <S.Warning>{visible && children}</S.Warning>;
};

export default Warning;
