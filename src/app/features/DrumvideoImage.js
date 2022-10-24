import { Col, Image } from "react-bootstrap";

const DrumvideoImage = ({ drumvideo }) => {
  const { image, name } = drumvideo;
  return (
    <Col className="col-lg-2 p-4">
      <Image
        className="image-fluid box"
        rounded
        style={{ height: "175px" }}
        src={image}
        alt={name}
      />
    </Col>
  );
};

export default DrumvideoImage;
