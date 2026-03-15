import type { ReactNode ,ReactElement, SetStateAction, Dispatch} from "react";




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

export interface BodyTableProps<T> {
  data: T[];
  render: (item: T) => ReactNode;
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
  Body: <T>(props: BodyTableProps<T>) => ReactNode;
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

export type SortOptionsObj = {
  value:
    "" |
  "name-asc" |
  "name-desc" |
  "regularPrice-asc" |
  "regularPrice-desc" |
  "maxCapacity-asc" |
  "maxCapacity-desc" ;
  
  label:
  "Sort by name (A-Z)" |
  "Sort by name (Z-A)" |
  "Sort by price (low frist)" |
  "Sort by price (high frist)" |
  "Sort by capacity (high frist)" |
  "Sort by capacity (low frist)";
}

export interface SortByProps {
  options : Array<SortOptionsObj>
}

export interface SelectProps extends SortByProps {
  value: SortOptionsObj["value"];
  type: "white";
  onChange: (e:React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface EmptyProps {
  resourceName: string;
}