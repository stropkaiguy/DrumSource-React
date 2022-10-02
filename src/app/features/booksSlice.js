import { BOOKS } from "../features/data/BOOKS";

export const selectAllBooks = () => {
  return BOOKS;
};

export const selectBookById = (id) => {
  return BOOKS.find((drumbook) => drumbook.id === id);
};
