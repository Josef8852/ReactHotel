import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import type { Booking } from "./BookingTypes"
import { useSearchParams } from "react-router-dom"
import type { Filter } from "../../services/apiTypes"

export const useBookings = () => {
  
  const [searchParams] = useSearchParams();
  
  const filterValue = searchParams.get("status");
  
  const filter : Filter = !filterValue || filterValue === "all" ? null :
    {
      field: "status", // in DB 
      value: filterValue,
      method : "eq"
    }
  
  const {isLoading , data:bookings,error} = useQuery<Booking[]>({
    queryKey: ['bookings' , filter],
    queryFn: () =>  getBookings(filter),
  })
  
  
  return {isLoading , error , bookings}
  
}