import { useSpring, animated } from "react-spring";

function FadeInAbout() {
  const props = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props}>
      <h1 style={{ color: "white" }}>How it started...</h1>
      <h4 style={{ color: "white" }}>
        I started drumming when I was 10 years old. I immediatly fell in love
        with it! So I decided to start a resource page for people that needed
        the right info to learn how to play this complicated instrument. I
        mean.. it can be REALLY complicated! Where do you start? Where do you
        look to learn how to learn? With DrumSource, that can help with all
        that.
      </h4>
    </animated.div>
  );
}

export default FadeInAbout;
