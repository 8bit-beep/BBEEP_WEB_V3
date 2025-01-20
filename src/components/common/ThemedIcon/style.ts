import styled from "@emotion/styled";

export const Icon = styled.img<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  object-fit: contain;
  object-position: center;
`;
