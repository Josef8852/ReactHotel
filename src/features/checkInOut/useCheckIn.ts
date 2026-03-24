import { useQueryClient ,useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import type { Booking } from "../bookings/BookingTypes";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useCheckIn = () => {
  
  const queryClient = useQueryClient();
  
  const navigate = useNavigate();
  
  
  const { mutate, isPending } = useMutation({
  
    mutationFn: ({ id, booking }: { id: number; booking: Partial<Booking> }) =>
      updateBooking(id, booking),
  
    onSuccess: (booking) => {
   
      toast.success(`Booking #${booking.id} checked in Successfully`);
      
      queryClient.invalidateQueries({
        queryKey: ['booking' , booking.id],
      });
      
      navigate("/");
    
  },
  onError: () => {
    
    toast.error("There was an error while checking in");
  },
})
  
  return { mutate, isPending };
  
  
}