import styled from "styled-components";
import LoginForm from "../features/auth/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: min(90%, 48rem); 
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: 920px) {
    gap: 2rem; 
  }
`;

const Login:React.FC = () => {
 
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm/>
      </LoginLayout>
    )
  
}

export default Login;