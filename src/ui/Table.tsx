import type {
  BodyTableProps,
  HeaderTableProps,
  RowTableprops,
  TableCommonRow,
  TableCompound,
  TableContextTypes
} from "./UITypes";
import { createContext, useContext } from "react";
import styled, { css } from "styled-components";




const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div<TableCommonRow>`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  
  
  // Booking Row
  ${(props) => props.$variant === "Booking" && css`
    @media(max-width:920px) {
    grid-template-columns : 1fr;
    gap : 1.5rem;
    }
    `}
  
  // Cabin Row
  ${(props) => props.$variant === "Cabin" && css`
    @media(max-width:920px) {
    grid-template-columns : 1fr 1fr auto;
    grid-template-rows : 1fr auto ;
    gap : 2rem ;
    }
    `}
  
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  
  


  /* This will hide the footer when it contains no child elements*/
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;


const TableContext = createContext<TableContextTypes>({
  $columns : "",
});

const Table: TableCompound = ({$columns ,children}) => {
  
  
  return (
    
    <TableContext.Provider value={{
      $columns , 
    }}>
      <StyledTable role="table">
        {children}
      </StyledTable>
    </TableContext.Provider>
  )
  
  
}

const Header: React.FC<HeaderTableProps> = ({ children , className }) => {
  
  const { $columns } = useContext(TableContext);
  
  return (
    <StyledHeader className={className} role="row" $columns={$columns}>
      {children}
    </StyledHeader>
  )
  
}


const Row: React.FC<RowTableprops> = ({children , $variant}) => {
  
  const { $columns } = useContext(TableContext);
  
  return (
    <StyledRow $variant={$variant} role="row" $columns={$columns}>
      {children}
    </StyledRow>
  )
  
}


// Depends on data so we make it generic to be reusable with Booking , Cabins , etc 
const Body = <T,>({data , render} : BodyTableProps<T>) => {
  
   if(!data.length) return <Empty>No data to show at the moment</Empty>
  

  return (
    <StyledBody>
      {data.map(render)}
   </StyledBody>
 )
  
}


Table.Header = Header; 
Table.Row = Row; 
Table.Body = Body;
Table.Footer = Footer;


export default Table; 