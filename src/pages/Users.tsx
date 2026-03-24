import SignupForm from "../features/auth/SignupForm";
import Heading from "../ui/Heading";

const Users:React.FC = () => {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm/>
    </>
  )
}

export default Users;