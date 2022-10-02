import { Col, Row } from "reactstrap";
import CymbalImage from "./CymbalImage";
import { selectAllCymbals } from "./cymbalsSlice";

const CymbalList = ({ setCymbalsId }) => {
  const cymbals = selectAllCymbals();
  return (
    <Row className="ms-auto">
      {cymbals.map((cymbals) => {
        return (
          <Col
            className="col"
            key={cymbals.id}
            onClick={() => setCymbalsId(cymbals.id)}
          >
            <CymbalImage cymbals={cymbals} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CymbalList;
