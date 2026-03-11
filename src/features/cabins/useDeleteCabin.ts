import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";


export const useDeleteCabin = () => {
  
  const queryClient = useQueryClient();
  
  
  const {isPending, mutate}= useMutation({
    mutationFn: deleteCabin,
    // Fetch Again
    onSuccess: () => {
      
      toast.success("Cabin successfully deleted");
      
      queryClient.invalidateQueries({
        queryKey : ['cabins']
      })
    }, 
    
    onError: (err) => {
      toast.error(err.message);
    }
  });
  
  return { isPending, mutate };
  
}


