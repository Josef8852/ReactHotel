import { type Cabin } from "./CabinTypes";


const useFilterCabins = (value: string, cabinsToFilter: Cabin[]): Cabin[] => {
  
 
  
  
  if (value === "no-discount" && cabinsToFilter) {
    return cabinsToFilter?.filter((cabin) => cabin.discount === 0);
  }
  
  if (value === "with-discount" && cabinsToFilter) {
    return  cabinsToFilter?.filter((cabin) => cabin.discount !== 0);
  }
  
  return cabinsToFilter;

}

export default useFilterCabins;