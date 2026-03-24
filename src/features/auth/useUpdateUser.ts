import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCurrentUser } from "../../services/apiAuth";
import type { UpdateUserArgs } from "../../services/apiTypes";
import toast from "react-hot-toast";




export const useUpdateUser = () => {
  
  const queryClient = useQueryClient();
  
  const { mutate  :updateUser , isPending } = useMutation({
    mutationFn: ({ password, avatar, fullName }: Partial<UpdateUserArgs>) =>
      updateCurrentUser({ password, avatar, fullName }), 
    
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"]
      });
      toast.success("User updated Successfully");
    },
    
    
    onError: () => {
       toast.error("Something went wrong while updating user");
    }
    
  });
  
  
  return {updateUser , isPending}
}