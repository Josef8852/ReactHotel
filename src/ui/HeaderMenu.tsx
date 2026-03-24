import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logout from "../features/auth/Logout";
import ButtonIcon from "./ButtonIcon";
import UserAvatar from "../features/auth/UserAvatar";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import useDarkMode from "../context/useDarkMode";



const StyledHeaderMenu = styled.ul`
  display:flex ; 
  gap:2rem ;
  `


const HeaderMenu: React.FC = () => {
  
  const navigate = useNavigate();
  
  const {isDarkMode , toggleDarkMode} = useDarkMode();
  
  
  
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
    
      
  </StyledHeaderMenu>  
  )
  
  
  
}



export default HeaderMenu;