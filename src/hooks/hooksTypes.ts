import type { RefObject } from "react";


export type Handler = () => void; 


// Generic type by default its a div but we can pass any Html eleemnt to use the hook 

export type useClickType = <T extends HTMLElement>(
  handler: Handler
) => { ref: RefObject<T | null> };