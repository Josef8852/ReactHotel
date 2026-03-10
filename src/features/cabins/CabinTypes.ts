

interface Cabin {
  id: number; 
  name: string; 
  maxCapacity: number; 
  regularPrice: number;
  discount: number;
  description: string; 
  imageUrl: string; 
}

export interface CabinRowProps {
  cabin: Cabin;
}

export type SubmitData = Omit<Cabin, "id" | "imageUrl">;