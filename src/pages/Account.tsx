import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Account:React.FC = () => {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row $variant="vertical" >
        <Heading as="h3">Update user data</Heading>
        <p>Update user data form</p>
      </Row>

      <Row $variant="vertical" >
        <Heading as="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </>
  );
}

export default Account;