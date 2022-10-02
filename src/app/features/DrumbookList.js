import { Col, Row } from "reactstrap";
import DrumbookImage from "./DrumbookImage";
import { selectAllBooks } from "./booksSlice";

const DrumbookList = ({ setBookId }) => {
  const books = selectAllBooks();
  return (
    <Row className="ms-auto">
      {books.map((drumbook) => {
        return (
          <Col
            className="col"
            key={drumbook.id}
            onClick={() => setBookId(drumbook.id)}
          >
            <DrumbookImage drumbook={drumbook} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DrumbookList;
