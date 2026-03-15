import BookingsTable from "../features/bookings/BookingsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Bookings:React.FC = () => {
  return (
    <>
    <Row variant="horizontal">
      <Heading as="h1">All bookings</Heading>
      <p>TEST</p>
      </Row>
          <BookingsTable/>
    </>
  );
}

export default Bookings;