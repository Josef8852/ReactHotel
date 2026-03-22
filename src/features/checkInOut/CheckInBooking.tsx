import { useMoveBack } from "../../hooks/useMoveBack";
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import { useBooking } from "../bookings/useBookings";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import {  useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckIn } from "./useCheckIn";



const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

const CheckInBooking: React.FC = () => {
  
  
  const moveBack = useMoveBack();

  const { booking, isLoading } = useBooking();
    
  const [confirmPay, setConfirmPay] = useState<boolean | null>(null)

  //No use Effect optimize and avoid unnecessary rerenders
  const isPaid: boolean = confirmPay ?? booking?.isPaid ?? false;
  
  const { mutate, isPending } = useCheckIn();
  
  const handleCheckin = (): void => { 
    
    if (!booking || !isPaid) return;
    
    mutate({
      id: booking.id, 
      booking : {isPaid : true , status : "checked_in"}
    });
  }
  
  
  
  if (isLoading) return <Spinner />
  
  if (!booking) return <Empty resourceName="booking" />;

  

  return (
    <>
      <Row $variant="horizontal">
        <Heading as="h1">Check in booking #{booking.id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      
      <Box>
        <Checkbox
          checked={isPaid}
          id="confirm"
          onChange={() => setConfirmPay((confirm) => !(confirm ?? booking.isPaid))}
          disabled={booking.isPaid || isPending}
        >
          
          I confirm that {booking.guests.fullName} has paid the total amount 
          of {formatCurrency(booking.totalPrice)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button  disabled={!isPaid || isPending} $variant="primary" $size="medium" onClick={handleCheckin}>Check in booking #{booking.id}</Button>
        <Button $variant="secondary" $size="small" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckInBooking;