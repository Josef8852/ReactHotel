import { useRecentBookings } from "./useRecentBookings";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationCharts";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;




const DashboardLayout: React.FC = () => {
  
  const { isLoading : bookingLoading, bookings } = useRecentBookings();
  
  const { isLoading: staysLoading, stays, confirmedStays, numDays } = useRecentStays();
  
  const {cabins, isLoading : cabinsLoading} = useCabins();
 
  if(bookingLoading || staysLoading || cabinsLoading) return <Spinner/>
  
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings ?? []} confirmedStays={confirmedStays ?? []} numDays={numDays}
        totalCabins={cabins?.length ?? 0} /> 
      <DurationChart confirmedStays={confirmedStays ?? []}/>
      <SalesChart bookings={bookings ?? []} numDays={numDays} />
    </StyledDashboardLayout>
  )
  
}


export default DashboardLayout;