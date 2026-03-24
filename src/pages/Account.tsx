import UpdateUserForm from "../features/auth/UpdateUserForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Account:React.FC = () => {
  return (
    <>

      <Row $variant="vertical" >
        <Heading as="h3">Update user data</Heading>
        <UpdateUserForm/>
      </Row>

    </>
  );
}

export default Account;