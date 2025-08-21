import { ThemedIconProps } from "../../types/props/themedIconProps";

const ThemedIcon = ({ src, width, height }: ThemedIconProps) => {
    return (
        <img
            src={src}
            className="object-contain object-center"
            style={{ width: width, height: height }}
        />
    );
};

export default ThemedIcon;
