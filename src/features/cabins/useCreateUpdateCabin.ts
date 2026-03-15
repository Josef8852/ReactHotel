import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import type { UseFormReset } from "react-hook-form";
import type { CabinFormValues } from "./CabinsTypes";


export const useCreateUpdateCabin = (editId : number | undefined , reset : UseFormReset<CabinFormValues>) => {
  
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
  
  mutationFn: createEditCabin,
  
    onSuccess: (data) => {
    
      
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
    
    if (editId) {
      toast.success("Cabin updated Successfully");
      reset(data);
    }
    else {
      toast.success("Cabin created Successfully");
      reset();
    }
    
    

    
  },
  onError: (err) => {
    
    toast.error(err.message);
  },
})
  
  return { mutate, isPending };
  
}