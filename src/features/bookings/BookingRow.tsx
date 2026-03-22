import { format, isToday } from "date-fns";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import type { BookingRowProps } from "./BookingTypes";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import styled from "styled-components";
import Menus from "../../ui/Menus";
import { HiEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { statusToTagName } from "./useBookings";
import { HiArrowDownOnSquare } from "react-icons/hi2";

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
    numNights,
    totalPrice,
    status,
    guests : {fullName , email},
    cabins  : {name}
  },
}) => {

  const navigate = useNavigate();
  

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
      
      <Menus.Menu>
        <Menus.Toggle id={bookingId} />
        <Menus.List id={bookingId}>
          
          <Menus.MenuButton onClick={() => navigate(`/booking/${bookingId}`)}>
            <HiEye/> See Details
          </Menus.MenuButton>
          
        {status === "unconfirmed" ?   <Menus.MenuButton onClick={() => navigate(`/checkin/${bookingId}`)}>
          <HiArrowDownOnSquare/> Check in
        </Menus.MenuButton> : null }
          
        </Menus.List>
      </Menus.Menu>
      
      
    </Table.Row>
  );
}

export default BookingRow;