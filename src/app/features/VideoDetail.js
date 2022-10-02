import { Col, Card, CardImg, CardBody, CardText } from "reactstrap";

const VideoDetail = ({ drumvideo }) => {
  const { image, name, description } = drumvideo;

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

export default VideoDetail;
