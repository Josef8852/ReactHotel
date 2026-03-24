import type { LoginFormValues, SubmitedSignup } from "../features/auth/authTypes";
import type { LoginType, updatedData, UpdateUserArgs } from "./apiTypes";
import supabase, { supabaseUrl } from "./supabase"



export const signup = async ({ fullName, email, password }:
  SubmitedSignup) => {
  
  const { data, error } = await supabase.auth.signUp({
    email, password, options: {
      data: {
        fullName,
        avatar : "",
      }
    }
  });
  
  if (error) throw new Error(error.message);
  
  return data;
} 


export const login : LoginType = async ({email  , password} : LoginFormValues) => {
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw new Error(error.message)
  }

  
  return data;
}



export const logout = async () => {
  
  const {error } = await supabase.auth.signOut();
  
  if (error) throw new Error(error.message);
}

export const getCurrentUser = async () => {
  
  const {data : session } = await supabase.auth.getSession();
  
  if (!session.session) return null;
  
  const { data, error } = await supabase.auth.getUser();
  
  if (error) {
    throw new Error(error.message)
  }
  
  return data.user; 
}


export const updateCurrentUser = async ({
  password,
  fullName,
  avatar,
}: Partial<UpdateUserArgs>) => {
  
  const updateData  : Partial<updatedData>  = {}; 
  

  if (password) updateData.password = password;
  
  if (fullName) updateData.data = { fullName };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  let userId : string | undefined = data.user?.id;
 
  if (!userId) {
    const { data: userData } = await supabase.auth.getUser();
    userId = userData.user?.id;
  }

  if (!avatar) return data;

  const fileName = `avatar${userId}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;

  const { data: updatedUser, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: avatarUrl,
      },
    });

  if (updateError) throw new Error(updateError.message);

  return updatedUser;
};