import type { LoginData, LoginType } from "./apiTypes";
import supabase from "./supabase"


export const login : LoginType = async ({email  , password}) : Promise<LoginData> => {
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw new Error(error.message)
  }

  
  return data;
}