import React from "react";

export interface TableButtonProps {
    isSelected: boolean;
    onClick: () => void;
    children: React.ReactNode;
}
