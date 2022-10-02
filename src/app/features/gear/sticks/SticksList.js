import { Col, Row } from "reactstrap";
import StickImage from "./StickImage";
import { selectAllSticks } from "../sticks/stickSlice";

const SticksList = ({ setSticksId }) => {
  const sticks = selectAllSticks();
  return (
    <Row className="ms-auto">
      {sticks.map((sticks) => {
        return (
          <Col
            className="col"
            key={sticks.id}
            onClick={() => setSticksId(sticks.id)}
          >
            <StickImage sticks={sticks} />
          </Col>
        );
      })}
    </Row>
  );
};

export default SticksList;
