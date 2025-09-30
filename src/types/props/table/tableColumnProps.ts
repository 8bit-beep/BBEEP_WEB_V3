import React from "react";

export interface TableColumnProps {
    $flex: number;

    $notCenter?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
