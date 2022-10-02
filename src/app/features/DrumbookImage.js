import { Col, Image } from "react-bootstrap";

const DrumbookImage = ({ drumbook }) => {
  const { image, name } = drumbook;
  return (
    <Col className="col-4 p-4">
      <Image rounded style={{ height: "250px" }} src={image} alt={name} />
    </Col>
  );
};

export default DrumbookImage;
