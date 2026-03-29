import type { ReactNode } from "react";



export interface AppContextTypes {
  isDarkMode: boolean; 
  toggleDarkMode: () => void; 
  isBurger: boolean; 
  toggleBurger: () => void;
}

export interface AppProviderProps {
  children: ReactNode;
}