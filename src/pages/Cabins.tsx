import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

const Cabins:React.FC = () => {
  return (
    <>
    <Row variant="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
    
    <Row>
      <CabinTable/>
    </Row>
   </>
  );
}

export default Cabins;