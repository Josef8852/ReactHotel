
// DB
export interface Booking {
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
  cabinId: number;
  guestId: number;
}