import { ReactNode } from "react";
import ThemedIcon from "../Common/ThemedIcon";
import * as S from "./style";

const MainSection = ({
  children,
  title,
  subtitle,
  href,
  icon,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  href: string;
  icon: string;
}) => {
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
