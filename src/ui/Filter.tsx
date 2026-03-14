import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;



const FilterButton = styled.button<{active?: boolean | null}>`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;


const Filter: React.FC = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  
  const currentFilter = searchParams.get("discount");
  
  const handleClick = (value : string) : void => {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  }
  
  return (
    <StyledFilter>
      <FilterButton active={currentFilter === "all"} onClick={() => handleClick("all")}>All</FilterButton>
      <FilterButton active={currentFilter === "no-discount"} onClick={() => handleClick("no-discount")}>No discount</FilterButton>
      <FilterButton active={currentFilter === "with-discount"} onClick={() => handleClick("with-discount")}>With Discount</FilterButton>
      
    </StyledFilter>
  )
  
}


export default Filter;