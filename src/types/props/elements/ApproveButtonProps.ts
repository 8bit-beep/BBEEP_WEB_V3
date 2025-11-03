import React from "react";

export interface ApproveButtonProps {
    isApproved: boolean;
    mutate: () => void;
    children: React.ReactNode;
}
