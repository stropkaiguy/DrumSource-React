import { Col, Card, CardImg, CardBody, CardText, Button } from "reactstrap";

const BookDetail = ({ drumbook }) => {
  const { image, name, description, url } = drumbook;

  return (
    <Col md="10" className="p-5">
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>

        <Button
          href={url}
          target="__blank"
          className=" m-3"
          size="md"
          color="primary"
        >
          Buy
        </Button>
      </Card>
    </Col>
  );
};

export default BookDetail;
