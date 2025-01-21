import { Icon } from "./style";
import { ThemedIconProps } from "../../../types/props/themedIconProps";

const ThemedIcon = ({ src, width, height }: ThemedIconProps) => {
  return <Icon src={src} $height={height} $width={width} />;
};

export default ThemedIcon;
