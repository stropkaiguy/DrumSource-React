import { DRUMS } from "./data/DRUMS";

export const selectAllDrums = () => {
  return DRUMS;
};

export const selectDrumsById = (id) => {
  return DRUMS.find((drums) => drums.id === id);
};
