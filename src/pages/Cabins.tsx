import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CabinForm from "../features/cabins/CabinForm";

const Cabins: React.FC = () => {
  
  const [showForm, setShowForm] = useState<boolean>(false);
  
  return (
    <>
    <Row variant="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
    
    <Row variant="vertical">
        <CabinTable />
        <Button size="medium" variant="primary" onClick={() => setShowForm(!showForm)}>Add new Cabin</Button>
        {showForm ?  <CabinForm /> : null}
    </Row>
   </>
  );
}

export default Cabins;