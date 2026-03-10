import styled from "styled-components";
import type { FormRowProps } from "./UITypes";
import Error from "./Error";


const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;



const FormRow:React.FC<FormRowProps> = ({label,id,error,children}) => {
  
  return (
    <StyledFormRow>
     {label ?   <Label htmlFor={id}>{label}</Label> : null}
      {children}
      <Error>{error}</Error>
    </StyledFormRow>
  )
  
}


export default FormRow; 