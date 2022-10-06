import { useSpring, animated } from "react-spring";
import { Container, Row, Col } from "reactstrap";
import ModalProfile from "../components/ModalProfile";

function FadeInHome() {
  const props = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props}>
      <Container className="p-5">
        <Row>
          <Col className="mt-5 p-5 home-col ">
            <h1 style={{ color: "white" }}>Welcome to DrumSource!</h1>
            <h3>Where your drumming needs are met!</h3>
            <hr className="new" />
            <h5 style={{ color: "white" }}>
              This site is to direct any kind of drummer, whether you're new,
              intermediate, professional, or just want to brush up on your
              skills, to different sources of drumming pages. We also link you
              to search for gear like drumkits, cymbals, and drumsticks. With
              this being said, we prefer that you set up your custom profile so
              we can set you up for success to becoming a better player. Click
              the drum icon below to create your profile!
            </h5>
            <hr className="new" />
            <ModalProfile className="modal-profile" />
          </Col>
        </Row>
      </Container>
      <Container className="p-5"></Container>
    </animated.div>
  );
}

export default FadeInHome;
