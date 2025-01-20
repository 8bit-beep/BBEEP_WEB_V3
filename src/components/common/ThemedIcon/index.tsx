import { Icon } from "./style";

const ThemedIcon = ({
  src,
  width,
  height,
}: {
  src: string;
  width: string;
  height: string;
}) => {
  return <Icon src={src} $height={height} $width={width} />;
};

export default ThemedIcon;
