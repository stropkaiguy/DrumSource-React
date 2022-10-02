import { Container, Row, Col } from "reactstrap";
import CymbalDetail from "../app/features/gear/cymbals/CymbalDetail";
import CymbalList from "../app/features/gear/cymbals/CymbalList";
import { selectCymbalsById } from "../app/features/gear/cymbals/cymbalsSlice";
import { useState } from "react";

const CymbalDirectoryPage = () => {
  const [cymbalId, setCymbalsId] = useState(0);
  const selectedCymbals = selectCymbalsById(cymbalId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <CymbalList setCymbalsId={setCymbalsId} />
        </Col>
        <Col sm="7" md="5">
          <CymbalDetail cymbals={selectedCymbals} />
        </Col>
      </Row>
    </Container>
  );
};

export default CymbalDirectoryPage;
