import type { ReactNode ,ReactElement} from "react";
import type { Cabin } from "../features/cabins/CabinTypes";



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

////////////////////////

export interface ConfirmDeleteProps {
  resourceName: string; 
  onConfirm: () => void; 
  disabled: boolean;
  onCloseModal?: (state: boolean) => void; // Comes from cloning inside Modal.Window
}


// Table Compount Component

export interface TableCommonRow {
  columns: string;
}

export interface RowTableprops {
  children: ReactNode;
}

export interface HeaderTableProps {
    children: ReactNode;
}

export interface BodyTableProps {
  data: Array<Cabin>
  render: (cabin: Cabin) => ReactNode;
}


interface FooterProps {
  children: ReactNode;
}

interface TableProps {
  columns: string;
  children: ReactNode;
}




export interface TableCompound extends React.FC<TableProps> {
  Header: React.FC<HeaderTableProps>;
  Row: React.FC<RowTableprops>;
  Body: React.FC<BodyTableProps>;
  Footer: React.FC<FooterProps>;
}

export interface TableContextTypes {
  columns: string;
}