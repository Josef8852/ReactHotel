import { useMutation } from "@tanstack/react-query"
import { login as LoginApi } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";




export const useLogin = () => {
  
  const navigate = useNavigate();
  
  const {mutate : login , isPending} = useMutation({
      
    mutationFn : ({email , password} : {email  :string , password : string}) => LoginApi({email , password}),
    
    onSuccess: () => {
      toast.success("Loged in Successfully!")
      navigate("/")
    },
    
    onError: () => {
      toast.error("Invalid Email or Password");
    }
    
  })
  
  return {login , isPending}
  
}