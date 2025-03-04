import * as S from "./style";
import { MainSecionProps } from "../../types/props/mainSectionProps";
import ThemedIcon from "../common/ThemedIcon";

const MainSection = ({
  children,
  title,
  subtitle,
  href,
  icon,
}: MainSecionProps) => {
  return (
    <S.Section>
      <S.SectionHeader>
        <ThemedIcon
          src={`/assets/${icon}.svg`}
          width="1.8rem"
          height="1.8rem"
        />
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.SectionSubtitle>{subtitle}</S.SectionSubtitle>
        <S.Spacer />
        <S.Detail to={href}>
          <S.LinkText>확인하기</S.LinkText>
          <ThemedIcon
            src="/assets/Arrow.svg"
            width="min-content"
            height="min-content"
          />
        </S.Detail>
      </S.SectionHeader>
      <S.SectionTable>{children}</S.SectionTable>
    </S.Section>
  );
};

export default MainSection;
