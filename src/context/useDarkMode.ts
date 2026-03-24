import { createContext, useContext } from "react";
import type { DarkModeContextTypes } from "./contextTypes";

export const DarkModeContext = createContext<DarkModeContextTypes>({
  isDarkMode: false, 
  toggleDarkMode : () => {}
});

const useDarkMode = () => {
  
  const context = useContext(DarkModeContext);
  
  if (!context) throw new Error("DarkMode Context was used outside DarkMode Provider");
  
  return context;
}


export default useDarkMode; 