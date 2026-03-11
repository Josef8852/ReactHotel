import { useState } from "react";
import Button from "../../ui/Button";
import CabinForm from "./CabinForm";
import  Modal from "../../ui/Modal";


const AddCabin: React.FC = () => {
  
  
    const [openModal, setOpenModal] = useState<boolean>(false);
  
  return (
    <div>
    <Button size="medium" variant="primary" onClick={() => setOpenModal(!openModal)}>Add new Cabin</Button>
      {openModal ? <Modal setOpenModal = {setOpenModal}><CabinForm setOpenModal = {setOpenModal}/></Modal> : null}
    </div>
  )
  
}


export default AddCabin; 