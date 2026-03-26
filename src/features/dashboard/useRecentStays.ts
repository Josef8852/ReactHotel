import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom"
import {  getStaysAfterDate } from "../../services/apiBookings";





export const useRecentStays = () => {
  
  const [searchParams] = useSearchParams();
  
  const numDays  = !searchParams.get("last") ? 7 :
    Number(searchParams.get("last"));
  
  const queryDate = subDays(new Date(), numDays).toISOString();
  
  const { isLoading , data : stays } = useQuery({
    queryKey : ["stays" , numDays] ,
    queryFn: () => getStaysAfterDate(queryDate), 
    
  });
  
  
  const confirmedStays = stays?.filter((stay) => (stay.status === "checked_in") || (stay.status === "checked_out"));
  
  
  return { confirmedStays  , isLoading , numDays}
  
}