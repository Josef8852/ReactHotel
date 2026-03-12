import Button from "../../ui/Button";
import CabinForm from "./CabinForm";
import  Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";


const AddCabin: React.FC = () => {
  
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button variant="primary" size="medium">Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CabinForm/>
      </Modal.Window>
      
     <Modal.Open opens="table">
        <Button  variant="primary" size="medium">Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable/>
      </Modal.Window>
    </Modal>
  )
  
  
}



export default AddCabin; 