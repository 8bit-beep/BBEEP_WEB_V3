import { ReactNode } from "react";

export interface MainSecionProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  href: string;
  icon: string;
}