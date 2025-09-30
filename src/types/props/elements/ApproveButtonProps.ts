import React from "react";

export interface ApproveButtonProps {
    isApproved: boolean;
    mutate: any;
    children: React.ReactNode;
}
