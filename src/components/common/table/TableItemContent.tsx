import React from "react";

interface TableItemContentProps {
    $flex: number;
    $notCenter?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const TableItemContent = ({
    $flex,
    $notCenter,
    style,
    children,
}: TableItemContentProps) => {
    return (
        <div
            className={`flex h-16 text-base overflow-hidden whitespace-nowrap ${
                $notCenter
                    ? "items-center justify-start"
                    : "items-center justify-center"
            }`}
            style={{
                flex: `${$flex} 1 0%`,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default TableItemContent;
