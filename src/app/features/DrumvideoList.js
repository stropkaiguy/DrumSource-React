import { Col, Row } from "reactstrap";
import DrumvideoImage from "./DrumvideoImage";
import { selectAllVideos } from "./videosSlice";

const DrumvideoList = ({ setVideoId }) => {
  const videos = selectAllVideos();
  return (
    <Row className="ms-auto">
      {videos.map((drumvideo) => {
        return (
          <Col
            className="col"
            key={drumvideo.id}
            onClick={() => setVideoId(drumvideo.id)}
          >
            <DrumvideoImage drumvideo={drumvideo} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DrumvideoList;
