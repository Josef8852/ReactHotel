import
{
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar
} from "react-icons/hi2";
import type { StatsProps } from "./dashboardTypes";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";



const Stats: React.FC<StatsProps> = ({ bookings, confirmedStays , numDays , totalCabins }) => {
  
  
  const numBookings : number  = bookings?.length ?? 0 ;
  
  const sales  = bookings?.reduce((acc, cur) => acc + cur.totalPrice! , 0);
  
  const checkins = confirmedStays.length;
  
  const occupationRate = confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * totalCabins);
  
  return (
    <>
      <Stat title="Bookings" $color="blue" icon={<HiOutlineBriefcase/>} value={String(numBookings)} />
      <Stat title="Sales" $color="green" icon={<HiOutlineBanknotes/>} value={formatCurrency(sales)} />
      <Stat title="Check ins" $color="indigo" icon={<HiOutlineCalendarDays/>} value={String(checkins)}/>
      <Stat title="Occupancy rate" $color="blue" icon={<HiOutlineChartBar />}
        value={String(Math.round(occupationRate*100) + "%")} />
    </>
  )
  
  
}


export default Stats; 