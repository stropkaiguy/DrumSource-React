import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
  return (
    <Row className="bg-dark">
      <Col className="m-2">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          {detail && (
            <BreadcrumbItem>
              <Link to="/directory">Directory</Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem active>{current}</BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default SubHeader;
