import type { NewCabin } from "../features/cabins/CabinTypes";
import supabase, { supabaseUrl } from "./supabase"

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



export const createCabin = async (newCabin: NewCabin) => {
  
  
  
  const imageName: string =  `${Math.random()}-${(newCabin?.image as File).name}`.replaceAll("/", "");


  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  
  const { data, error: createError } = await supabase
    .from('cabins')
    .insert([{...newCabin , image:imagePath}]);
  
  
  if (createError) {
    console.error("Cabins couldnt be created");
    throw new Error("Cabins couldnt be created");
  }
  
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  
  
  if (storageError) {
    await supabase
      .from('cabins')
      .delete()
      .eq("id", newCabin.id);
    console.error("Image upload failed");
    throw new Error("Image upload failed");
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