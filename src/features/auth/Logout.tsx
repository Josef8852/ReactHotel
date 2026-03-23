import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import  MiniSpinner from "../../ui/MiniSpinner";




const Logout: React.FC = () => {
  
  const { logout ,isPending} = useLogout();
  
  return (
    <ButtonIcon disabled={isPending} onClick={() => logout()}>
      {isPending ? <MiniSpinner/>  :<HiArrowRightOnRectangle/>}
    </ButtonIcon>
  )
  
  
}



export default Logout; 