import { useMoveBack } from "../../hooks/useMoveBack";
import { statusToTagName, useBooking } from "./useBookings";
import styled from "styled-components";
import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const BookingDetail: React.FC = () => {
  
  const { booking , isLoading } = useBooking();
  

  const moveBack = useMoveBack();

  if(isLoading) return <Spinner/>

  if (!booking) return <Empty resourceName="booking" />
  
   const {status , id} = booking;

  return (
    <>
      <Row $variant="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag $type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

  
    </>
  );
}

export default BookingDetail;