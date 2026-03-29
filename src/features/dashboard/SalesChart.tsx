import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import useAppContext from "../../context/useAppContext";
import type { ChartDataShape, SalesChartProps } from "./dashboardTypes";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import Heading from "../../ui/Heading";


const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;


const SalesChart: React.FC<SalesChartProps> = ({bookings,numDays}) => {
  
  
  const { isDarkMode } = useAppContext();
  
  const allDates : Array<string | number | Date> = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1), // From today to currentdays - 1
    end : new Date() // today
  })
  
  
  const chartData: ChartDataShape[] = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings.filter((booking) => booking.created_at && // maybe created at is undefined
        isSameDay(date, booking.created_at)).reduce((acc, cur) =>
        acc + (cur.totalPrice ?? 0)
          , 0),
      extrasSales : bookings.filter((booking) => booking.created_at && 
        isSameDay(date, booking.created_at)).reduce((acc, cur) =>
        acc + (cur.extrasPrice ?? 0)
          , 0)
    }
  });
  
 
  
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
    };

  
  
  return (
    <StyledSalesChart>
      {/*Recharts*/}
      <Heading as="h2">Sales {`from ${format(allDates[0] ?? "" , "MMM dd yyyy")} to ${format(new Date() , "MMM dd yyyy")}`}</Heading>
      <ResponsiveContainer height={300} width="100%">
      <AreaChart data={chartData} >
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }} />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }} />
          <CartesianGrid
            strokeDasharray="4"
          />
        <Tooltip  contentStyle={{backgroundColor : colors.background}}/>
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total Sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extras Sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
      
      </StyledSalesChart>

  )
  
}


export default SalesChart;