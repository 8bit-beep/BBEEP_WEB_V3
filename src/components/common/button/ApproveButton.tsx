import {COLOR} from "../../../style/color/color.ts";
import {ApproveButtonProps} from "../../../types/props/elements/ApproveButtonProps.ts";

const ApproveButton = (props: ApproveButtonProps) => {
    return (
        <div
            className="py-1 px-3 rounded-xl"
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
