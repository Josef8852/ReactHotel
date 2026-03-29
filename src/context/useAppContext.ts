import { createContext, useContext } from "react";
import type { AppContextTypes } from "./contextTypes";

export const AppContext = createContext<AppContextTypes>({
  isDarkMode: false, 
  toggleDarkMode: () => {}, 
  isBurger: false, 
  toggleBurger : () => {}
});

const useAppContext = () => {
  
  const context = useContext(AppContext);
  
  if (!context) throw new Error("DarkMode Context was used outside DarkMode Provider");
  
  return context;
}


export default useAppContext; 