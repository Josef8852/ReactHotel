import type { NewCabin } from "../features/cabins/CabinsTypes"

export type CreateEditCabinArgs = {
  newCabin: NewCabin; 
  id?: number; 
}