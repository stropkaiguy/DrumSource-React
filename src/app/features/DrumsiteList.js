import { Col, Row } from "reactstrap";
import DrumsiteImage from "./DrumsiteImage";
import { selectAllSites } from "./sitesSlice";

const DrumsiteList = ({ setSiteId }) => {
  const sites = selectAllSites();
  return (
    <Row className="ms-auto">
      {sites.map((drumsite) => {
        return (
          <Col
            className="col"
            key={drumsite.id}
            onClick={() => setSiteId(drumsite.id)}
          >
            <DrumsiteImage drumsite={drumsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DrumsiteList;
