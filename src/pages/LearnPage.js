import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faLaptop,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import drumpad from "../app/features/img/practice_pad.jpeg";
import DrumbookList from "../app/features/DrumbookList";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  CardHeader,
  CardBody,
} from "reactstrap";
import { useState } from "react";

import DrumvideoList from "../app/features/DrumvideoList";
import DrumsiteList from "../app/features/DrumsiteList";
import BookDirectoryPage from "./BookDirectoryPage";
import VideoDirectoryPage from "./VideoDirectoryPage";
import SiteDirectoryPage from "../app/features/SiteDirectoryPage";

const LearnPage = () => {
  return (
    <>
      <div
        className="img-fluid"
        style={{
          backgroundImage: `url(${drumpad})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <Container>
            <Row>
              <Col className="mt-5 learn-col">
                <h1 style={{ color: "white" }}>Learn</h1>
                <h3>Get your educational resources here!</h3>
                <h5>
                  Click on the books, videos, and websites below to access your
                  educational needs for your playing.{" "}
                </h5>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="mt-5 learn-col">
                <h1 style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faBookOpen}> </FontAwesomeIcon>
                </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <BookDirectoryPage />
          </Container>
          <Container>
            <Row>
              <Col className="mt-5 learn-col">
                <h1 style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <VideoDirectoryPage />
          </Container>
          <Container>
            <Row>
              <Col className="mt-5 learn-col">
                <h1 style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <SiteDirectoryPage />
          </Container>
        </div>
      </div>
    </>
  );
};

export default LearnPage;
