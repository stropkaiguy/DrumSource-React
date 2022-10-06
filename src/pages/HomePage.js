import drumvid from "../vid/drumvid.mp4";
import { Container, Row, Col, Button } from "reactstrap";
import drumKit from "../app/features/img/mydrumkit.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import ModalProfile from "../components/ModalProfile";
import { useSpring, animated } from "react-spring";
import FadeInHome from "../components/FadeInHome";

const HomePage = () => {
  return (
    <>
      <div
        className="img-fluid "
        style={{
          backgroundImage: `url(${drumKit})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "auto",
        }}
      >
        <FadeInHome />
      </div>
    </>
  );
};

export default HomePage;
