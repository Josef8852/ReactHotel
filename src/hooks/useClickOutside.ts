import { useRef , useEffect } from "react";
import type { Handler, useClickType } from "./hooksTypes";


export const useClickOutside : useClickType = <T extends HTMLElement>(handler : Handler , listen = true) => {
  
  const ref = useRef<T | null>(null);

  useEffect(() => {
    
  const handleClick = (e: Event) => {
    // if outside Modal -> close 
    if (ref.current && !ref.current.contains(e.target as Node)) {
      handler();
    }
  }
  
  document.addEventListener("click", handleClick ,listen);
  
  return () => document.removeEventListener("click", handleClick ,listen);
  
}, [handler , listen])
  
  return { ref };
  
} 