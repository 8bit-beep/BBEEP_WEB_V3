import styled from "@emotion/styled";
import { COLOR } from "../../constants/color/color";
import { Link } from "react-router-dom";

export const Section = styled.div`
  flex: 1;
  min-width: 45rem;
  height: 40rem;
  background-color: ${COLOR.White};
  box-shadow: 0rem 0.1rem 1rem 0rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SectionTitle = styled.p`
  font-size: 1.8rem;
  color: ${COLOR.Black};
  font-weight: 700;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.6rem;
  color: ${COLOR.Black};
  font-weight: 600;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Detail = styled(Link)`
  text-decoration: none;
  display: flex;
  color: ${COLOR.Gray};
  align-items: center;
  gap: 1.5rem;
`;

export const LinkText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const SectionTable = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: hidden;
`;
