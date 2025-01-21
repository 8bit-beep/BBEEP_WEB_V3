import { FC } from "react";
import { Icon } from "./style";
import { ThemedIconProps } from "../../../types/props/themedIconProps";

const ThemedIcon: FC<ThemedIconProps> = ({ src, width, height }) => {
  return <Icon src={src} $height={height} $width={width} />;
};

export default ThemedIcon;
