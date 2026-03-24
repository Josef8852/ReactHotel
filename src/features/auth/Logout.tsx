import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
import  MiniSpinner from "../../ui/MiniSpinner";




const Logout: React.FC = () => {
  
  const { logout ,isPending} = useLogout();
  
  return (
    <ButtonIcon aria-label="logout" disabled={isPending} onClick={() => logout()}>
      {isPending ? <MiniSpinner/>  :<HiArrowRightOnRectangle/>}
    </ButtonIcon>
  )
  
  
}



export default Logout; 