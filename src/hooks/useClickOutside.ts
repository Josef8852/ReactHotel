import { useRef , useEffect } from "react";
import type { useClickType } from "./hooksTypes";


export const useClickOutside : useClickType = (handler) => {
  
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    
  const handleClick = (e: Event) => {
    // if outside Modal -> close 
    if (ref.current && !ref.current.contains(e.target as Node)) {
      close();
    }
  }
  
  document.addEventListener("click", handleClick ,true);
  
  return () => document.removeEventListener("click", handleClick ,true);
  
}, [handler])
  
  return { ref };
  
} 