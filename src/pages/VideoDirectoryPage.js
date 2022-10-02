import { Container, Row, Col } from "reactstrap";
import VideoDetail from "../app/features/VideoDetail";
import DrumvideoList from "../app/features/DrumvideoList";
import { selectVideosById } from "../app/features/videosSlice";
import { useState } from "react";

const VideoDirectoryPage = () => {
  const [videoId, setVideoId] = useState(0);
  const selectedVideo = selectVideosById(videoId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <DrumvideoList setVideoId={setVideoId} />
        </Col>
        <Col sm="7" md="5">
          <VideoDetail drumvideo={selectedVideo} />
        </Col>
      </Row>
    </Container>
  );
};

export default VideoDirectoryPage;
