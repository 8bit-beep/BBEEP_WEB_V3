import { COLOR } from "../../../style/color/color";

interface TableButtonProps {
    isSelected: boolean;
    onClick: any;
    children: React.ReactNode;
}

const TableButton = ({ ...props }: TableButtonProps) => {
    return (
        <div
            className="flex items-center justify-center w-16 h-9 rounded-xl text-base text-white"
            style={{ background: props.isSelected ? COLOR.Main : COLOR.Red }}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

export default TableButton;
