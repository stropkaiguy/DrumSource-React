import React from "react";
import { Container, Row, Col } from "reactstrap";
import FadeInAbout from "../components/FadeInAbout";
import FadeInImage from "../components/FadeInImage";

const AboutPage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "auto",
        }}
      >
        <Container className="p-5">
          <Row>
            <Col className="col-6">
              <FadeInAbout />
            </Col>
            <Col className="col-6">
              <FadeInImage />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
