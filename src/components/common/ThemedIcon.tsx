import {ThemedIconProps} from "../../types/props/elements/themedIconProps.ts";

const ThemedIcon = (props: ThemedIconProps) => {
    return (
        <img
            src={props.src}
            className="object-contain object-center"
            style={{width: props.width, height: props.height}}
            alt='사진이 없습니다.'/>
    );
};

export default ThemedIcon;
