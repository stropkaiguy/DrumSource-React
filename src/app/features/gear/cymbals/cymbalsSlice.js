import { CYMBALS } from "../../data/CYMBALS";

export const selectAllCymbals = () => {
  return CYMBALS;
};

export const selectCymbalsById = (id) => {
  return CYMBALS.find((cymbals) => cymbals.id === id);
};
