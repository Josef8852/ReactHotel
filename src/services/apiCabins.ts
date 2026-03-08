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