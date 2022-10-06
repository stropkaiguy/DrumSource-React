import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 2 }} sm="2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/learn">Learn</Link>
              </li>
              <li>
                <Link to="/gear">Gear</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </Col>

          <Col sm="6" className="text-center">
            <a role="button" className="btn btn-link" href="tel: +12065551234">
              <i className="fa fa-phone" /> 1-907-373-3786(DRUM)
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto: notreal@notreal.com"
            >
              <i className="fa fa-envelope-o" /> admin@drumsource.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
