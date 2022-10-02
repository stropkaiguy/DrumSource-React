import { Container, Row, Col } from "reactstrap";
import StickDetail from "../app/features/gear/sticks/StickDetail";
import SticksList from "../app/features/gear/sticks/SticksList";
import { selectSticksById } from "../app/features/gear/sticks/stickSlice";
import { useState } from "react";

const SticksDirectoryPage = () => {
  const [sticksId, setSticksId] = useState(0);
  const selectedSticks = selectSticksById(sticksId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <SticksList setSticksId={setSticksId} />
        </Col>
        <Col sm="7" md="5">
          <StickDetail sticks={selectedSticks} />
        </Col>
      </Row>
    </Container>
  );
};

export default SticksDirectoryPage;
