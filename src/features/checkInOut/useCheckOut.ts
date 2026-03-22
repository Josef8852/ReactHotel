import { useQueryClient ,useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";
import type { Booking } from "../bookings/BookingTypes";


export const useCheckOut = () => {
  
  const queryClient = useQueryClient();
  

  
  
  const { mutate, isPending } = useMutation({
  
    mutationFn: ({ id, booking }: { id: number; booking: Partial<Booking> }) =>
      updateBooking(id, booking),
  
    onSuccess: (booking) => {
   
      toast.success(`Booking #${booking.id} checked out Successfully`);
      
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
      
   
    
  },
  onError: () => {
    
    toast.error("There was an error while checking out");
  },
})
  
  return { mutate, isPending };
  
  
}