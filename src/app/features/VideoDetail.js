import { Col, Card, CardImg, CardBody, CardText, Button } from "reactstrap";

const VideoDetail = ({ drumvideo }) => {
  const { image, name, description, url } = drumvideo;

  return (
    <Col md="12" className="p-4">
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
          Watch
        </Button>
      </Card>
    </Col>
  );
};

export default VideoDetail;
