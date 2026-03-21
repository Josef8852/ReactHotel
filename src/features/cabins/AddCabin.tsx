import Button from "../../ui/Button";
import CabinForm from "./CabinForm";
import  Modal from "../../ui/Modal";



const AddCabin: React.FC = () => {
  
  return (
    <div>
    <Modal>
      <Modal.Open opens="cabin-form-add">
        <Button $variant="primary" $size="medium">Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form-add">
        <CabinForm/>
      </Modal.Window>
      </Modal>
    </div>
  )
  
  
}



export default AddCabin; 