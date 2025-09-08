import { COLOR } from "../../../style/color/color";

interface TableButtonProps {
    isSelected: boolean;
    onClick: any;
    children: React.ReactNode;
}

const TableButton = ({ ...props }: TableButtonProps) => {
    return (
        <div
            className="py-1 px-3 rounded-xl text-base text-white"
            style={{ background: props.isSelected ? COLOR.Main : COLOR.Red }}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

export default TableButton;
