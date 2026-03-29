import { useEffect, useState } from "react"
import type { AppProviderProps } from "./contextTypes";
import { AppContext } from "./useAppContext";


const AppProvider:React.FC<AppProviderProps> = ({children}) => {
  
  const matchesDarkMode: boolean = window.matchMedia("(prefers-color-scheme:dark)").matches  ; 
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(matchesDarkMode);
  
  
  const [isBurger, setIsBurger] = useState<boolean>(false);
    
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    }
    else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  
  
  const toggleDarkMode = () : void => {
    setIsDarkMode((mode) => !mode)
  }
 
  const toggleBurger = () :void => {
    setIsBurger((isBurger) => !isBurger);
  }
  
  
  return (
    <AppContext.Provider value={{
      isDarkMode,toggleDarkMode,isBurger,toggleBurger
    }}>
      {children}
    </AppContext.Provider>
  )
}


export default AppProvider;



