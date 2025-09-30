import {TableColumnProps} from "../../../types/props/table/tableColumnProps.ts";

const TableColumn = (props: TableColumnProps) => {
    return (
        <p
            className="text-xl text-white font-semibold"
            style={{
                textAlign: props.$notCenter ? "start" : "center",
                flex: `${props.$flex}`,
            }}
        >
            {props.children}
        </p>
    );
};

export default TableColumn;
