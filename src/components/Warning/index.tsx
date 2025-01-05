import * as S from "./style";

const Warning = ({ children, visible }: { children: string, visible: boolean }) => {
  return <S.Warning>{visible && children}</S.Warning>;
};

export default Warning;
