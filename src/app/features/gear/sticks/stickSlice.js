import { STICKS } from "../../data/STICKS";

export const selectAllSticks = () => {
  return STICKS;
};

export const selectSticksById = (id) => {
  return STICKS.find((sticks) => sticks.id === id);
};
