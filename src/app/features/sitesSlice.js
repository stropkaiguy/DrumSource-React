import { SITES } from "./data/SITES";

export const selectAllSites = () => {
  return SITES;
};

export const selectSitesById = (id) => {
  return SITES.find((drumsite) => drumsite.id === id);
};
