import { useEffect, useState } from "react"
import type { DarkModeProviderProps } from "./contextTypes";
import { DarkModeContext } from "./useDarkMode";





const DarkModeProvider:React.FC<DarkModeProviderProps> = ({children}) => {
  
  const osMode: boolean = window.matchMedia("(prefers-color-scheme:dark)").matches  ; 
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(osMode);
  
    
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
  
  
  return (
    <DarkModeContext.Provider value={{
      isDarkMode,toggleDarkMode
    }}>
      {children}
    </DarkModeContext.Provider>
  )
}


export default DarkModeProvider;



