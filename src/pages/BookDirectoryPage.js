import { Container, Row, Col } from "reactstrap";
import BookDetail from "../app/features/BookDetail";
import DrumbookList from "../app/features/DrumbookList";
import { selectBookById } from "../app/features/booksSlice";
import { useState } from "react";

const BookDirectoryPage = () => {
  const [bookId, setBookId] = useState(0);
  const selectedBook = selectBookById(bookId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <DrumbookList setBookId={setBookId} />
        </Col>
        <Col sm="7" md="5">
          <BookDetail drumbook={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookDirectoryPage;
