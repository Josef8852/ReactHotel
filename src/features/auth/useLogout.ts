import { useMutation, useQueryClient,  } from "@tanstack/react-query"
import { logout as logoutApi} from "../../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export const useLogout = () => {
  
  const navigate = useNavigate();
  
  const queryClient = useQueryClient();
  
  const {mutate  : logout, isPending } = useMutation({
    mutationFn: logoutApi, 
    
    onSuccess: () => {
      queryClient.removeQueries(); // remove all queries
      navigate("/login" , {replace : true});
    },
    
    
    onError: () => {
      toast.error("Logout failed");
    }
    
    
  })
  
  
  return { logout, isPending };
  
}