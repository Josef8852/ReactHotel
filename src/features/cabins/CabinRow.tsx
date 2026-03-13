import type { CabinRowProps } from "./CabinTypes";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiTrash } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import  CabinForm from "./CabinForm";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus  from "../../ui/Menus";


const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Container = styled.div`
  display : flex ; 
  gap : 1rem;
  `

const CabinRow: React.FC<CabinRowProps> = ({ cabin }) => {

  
  const { isPending, mutate } = useDeleteCabin();
  
  if(isPending) return <Spinner/>
  
  return (
    <>
    <Table.Row>
      <Img src={cabin.image} />
      <Cabin>{cabin.name}</Cabin>
      <div>Fits up to {cabin.maxCapacity}</div>
      <Price>{formatCurrency(cabin.regularPrice)}</Price>
      {cabin.discount ?  <Discount>{formatCurrency(cabin.discount)}</Discount> : <span>&mdash;</span>}
        <Container> 
          
            
          <Modal>
            
            <Menus.Menu>
              
              <Menus.Toggle id={cabin.id} />
              
              
              <Menus.List id={cabin.id}>
                
              <Modal.Open opens="confirm-delete">
                      <Menus.MenuButton><HiTrash /> Delete</Menus.MenuButton>
                </Modal.Open>
                
              <Modal.Open opens="cabin-form-edit">
                <Menus.MenuButton><HiPencil />Edit</Menus.MenuButton>
                </Modal.Open>
                
              </Menus.List>
              
              
            </Menus.Menu>
            
         
            <Modal.Window name="cabin-form-edit">
              <CabinForm cabinToEdit={cabin}/>
            </Modal.Window>
  
          
        
        
            <Modal.Window name="confirm-delete">
              <ConfirmDelete onConfirm={() => mutate(cabin.id)} disabled={isPending}
                resourceName={cabin.name} />
            </Modal.Window>
            
            
          </Modal>
          
         
           
        
          
      </Container>
    </Table.Row>
    </>
  )
  
}

export default CabinRow;