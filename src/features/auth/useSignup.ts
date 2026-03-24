import { useMutation } from "@tanstack/react-query"
import { signup as signupApi } from "../../services/apiAuth"
import toast from "react-hot-toast";
import type { SubmitedSignup } from "./authTypes";






export const useSignup = () => {
  
  const { isPending, mutate : signup } = useMutation({
    mutationFn: ({fullName , email , password} : SubmitedSignup) => signupApi({fullName , email , password}), 
    
    onSuccess: () => {
      toast.success("Signed up Successfully , please verify your account");

    }, 
    
    onError: () => {
      toast.error("Something went wrong")
    }
    
  });
  
  
  return {isPending, signup}
  
}