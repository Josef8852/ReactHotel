import type { NewCabin } from "../features/cabins/CabinsTypes"

export type CreateEditCabinArgs = {
  newCabin: NewCabin; 
  id?: number; 
}

export type Filter = {
  field: string;
  value: string;
  method: "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
} | null;

export type Sort  = {
  field: string; 
  direction: string;
}