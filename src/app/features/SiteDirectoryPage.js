import { Container, Row, Col } from "reactstrap";
import DrumsiteList from "../features/DrumsiteList";
import SiteDetail from "../features/SiteDetail";
import { selectSitesById } from "./sitesSlice";
import { useState } from "react";

const SiteDirectoryPage = () => {
  const [siteId, setSiteId] = useState(0);
  const selectedSite = selectSitesById(siteId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <DrumsiteList setSiteId={setSiteId} />
        </Col>
        <Col sm="7" md="5">
          <SiteDetail drumsite={selectedSite} />
        </Col>
      </Row>
    </Container>
  );
};

export default SiteDirectoryPage;
