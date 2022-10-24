import { Col, Card, CardImg, CardBody, CardText, Button } from "reactstrap";

const SiteDetail = ({ drumsite }) => {
  const { image, name, description, url } = drumsite;

  return (
    <Col md="10" className="p-3">
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
          Check it out!
        </Button>
      </Card>
    </Col>
  );
};

export default SiteDetail;
