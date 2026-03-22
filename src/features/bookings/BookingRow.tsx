import { format, isToday } from "date-fns";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import type { BookingRowProps } from "./BookingTypes";
import { HiEye, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { statusToTagName } from "./useBookings";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckOut } from "../checkInOut/useCheckOut";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import styled from "styled-components";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const BookingRow: React.FC<BookingRowProps> = ({
  
  booking: {
    id: bookingId,
    startDate,
    endDate,
    hasBreakfast ,
    numNights,
    totalPrice,
    status,
    guests : {fullName , email},
    cabins  : {name}
  },
}) => {

  const navigate = useNavigate();
  
  const { mutate : checkOut, isPending : isCheckingOut } = useCheckOut();
  
  const { mutate: deleteBooking, isPending: isDeleting } = useDeleteBooking();
  
  const isPending : boolean = isDeleting || isCheckingOut;
  
  if(isPending) return <Spinner/>
  
  return (
    <Table.Row>
      <Cabin>{name}</Cabin>

      <Stacked>
        <span>{fullName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag $type={statusToTagName[status]}>{status.replace("_", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      
           <Modal>
      <Menus.Menu>
        <Menus.Toggle id={bookingId} />
        <Menus.List id={bookingId}>
          
          <Menus.MenuButton onClick={() => navigate(`/booking/${bookingId}`)}>
            <HiEye/> See Details
          </Menus.MenuButton>
          
        {status === "unconfirmed"  || (!hasBreakfast && status === "checked_in")  ?   <Menus.MenuButton onClick={() => navigate(`/checkin/${bookingId}`)}>
          <HiArrowDownOnSquare/> {!hasBreakfast ? "Edit" : "Check In"}
        </Menus.MenuButton> : null }
          
          
          {status === "checked_in" ? <Menus.MenuButton onClick={() => checkOut({
            id: bookingId, 
            booking: {
              status : "checked_out"
            }
          })}>
         <HiArrowUpOnSquare/> Check Out
          </Menus.MenuButton> : null}
          
            
   
            <Modal.Open opens="confirm-delete">
            <Menus.MenuButton>
              <HiTrash/> Delete Booking
              </Menus.MenuButton>
            </Modal.Open>
         
            
  
      
            
          
        </Menus.List>
        </Menus.Menu>
        
        <Modal.Window name="confirm-delete">
          <ConfirmDelete onConfirm={() => deleteBooking(bookingId)} disabled={isDeleting}
            resourceName={"Booking"} />
        </Modal.Window>
        
           </Modal>
      
    </Table.Row>
  );
}

export default BookingRow;