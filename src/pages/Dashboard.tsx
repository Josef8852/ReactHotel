import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Dashboard:React.FC = () => {
  return (
    <Row $variant="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Dashboard;