import { Container, Row, Col } from "reactstrap";
import DrumsDetail from "../app/features/gear/drums/DrumDetail";
import DrumsList from "../app/features/gear/drums/DrumsList";
import { selectDrumsById } from "../app/features/gear/drums/drumsSlice";
import { useState } from "react";

const DrumsDirectoryPage = () => {
  const [drumsId, setDrumsId] = useState(0);
  const selectedDrums = selectDrumsById(drumsId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <DrumsList setDrumsId={setDrumsId} />
        </Col>
        <Col sm="7" md="5">
          <DrumsDetail drumset={selectedDrums} />
        </Col>
      </Row>
    </Container>
  );
};

export default DrumsDirectoryPage;
