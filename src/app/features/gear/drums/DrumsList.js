import { Col, Row } from "reactstrap";
import DrumsImage from "./DrumsImage";
import { selectAllDrums } from "./drumsSlice";

const DrumsList = ({ setDrumsId }) => {
  const drums = selectAllDrums();
  return (
    <Row className="ms-auto">
      {drums.map((drumset) => {
        return (
          <Col
            className="col"
            key={drumset.id}
            onClick={() => setDrumsId(drumset.id)}
          >
            <DrumsImage drumset={drumset} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DrumsList;
