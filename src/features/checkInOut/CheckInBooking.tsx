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




const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

const CheckInBooking: React.FC = () => {
  
  const moveBack = useMoveBack();

  const { booking , isLoading} = useBooking();
  
  const handleCheckin = () :void => { }
  
  if (!booking) return <Empty resourceName="booking" />;
  
  if(isLoading) return <Spinner/>

  return (
    <>
      <Row $variant="horizontal">
        <Heading as="h1">Check in booking #{booking.id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      
     

      <ButtonGroup>
        <Button $variant="primary" $size="medium" onClick={handleCheckin}>Check in booking #{booking.id}</Button>
        <Button $variant="secondary" $size="small" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckInBooking;