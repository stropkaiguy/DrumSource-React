import { useSpring, animated } from "react-spring";
import me from "../app/features/img/me.jpeg";
import { Image } from "react-bootstrap";
function FadeInImage() {
  const props = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props}>
      <Image
        className="img-fluid"
        rounded
        style={{ height: "500px" }}
        src={me}
        alt={me}
      />
    </animated.div>
  );
}

export default FadeInImage;
