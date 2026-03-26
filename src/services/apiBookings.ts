import type { Booking } from "../features/bookings/BookingTypes";
import { getToday } from "../utils/helpers";
import type { Filter, getBookingsPromise, Sort } from "./apiTypes";
import { MAX_BOOKINGS } from "../utils/constants";
import supabase from "./supabase";
import { endOfDay, isToday, startOfDay } from "date-fns";


export const getBookings = async (filter: Filter, sort: Sort, page: number)
  : Promise<getBookingsPromise> => {
  
  let query = supabase.from("bookings").select("*,cabins(name),guests(fullName,email)",
    { count: "exact" });
  
  
  if (filter) {
    query = query[filter.method || "eq"].call(query, filter.field, filter.value);
    // this->eq
  }
  
  if (sort) {
    query = query.order(sort.field , {ascending:sort.direction === "asc"});
  }
  
  if (page) {
    const from = (page - 1) * MAX_BOOKINGS;
    const to = from + MAX_BOOKINGS - 1;
    query = query.range(from ,to);
  }
  
  
  const { data, error , count } = await query;
  
  
  
  if (error) {
    console.error(error);
    throw new Error("Booking couldnt be loaded");
  }
  
  return {data , count : count ?? undefined}
  
}

export const getBooking = async (id : number) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export const  getBookingsAfterDate =  async (date : string) : Promise<Partial<Booking>[]> => {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export const getStaysAfterDate = async (date : string) : Promise<Booking[]> => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday({end: true}));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Activity means that there is a check in or a check out today

export const getStaysTodayActivity = async (): Promise<Booking[]> => {
  const todayStart = startOfDay(new Date()).toISOString();
  const todayEnd = endOfDay(new Date()).toISOString();

  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `status.eq.unconfirmed,startDate.gte.${todayStart},startDate.lte.${todayEnd}`
    )
    .or(
      `status.eq.checked_in,endDate.gte.${todayStart},endDate.lte.${todayEnd}`
    )
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  
  // Coming or leaving today
  const todayBookings = data?.filter(
     (booking) =>
       (booking.status === "unconfirmed" && isToday(new Date(booking.startDate))) ||
       (booking.status === "checked_in" && isToday(new Date(booking.endDate)))
   );

  return todayBookings;
};

export const updateBooking = async (id : number , obj:Partial<Booking>) => {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export const deleteBooking = async (id : number) => {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}