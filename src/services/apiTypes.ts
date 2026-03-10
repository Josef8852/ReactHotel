import type { NewCabin } from "../features/cabins/CabinTypes"

export type CreateEditCabinArgs = {
  newCabin: NewCabin; 
  id?: number; 
}