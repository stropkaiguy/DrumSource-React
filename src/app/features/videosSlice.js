import { VIDEOS } from "../features/data/VIDEOS";

export const selectAllVideos = () => {
  return VIDEOS;
};

export const selectVideosById = (id) => {
  return VIDEOS.find((drumvideo) => drumvideo.id === id);
};
