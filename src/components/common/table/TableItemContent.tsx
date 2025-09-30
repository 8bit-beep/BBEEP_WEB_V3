import {TableColumnProps} from "../../../types/props/table/tableColumnProps.ts";

const TableItemContent = (props: TableColumnProps) => {
    return (
        <div
            className={`flex h-16 text-base overflow-hidden whitespace-nowrap ${
                props.$notCenter
                    ? "items-center justify-start"
                    : "items-center justify-center"
            }`}
            style={{
                flex: `${props.$flex} 1 0%`,
                ...props.style,
            }}
        >
            {props.children}
        </div>
    );
};

export default TableItemContent;
