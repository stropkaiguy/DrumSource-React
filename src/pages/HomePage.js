import drumvid from "../vid/drumvid.mp4";
import { Container, Row, Col, Button } from "reactstrap";
import drumKit from "../app/features/img/mydrumkit.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import ModalProfile from "../components/ModalProfile";

const HomePage = () => {
  return (
    <>
      <div
        className="img-fluid"
        style={{
          backgroundImage: `url(${drumKit})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "auto",
        }}
      >
        <Container className="p-5">
          <Row>
            <Col className="mt-5 home-col ">
              <h1 style={{ color: "white" }}>Welcome drummers!</h1>
              <h3>Where your drumming needs are met!</h3>
              <hr className="new" />
              <h5 style={{ color: "white" }}>
                This site is to direct any kind of drummer, whether you're new,
                intermediate, professional, or just want to brush up on your
                skills, to different sources of drumming pages. We also link you
                to search for gear like drumkits, cymbals, and drumsticks. With
                this being said, we prefer that you set up your custom profile
                so we can set you up for success to becoming a better player.
                Click the drum icon below to create your profile!
              </h5>
              <hr className="new" />
              <ModalProfile className="modal-profile" />
            </Col>
          </Row>
        </Container>
        <Container className="p-5"></Container>
      </div>
    </>
  );
};

export default HomePage;
