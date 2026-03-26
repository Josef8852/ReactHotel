import { useQuery } from "@tanstack/react-query"
import { getStaysTodayActivity } from "../../services/apiBookings"




export const useActivity = () => {
  
  const { data: activities, isLoading } = useQuery({
    queryKey: ["activity"], 
    queryFn  : getStaysTodayActivity
  })
  
  return {activities , isLoading}
}