import styled from "styled-components";
import Logo from "./Logo"
import MainNav from "./MainNav"
import useAppContext from "../context/useAppContext";
import ButtonIcon from "./ButtonIcon";
import { MdKeyboardBackspace } from "react-icons/md";

const StyledSidebar = styled.aside<{$isBurger : boolean}>`
  background-color:var(--color-grey-0) ;
  padding :3.2rem 2.4rem;
  border-right:1px solid var(--color-grey-100);
  grid-row:1 / -1;
  display:flex;
  flex-direction:column;
  gap:3.2rem;
  
  @media(max-width:1279px) {
      display : ${(props) => props.$isBurger ? "block" : "none" } ;
      position : fixed ;
      top: 0;
       left: 0;
      z-index : 999 ;
      height : 100dvh ;
      width : 100vw;
  }
  
  `


const Sidebar: React.FC = () => {
  
  const { isBurger , toggleBurger } = useAppContext();
  
  return (
    <StyledSidebar $isBurger={isBurger}  >
     {isBurger ?  <ButtonIcon aria-label="back" onClick={toggleBurger} >
       <MdKeyboardBackspace />
     </ButtonIcon> : null}
      <Logo />
      <MainNav/>
    </StyledSidebar>
  )
  
}



export default Sidebar;