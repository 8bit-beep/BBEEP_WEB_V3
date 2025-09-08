import React from "react";

interface TableItemContentProps {
    flex: string;
    notCenter?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const TableItemContent = ({
    flex,
    notCenter,
    style,
    children,
}: TableItemContentProps) => {
    return (
        <p
            className="text-base h-16 items-center overflow-ellipsis whitespace-nowrap overflow-hidden"
            style={{
                flex,
                justifyContent: notCenter ? undefined : "center",
                ...style,
            }}
        >
            {children}
        </p>
    );
};

export default TableItemContent;
