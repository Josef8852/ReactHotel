import { useCabins } from "./useCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import type { Cabin } from "./CabinTypes";




const CabinTable: React.FC = () => {
  
  const { isLoading, cabins } = useCabins();
  
  if(isLoading) return <Spinner/>
  
  return (
    <Table  columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body render={(cabin : Cabin) => <CabinRow cabin={cabin} key={cabin.id} /> } data={cabins!} />
    </Table>
  )
}


export default CabinTable; 