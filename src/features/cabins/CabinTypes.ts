
//DB
 export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string ;
}

//Form
export type CabinFormValues = Omit<Cabin, "image"> & {
  image: FileList;
};

//Upload image
export type NewCabin = Omit<Cabin, 'image'> & {
  image: string | File;
};

export interface CabinRowProps {
  cabin: Cabin;
}

export interface CabinFormProps {
  cabinToEdit?: Cabin;
}