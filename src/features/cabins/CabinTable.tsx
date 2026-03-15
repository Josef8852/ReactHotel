import { useCabins } from "./useCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import type { Cabin } from "./CabinsTypes";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import useFilterCabins from "./useFilterCabins";
import useSortCabins from "./useSortCabins";
import type { SortOptionsObj } from "../../ui/UITypes";




const CabinTable: React.FC = () => {
  
  const { isLoading, cabins } = useCabins();
  
  const [searchParams] = useSearchParams();
  
  const filterValue: string = searchParams.get("discount") || "all";
  
  const filteredCabins: Cabin[] = useFilterCabins(filterValue, cabins!);
  
  const sortValue  = searchParams.get("sortBy") as SortOptionsObj["value"];
  
  const sortedCabins: Cabin[] = useSortCabins(sortValue , filteredCabins!);
  
  if (isLoading) return <Spinner />
  
  
  
  return (
    <Menus>
    <Table  columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div> 
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body render={(cabin : Cabin) => <CabinRow cabin={cabin} key={cabin.id} /> } data={sortedCabins} />
      </Table>
    </Menus>
  )
}


export default CabinTable; 