import type { ReactNode } from "react";
import type { Booking } from "../bookings/BookingTypes";


export interface StatProps {
  icon: ReactNode; 
  title: string; 
  value :  string; 
  $color: string; 
}


export interface StatsProps {
  bookings: Partial<Booking>[]; 
  confirmedStays: Booking[];
  numDays: number; 
  totalCabins: number;
}


export type SalesChartProps = Omit<StatsProps, "confirmedStays" | "totalCabins"> 


export interface ChartDataShape {
  label: string;
  totalSales: number; 
  extrasSales: number;
}