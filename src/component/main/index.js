import { useEffect, useState } from "react";
import { blogSearch } from "actions/bookapi";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import WriteEditor from "component/booknote/WriteEditor";

const Main = ({onBookSelect}) => {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState([]);
 

  useEffect(() => {
    if (query.length > 0) {
      blogSearchHttpHandler(query, true);
    }
  }, [query]);

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  const blogSearchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: "accuracy",
      page: 1,
      size: 4,
    };

    const { data } = await blogSearch(params);
    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    onBookSelect(book);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="검색어를 입력하세요..."
        name="query"
        className="input_search"
        onKeyDown={onEnter}
        onChange={onTextUpdate}
        value={text}
      />

      <Container>
        <Row>
          {books.map((book, index) => (
            <Col key={book.isbn}>
              <div className="book" onClick={() => handleBookSelect(book)}>
                <img src={book.thumbnail} alt={book.title} />
                <h5>{book.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            {selectedBook && (
              <div>
                <h3>{selectedBook.title}</h3>
                <p>{selectedBook.contents}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
