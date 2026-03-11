

// DB
export interface SettingsObj {
  minBookingLength: number; 
  maxBookingLength: number; 
  breakfastPrice: number;
  maxNumberGuestsPerBooking: number; 
  id: number; 
}


// Update Setting
export type SettingToUpdate = Partial<SettingsObj>