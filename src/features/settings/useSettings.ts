import { useQuery } from "@tanstack/react-query"
import { getSettings } from "../../services/apiSettings";
import { type SettingsObj } from "./SettingsTypes";

export const useSettings = () => {
  
  const {isLoading, error , data:settings} = useQuery<SettingsObj>({
    queryKey: ["settings"],
    queryFn : getSettings
  });
  

  
  return { isLoading, error, settings };
  
}