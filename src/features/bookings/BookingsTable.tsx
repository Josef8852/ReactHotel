import type { Booking } from "./BookingTypes";
import { useBookings } from "./useBookings";
import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

const BookingsTable: React.FC = () => {
  
  const { isLoading, bookings } = useBookings();

  if (!bookings?.data.length) return <Empty resourceName="bookings" />
  
  if (isLoading) return <Spinner />

    const isMobile = window.innerWidth < 920;
  
  return (
    <Menus>
      <Table $columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        
        {!isMobile ?  (   <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>) : null}

        <Table.Body<Booking>
          data={bookings.data}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
      <Table.Footer>
        <Pagination numOfResults={bookings.count} />
      </Table.Footer>
    </Menus>
  );
}

export default BookingsTable;