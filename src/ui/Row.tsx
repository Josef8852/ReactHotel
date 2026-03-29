import styled , {css} from "styled-components";
import { type RowProps } from "./UITypes";



const Row = styled.div<RowProps>`
      
    display: flex ;
  
    ${props => props.$variant === "horizontal" && css`
      justify-content:space-between ;
      align-items:center ;
      `}
    
    
    ${props => props.$variant === "vertical" && css`
        flex-direction: column;
        gap:1.6rem;
      `}
  
    @media(max-width:920px){
    flex-direction : column ;
    }
      
`

Row.defaultProps = {
  $variant : "vertical"
}




export default Row; 