import supabase from "./supabase";
import { type SettingToUpdate } from "../features/settings/SettingsTypes";

export const  getSettings = async () => {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data;
}


export const updateSetting = async (newSetting: SettingToUpdate) =>  {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
}