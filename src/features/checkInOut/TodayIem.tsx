import styled from "styled-components";
import type { TodayItemProps } from "./inOutTypes";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";;
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "./useCheckOut";



const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
  
  @media(max-width:577px){
      grid-template-columns:  2fr 1fr ; 
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;


const TodayItem: React.FC<TodayItemProps> = ({ activity }) => {
  
  
  const { id, status, guests, numNights  } = activity
  
  const navigate = useNavigate();
  
  const { isPending, mutate : checkOut } = useCheckOut();
  

  
  const handleCheckin= () => {
    navigate(`/checkin/${id}`)
  }
  
  const handleCheckOut = () => {
    checkOut({ id, booking: { status: "checked_out" }})
  }

  
    return (
    <StyledTodayItem>
      {status === "unconfirmed" ? <Tag $type="green">Arriving</Tag> : null} 
      {status === "checked_in" ? <Tag $type="blue">Departing</Tag> : null} 
      <Flag src={guests.countryFlag} alt="Country flag" />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>
      <Button disabled={isPending} id={String(id)}
        $size="small" $variant="primary"
        onClick={() => `${status === "unconfirmed" ? handleCheckin() : handleCheckOut()}`}
        >
          {status === "unconfirmed" ? "Check in" : "Check out"}
      </Button>
    </StyledTodayItem>
  )
  
}


export default TodayItem