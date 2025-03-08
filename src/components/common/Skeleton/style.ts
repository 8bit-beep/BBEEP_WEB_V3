import {keyframes} from "@emotion/react";
import styled from "@emotion/styled";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const SkeletonBase = styled.div<{
  width?: string;
  height?: string;
  borderRadius?: string;
}>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '16px'};
  border-radius: ${props => props.borderRadius || '4px'};
`;
