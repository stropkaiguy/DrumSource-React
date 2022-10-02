import gearImg from "../app/features/img/drumshop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DrumsDirectoryPage from "./DrumsDirectoryPage";
import CymbalDirectoryPage from "./CymbalsDirectoryPage";
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
  UncontrolledCarousel,
  CarouselControl,
} from "reactstrap";
import {
  faDrum,
  faDrumSteelpan,
  faLinesLeaning,
} from "@fortawesome/free-solid-svg-icons";
import SticksDirectoryPage from "./SticksDirectoryPage";

const GearPage = () => {
  return (
    <>
      <div
        className="img-fluid"
        style={{
          backgroundImage: `url(${gearImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div>
          <Container>
            <Row>
              <Col className="mt-5 gear-col">
                <h1 style={{ color: "white" }}>Pick out your gear</h1>
                <h3>
                  Shop around for some of the best drums, cymbals, and equipment
                  from these retailers and websites.
                </h3>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="mt-5 gear-col">
                <h3>
                  Choose to shop around at these three big music retailers:
                  <br />
                  <a
                    href="https://www.guitarcenter.com/Drums-Percussion.gc"
                    target="__blank"
                  >
                    Guitar Center
                  </a>
                  ,{" "}
                  <a
                    href="https://www.sweetwater.com/shop/drums-percussion/"
                    target="__blank"
                  >
                    Sweetwater
                  </a>
                  , or{" "}
                  <a
                    href="https://www.musiciansfriend.com/?source=3WWRWXGT&gclid=CjwKCAjw-L-ZBhB4EiwA76YzOfKnfvrP8SvxyE2hYXGja2e_TGT0hjBdyLMA_KOfP5qP6Ugb841HHxoCFr0QAvD_BwE"
                    target="__blank"
                  >
                    Musician's Friend
                  </a>
                </h3>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="mt-5">
                <UncontrolledCarousel
                  items={[
                    {
                      key: 1,
                      src: "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/8/38/838bff50-7cc4-5002-870d-378939ea2066/5fbd4cb697c0c.image.jpg?resize=1200%2C600",
                    },
                    {
                      key: 2,
                      src: "https://media.sweetwater.com/api/i/wm-__optimize-medium__ha-1bfba2355348364e__hmac-5262d629c5f77b2f29003e220401b52009a504dd/logo/sweetwater-tagline-1200x630.jpg",
                    },
                    {
                      key: 3,
                      src: "https://support.musicgateway.com/wp-content/uploads/2021/04/Copy-of-800-x-500-Blog-Post-39-2.png",
                    },
                  ]}
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="mt-5 gear-col">
                <h1 style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faDrum} />
                </h1>
              </Col>
            </Row>
          </Container>
          <DrumsDirectoryPage />
          <Container>
            <Row>
              <Col className="mt-5 gear-col">
                <h1 style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faDrumSteelpan} />
                </h1>
              </Col>
            </Row>
          </Container>
          <CymbalDirectoryPage />
          <Container>
            <Row>
              <Col className="mt-5 gear-col">
                <h1 style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faLinesLeaning} />
                </h1>
              </Col>
            </Row>
          </Container>
          <SticksDirectoryPage />
        </div>
      </div>
    </>
  );
};

export default GearPage;
