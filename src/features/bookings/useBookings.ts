import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"
import type { Filter, getBookingsPromise, Sort } from "../../services/apiTypes"

export const useBookings = () => {
  
  const queryClient = useQueryClient();
  
  const [searchParams] = useSearchParams();
  
  const page: number = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  
  const filterValue = searchParams.get("status");
  
  
  
  const filter : Filter = !filterValue || filterValue === "all" ? null :
    {
      field: "status", // in DB 
      value: filterValue,
      method : "eq"
    }
  
  const sortValue  = searchParams.get("sortBy") || "startDate-desc";
  
  const [field, direction] = sortValue.split("-");
  
  const sort: Sort = { field, direction };
  
  
  
  const { isLoading, data: bookings, error  } = useQuery<getBookingsPromise>({
    queryKey: ['bookings' , filter , sort , page],
    queryFn: () =>  getBookings(filter , sort , page),
  })
  
  
  //PRE-FETCHING better UX
  queryClient.prefetchQuery({
    queryKey: ['bookings' , filter , sort , page + 1],
    queryFn: () =>  getBookings(filter , sort ,page),
  })
  
  return {isLoading , error , bookings }
  
}