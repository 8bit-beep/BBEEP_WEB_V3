import {TableColumnProps} from "../../../types/props/table/tableColumnProps.ts";

const TableColumnElem = (props: TableColumnProps) => {
    return (
        <div
            className="text-xl text-black font-normal flex items-center justify-center text-center"
            style={{ flex: `${props.$flex} 1 0%` }}
        >
            {props.children}
        </div>
    );
};

export default TableColumnElem;
