import type { RefObject } from "react";


export type Handler = () => void; 


// Generic type  ->  pass any Html element to use the hook 

export type useClickType = <T extends HTMLElement>(
  handler: Handler
) => { ref: RefObject<T | null> };