import { TableHeaderProps } from "../../../types/props/table/tableHeaderProps.ts";
import ThemedIcon from "../ThemedIcon";

const TableHeader = (props: TableHeaderProps) => {
    return (
        <div className="flex items-center w-full bg-white justify-between px-10 py-5">
            {/* title & icon & description wrap*/}
            <div className="flex items-center gap-3">
                <ThemedIcon src={props.icon} width="2rem" height="2rem" />
                {/* title & description */}
                <div className="flex flex-col">
                    <div className="text-black text-2xl font-semibold">
                        {props.title}
                    </div>
                    <div className="text-xs text-black font-normal">
                        {props.description}
                    </div>
                </div>
            </div>
            <div className="flex gap-4">{props.children}</div>  {/* 버튼이나 드롭다운을 children에 넣기*/}
        </div>
    );
};

export default TableHeader;
