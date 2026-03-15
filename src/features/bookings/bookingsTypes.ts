import type { Cabin } from "../cabins/CabinsTypes";

// DB
export interface Booking {
  created_at: Date; 
  startDate: Date; 
  endDate: Date; 
  numNights: number; 
  numGuests: number; 
  cabinPrice: number; 
  extrasPrice: number; 
  totalPrice: number;
  status: "confirmed" | "unconfirmed";
  hasBreakfast: boolean; 
  isPaid: boolean; 
  observasions: string; 
  cabinId: Cabin["id"];
  guestId: number;
}

export interface BookingRowProps {
  booking: Booking;
}