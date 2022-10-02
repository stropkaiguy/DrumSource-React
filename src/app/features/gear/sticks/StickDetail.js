import { Col, Card, CardImg, CardBody, CardText } from "reactstrap";

const StickDetail = ({ sticks }) => {
  const { image, name, description } = sticks;

  return (
    <Col md="12" className="m-4">
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StickDetail;
