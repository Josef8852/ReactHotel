import {  useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckIn } from "./useCheckIn";
import { useSettings } from "../settings/useSettings";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBookings";
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";




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
  
  const [addBreakfast , setAddBreakfast] = useState<boolean | null>(null)

  //No use Effect optimize and avoid unnecessary rerenders
  const isPaid: boolean = confirmPay ?? booking?.isPaid ?? false;
  
  const isBreakfast : boolean = addBreakfast ?? booking?.hasBreakfast ?? false;
  
  const { mutate, isPending } = useCheckIn();
  
  const { settings } = useSettings();
  
    
  
   if (!booking || !settings || isLoading) return <Spinner/>;
  
  const totalBreakfastPrice : number = settings?.breakfastPrice*
  booking?.numGuests* 
  booking?.numNights
  
  
  const handleCheckin = (): void => { 
    
    if (!booking || !isPaid) return;
    
    
    mutate({
      id: booking.id, 
      booking: {
        isPaid: true,
        status: "checked_in", 
        hasBreakfast: isBreakfast ?? false,
        totalPrice : booking.totalPrice + totalBreakfastPrice
      }
    });
  }
  

  return (
    <>
      <Row $variant="horizontal">
        <Heading as="h1">Check in booking #{booking.id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      
      
      {!booking.hasBreakfast ? <Box>
        <Checkbox
        disabled={isPending}
        checked = {isBreakfast}
          onChange={() => {
            setAddBreakfast((has) => !(has ?? booking.hasBreakfast))
          }}
          id="breakfast"
        >
          Want ot add Breakfast for {formatCurrency(totalBreakfastPrice  ?? 0)}
        </Checkbox>
      </Box> : null}
      
      <Box>
        <Checkbox
          checked={isPaid}
          id="confirm"
          onChange={() => setConfirmPay((confirm) => !(confirm ?? booking.isPaid))}
          disabled={isPending}
        >
          
          I confirm that {booking.guests.fullName} has paid the total amount 
          of {addBreakfast || booking.hasBreakfast ?
            formatCurrency(booking.totalPrice + totalBreakfastPrice) +
            `  (${formatCurrency(booking.totalPrice)}) + (${formatCurrency(totalBreakfastPrice)})` : 
            formatCurrency(booking.totalPrice)
          }
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