import type { ReactNode ,ReactElement } from "react";

 export interface RowProps {
  variant?: "horizontal" | "vertical";
 }

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
}
 
export interface FormRowProps {
  label?: string; 
  error?: string | undefined; 
  children: ReactNode;
  id?: string;
}


export interface FormProps {
  type : "modal" | "regular"
}



// Modal Compound Component

export interface WindowProps {
  children: ReactElement<{ onCloseModal?: () => void }>;
  name: string;
}


export interface OpenProps {
  children: ReactElement<{ onClick?: () => void }>; 
  opens: string; 
}

export interface ModalProps {
  children: ReactNode;
}

export interface ModalCompound extends React.FC<ModalProps> {
  Open: React.FC<OpenProps>
  Window : React.FC<WindowProps>
}

export interface ModalContextProps {
  openName: string; 
  close: () => void;  
  open: (state: string) => void; 
}