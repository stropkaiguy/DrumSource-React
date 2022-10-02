import { DRUMS } from "../../data/DRUMS";

export const selectAllDrums = () => {
  return DRUMS;
};

export const selectDrumsById = (id) => {
  return DRUMS.find((drumset) => drumset.id === id);
};
