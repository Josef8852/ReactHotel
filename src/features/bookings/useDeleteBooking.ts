import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";



export const useDeleteBooking = () => {
  
  const queryClient = useQueryClient();
  
  
  const {isPending, mutate}= useMutation({
    mutationFn: (id : number) => deleteBooking(id),
    // Fetch Again
    onSuccess: () => {
      
      toast.success("Booking successfully deleted");
      
      queryClient.invalidateQueries({
        queryKey : ['bookings']
      })
    }, 
    
    onError: (err) => {
      toast.error(err.message);
    }
  });
  
  return { isPending, mutate };
  
}


