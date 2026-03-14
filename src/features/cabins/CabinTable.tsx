import { useCabins } from "./useCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import type { Cabin } from "./CabinTypes";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import useFilterCabins from "./useFilterCabins";




const CabinTable: React.FC = () => {
  
  const { isLoading, cabins } = useCabins();
  
  const [searchParams] = useSearchParams();
  
  const filterValue: string = searchParams.get("discount") || "all";
  
  const filteredCabins: Cabin[] = useFilterCabins(filterValue, cabins!);
  
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
      <Table.Body render={(cabin : Cabin) => <CabinRow cabin={cabin} key={cabin.id} /> } data={filteredCabins} />
      </Table>
    </Menus>
  )
}


export default CabinTable; 