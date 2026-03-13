import { useRef , useEffect } from "react";
import type { Handler, useClickType } from "./hooksTypes";


export const useClickOutside : useClickType = <T extends HTMLElement>(handler : Handler) => {
  
  const ref = useRef<T | null>(null);

  useEffect(() => {
    
  const handleClick = (e: Event) => {
    // if outside Modal -> close 
    if (ref.current && !ref.current.contains(e.target as Node)) {
      handler();
    }
  }
  
  document.addEventListener("click", handleClick ,true);
  
  return () => document.removeEventListener("click", handleClick ,true);
  
}, [handler])
  
  return { ref };
  
} 