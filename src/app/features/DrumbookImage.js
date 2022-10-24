import { Col, Image } from "react-bootstrap";

const DrumbookImage = ({ drumbook }) => {
  const { image, name } = drumbook;
  return (
    <Col className="col-lg-2 p-4">
      <Image
        className="box image-fluid"
        rounded
        style={{ height: "250px" }}
        src={image}
        alt={name}
      />
    </Col>
  );
};

export default DrumbookImage;
