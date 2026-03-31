import styled from "styled-components"
import Spinner from "../ui/Spinner"


const StyledSpinner = styled.div`
  height: 100dvh;
  width: 100%;
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  `




const SpinnerFullPage:React.FC = () => {
  
  return (
    <StyledSpinner>
      <Spinner/>
    </StyledSpinner>
  )
  
}


export default SpinnerFullPage;