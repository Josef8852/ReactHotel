import type { RefObject } from "react";


type handler = () => void; 

export type useClickType = (handler: handler) => {ref :  RefObject<HTMLDivElement | null>};