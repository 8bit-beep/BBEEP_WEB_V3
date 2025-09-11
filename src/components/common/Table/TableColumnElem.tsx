export interface TableColumnElemProps {
    $flex: number;
    children: React.ReactNode;
}

const TableColumnElem = (props: TableColumnElemProps) => {
    return (
        <div
            className="text-base text-black font-normal flex items-center justify-center text-center"
            style={{ flex: `${props.$flex} 1 0%` }}
        >
            {props.children}
        </div>
    );
};

export default TableColumnElem;
