import { ReactNode } from "react";

export interface MainSecionProps {
  children: ReactNode;
  title: string;
  subtitle?: string | ReactNode;
  href: string;
  icon: string;
}