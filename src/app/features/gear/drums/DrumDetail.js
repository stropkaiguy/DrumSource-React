import { Col, Card, CardImg, CardBody, CardText, Button } from "reactstrap";

const DrumDetail = ({ drumset }) => {
  const { image, name, description, url } = drumset;

  return (
    <Col md="12" className="m-4">
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

export default DrumDetail;
