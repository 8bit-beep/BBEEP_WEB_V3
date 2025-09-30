import {COLOR} from "../../../style/color/color.ts";
import {ApproveButtonProps} from "../../../types/props/elements/ApproveButtonProps.ts";
import {TextStyles} from "../../../style/text/TextStyles.ts";

const ApproveButton = (props: ApproveButtonProps) => {
    return (
        <div
            className={TextStyles.Body.regular + "py-1 px-3 rounded-xl"}
            style={{backgroundColor: props.isApproved ? COLOR.Red : COLOR.Main}}
            onClick={() => {
                props.mutate()
            }}
        >
            {props.children}
        </div>
    );
};

export default ApproveButton;
