import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns/fp";
import { useSearchParams } from "react-router-dom"
import {  getStaysAfterDate } from "../../services/apiBookings";





export const useRecentStays = () => {
  
  const [searchParams] = useSearchParams();
  
  const numDays  = !searchParams.get("last") ? 7 :
    Number(searchParams.get("last"));
  
  const queryDate = subDays(Number(new Date()) , numDays).toISOString();
  
  const { isLoading , data : stays } = useQuery({
    queryKey : ["stays" , numDays] ,
    queryFn: () => getStaysAfterDate(queryDate), 
    
  });
  
  
  const confirmedStays = stays?.filter((stay) => stay.status !== "confirmed");
  
  
  return { confirmedStays , stays , isLoading}
  
}