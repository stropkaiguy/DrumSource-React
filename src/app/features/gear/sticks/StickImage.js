import { Col, Image } from "react-bootstrap";

const StickImage = ({ sticks }) => {
  const { image, name } = sticks;
  return (
    <Col className=" col-4 p-4">
      <Image
        className="box image-fluid"
        rounded
        style={{ height: "150px" }}
        src={image}
        alt={name}
      />
    </Col>
  );
};

export default StickImage;
