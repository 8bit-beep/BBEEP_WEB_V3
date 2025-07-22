import { COLOR } from "../../style/color/color";

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
            className="py-52 px-8 rounded-2xl"
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
