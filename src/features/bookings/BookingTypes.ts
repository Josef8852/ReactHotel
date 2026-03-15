import type { Cabin } from "../cabins/CabinsTypes";
import type { Guest } from "../guests/GuestsTypes";

// DB
export interface Booking {
  id: number;
  created_at: Date; 
  startDate: Date; 
  endDate: Date; 
  numNights: number; 
  numGuests: number; 
  cabinPrice: number; 
  extrasPrice: number; 
  totalPrice: number;
  status:  "unconfirmed" | "checked_in" | "checked_out";
  hasBreakfast: boolean; 
  isPaid: boolean; 
  observasions: string; 
  cabins: Cabin;
  guests: Guest;
  cabinID: number; 
  guestID: number;
}

export interface BookingRowProps {
  booking: Booking;
}