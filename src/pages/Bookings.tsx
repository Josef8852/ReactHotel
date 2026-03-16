import BookingsTable from "../features/bookings/BookingsTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Bookings:React.FC = () => {
  return (
    <>
    <Row variant="horizontal">
      <Heading as="h1">All bookings</Heading>
      <BookingTableOperations/>
      </Row>
          <BookingsTable/>
    </>
  );
}

export default Bookings;