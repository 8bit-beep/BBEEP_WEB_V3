import { COLOR } from "../../../style/color/color.ts";
import React from "react";

interface ApproveButtonProps {
    isApproved: boolean;
    mutate: any;
    children: React.ReactNode;
}

const ApproveButton = ({
    isApproved,
    mutate,
    children,
}: ApproveButtonProps) => {
    return (
        <div
            className="py-1 px-3 rounded-xl"
            style={{ backgroundColor: isApproved ? COLOR.Red : COLOR.Main }}
            onClick={() => {
                mutate();
            }}
        >
            {children}
        </div>
    );
};

export default ApproveButton;
