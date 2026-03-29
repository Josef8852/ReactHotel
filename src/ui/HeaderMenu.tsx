import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import styled from "styled-components";
import Logout from "../features/auth/Logout";
import ButtonIcon from "./ButtonIcon";
import UserAvatar from "../features/auth/UserAvatar";
import useAppContext from "../context/useAppContext";
import { RxHamburgerMenu } from "react-icons/rx";



const StyledHeaderMenu = styled.ul`
  display:flex ; 
  align-items:center ;
  justify-content : center ;
  gap:2rem ;
  `





const HeaderMenu: React.FC = () => {
  
  const navigate = useNavigate();
  
  const {isDarkMode , toggleDarkMode} = useAppContext();
  
  const { toggleBurger } = useAppContext();
  
  return (
    <StyledHeaderMenu>
      <li>
          <UserAvatar/>
      </li>
      <li>
        <ButtonIcon aria-label="open-account" onClick={() => navigate("/account")}>
          <HiOutlineUser/>
        </ButtonIcon>
      </li>
  
      <li>
        <ButtonIcon aria-label="dark-mode" onClick={toggleDarkMode} >
          {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/>  }
        </ButtonIcon>
      </li>
      
      <li>
        <Logout  />
      </li>
    
      <ButtonIcon className="hamburger" aria-label="hamburger" onClick={toggleBurger} >
          <RxHamburgerMenu  />
      </ButtonIcon>
  </StyledHeaderMenu>  
  )
  
  
  
}



export default HeaderMenu;