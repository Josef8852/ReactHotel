import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../../services/apiAuth";




export const useUser = () => {
  
  
  const { isLoading , data : user , fetchStatus } = useQuery({
    
    queryKey : ["user"] ,
    queryFn: getCurrentUser, 
    
   
    
  });

  const isFetching = fetchStatus === "fetching";
  
  return { isFetching,isLoading , isAuthenticated : user?.role === "authenticated"};
  
}