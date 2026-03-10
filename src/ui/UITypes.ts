import type { ReactNode } from "react";

 export interface RowProps {
  variant?: "horizontal" | "vertical";
 }

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
}
 
export interface FormRowProps {
  label?: string; 
  error?: string | undefined; 
  children: ReactNode;
  id?: string;
}