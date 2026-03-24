import type { ReactNode } from "react";



export interface DarkModeContextTypes {
  isDarkMode: boolean; 
  toggleDarkMode: () => void; 
}

export interface DarkModeProviderProps {
  children: ReactNode;
}