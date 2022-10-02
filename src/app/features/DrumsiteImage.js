import { Col, Image } from "react-bootstrap";

const DrumsiteImage = ({ drumsite }) => {
  const { image, name } = drumsite;
  return (
    <Col className="col-4 p-4">
      <Image rounded style={{ height: "200px" }} src={image} alt={name} />
    </Col>
  );
};

export default DrumsiteImage;
