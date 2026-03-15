import type { SortOptionsObj } from "../../ui/UITypes";
import type { Cabin } from "./CabinTypes";



const useSortCabins = (value: SortOptionsObj["value"], cabinsToSort: Cabin[]) : Cabin[] => {
  
  const [field, direction] = value.split("-") as [keyof Cabin , "asc" | "desc"];
  

  
  const modifier: number = direction === "asc" ? 1 : -1;
  
  return cabinsToSort.sort((a, b) => {
    
    const aVal = a[field]; 
    const bVal = b[field];
    
    if (typeof aVal === "string" && typeof bVal === "string") {
      return aVal.localeCompare(bVal)  * modifier;
    }    
   
      return (Number(aVal) - Number(bVal)) * modifier;
    
    
  });
  
  
}


export default useSortCabins; 