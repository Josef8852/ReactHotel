import type { ReactNode ,ReactElement, SetStateAction, Dispatch} from "react";
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


// Table Compound Component

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

// Menus Compound Component



export interface MenusProps {
  children: ReactNode;
}

 interface MenuProps {
  children: ReactNode;
}

export interface ToggleProps {
  id: number;
}



export interface ListProps {
  children: ReactNode;
  id: number; 
}

type Position = {
  x: number;
  y: number;
}

export interface StyledListProps {
  position: Position | null;
}

export interface MenuButtonProps {
  children: ReactNode;
}

export interface MenusCompound extends React.FC<MenusProps> {
  Menu: React.FC<MenuProps>;
  Toggle: React.FC<ToggleProps>;
  List: React.FC<ListProps>
  MenuButton : React.FC<MenuButtonProps>
}


export interface MenusContextTypes extends StyledListProps {
  openId: number | null;
  close: () => void;
  open: Dispatch<SetStateAction<number | null>>
  setPosition : Dispatch<SetStateAction<Position | null>>
}

////////////////////////



