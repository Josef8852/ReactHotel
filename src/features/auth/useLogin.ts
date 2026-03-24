import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login as LoginApi } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import type { LoginFormValues } from "./authTypes";




export const useLogin = () => {
  
  const navigate = useNavigate();
  
  const queryClient = useQueryClient();
  
  const {mutate : login , isPending} = useMutation({
      
    mutationFn : ({email , password} :LoginFormValues) => LoginApi({email , password}),
    
    onSuccess: (data) => {
      toast.success("Loged in Successfully!");
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard" ,{replace : true});
    },
    
    onError: () => {
      toast.error("Invalid Email or Password");
    }
    
  })
  
  return {login , isPending}
  
}