import { type Cabin } from "./CabinTypes";


const useFilterCabins = (value: string, cabinsToFilter: Cabin[]): Cabin[] => {
  
  let filteredCabins : Cabin[] = []; 
  
  if (value === "all" && cabinsToFilter) filteredCabins = cabinsToFilter;
  
  if (value === "no-discount" && cabinsToFilter) {
    filteredCabins = cabinsToFilter?.filter((cabin) => cabin.discount === 0);
  }
  
  if (value === "with-discount" && cabinsToFilter) {
    filteredCabins = cabinsToFilter?.filter((cabin) => cabin.discount !== 0);
  }
  
  
  return filteredCabins;
}

export default useFilterCabins;