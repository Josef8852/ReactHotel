import {  useEffect, type ReactNode } from "react"
import {  useNavigate } from "react-router-dom"
import { useUser } from "./useUser";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";


const FullPage = styled.div`
  
  height : 100vh ; 
  background-color : var(--color-grey-50) ;
  display : flex ;
  align-items : center ; 
  justify-content : center ;
  `;

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const navigate = useNavigate();
  
  const {  isLoading, isAuthenticated , isFetching } = useUser();
  
  useEffect(() => {
    if (!isAuthenticated && !isLoading && !isFetching) navigate("/login" ) 
  } ,[isAuthenticated , isLoading ,navigate , isFetching])
  
  if (isLoading || isFetching) return (
    <FullPage>
      <Spinner />
    </FullPage>
  );


  
  if (isAuthenticated) return (
    <>
      {children}
    </>
  );
  

}


export default ProtectedRoute
