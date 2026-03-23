import type { AuthSession, User } from "@supabase/supabase-js";
import type { Booking } from "../features/bookings/BookingTypes";
import type { NewCabin } from "../features/cabins/CabinsTypes"


export interface CreateEditCabinArgs  {
  newCabin: NewCabin; 
  id?: number; 
}

export  type Filter  =  {
  field: string;
  value: string;
  method: "eq" | "neq" | "gt" | "gte" | "lt" | "lte";
} | null 

export interface Sort   {
  field: string; 
  direction: string;
}

export interface getBookingsPromise  {
  data: Booking[]; 
  count?: number  ;
}


interface LoginData {
  user: User;
  session : AuthSession
}


export type LoginType = ({ email, password }: { email: string, password: string })
  => Promise<LoginData>