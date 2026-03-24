import { useQueryClient ,useMutation } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import type { SettingsObj } from "./SettingsTypes";
import toast from "react-hot-toast";


export const useUpdateSetting = () => {
  
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
  
  mutationFn: (setting : Partial<SettingsObj>) => updateSetting(setting),
  
    onSuccess: () => {
   
      toast.success("Setting updated Successfully");
      
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });

    
  },
  onError: (err) => {
    
    toast.error(err.message);
  },
})
  
  return { mutate, isPending };
  
  
}