import type { Cabin } from "../features/cabins/CabinTypes";
import supabase from "./supabase"

export const getCabins = async () => {
  
  
  const { data: cabins, error } = await supabase
    .from('cabins')
    .select('*');
  
  if (error) {
    console.error("Cabins couldnt be loaded");
    throw new Error("Cabins couldnt be loaded");
  }
  
  return cabins;
}


export const createCabin = async (newCabin : Cabin) => {
  
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin]);
  
  
  if (error) {
    console.error("Cabins couldnt be created");
    throw new Error("Cabins couldnt be created");
  }
  
  return data;

}


export const deleteCabin = async (id: number) => {
  
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq("id", id);
  
  if (error) {
    console.error("Cabin couldnt deleted");
    throw new Error("Cabin couldnt be deleted");
  }
  
  return data;
}