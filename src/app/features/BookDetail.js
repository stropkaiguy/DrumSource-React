import { Col, Card, CardImg, CardBody, CardText } from "reactstrap";

const BookDetail = ({ drumbook }) => {
  const { image, name, description } = drumbook;

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

export default BookDetail;
