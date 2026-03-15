import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import type { Booking } from "./BookingTypes"

export const useBookings = () => {
  
  const {isLoading , data:bookings,error} = useQuery<Booking[]>({
    queryKey: ['bookings'],
    queryFn:  getBookings,
  })
  
  
  return {isLoading , error , bookings}
  
}