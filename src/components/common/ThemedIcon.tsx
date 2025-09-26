import { ThemedIconProps } from "../../types/props/themedIconProps";

const ThemedIcon = ({ src, width, height }: ThemedIconProps) => {
    return (
        <img
            src={src}
            className="object-contain object-center"
            style={{ width: width, height: height }}
         alt='사진이 없습니다.'/>
    );
};

export default ThemedIcon;
