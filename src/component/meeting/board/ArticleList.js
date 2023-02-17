// import Tables from "./Tables";
// import TableRow from "./TableRow";
// import TableColumn from "./TableColumn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { getArticle } from "api";
import { useEffect, useState } from "react";
// import mockItems from "mock.json";
import "./Board.css";

function ArticleList() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  // const { _embedded } = mockItems;

  // const listLoad = async (search) => {
  //   const { articles } = _embedded;
  //   setItems(articles);
  // };

  // useEffect(() => {
  //   listLoad(search);
  // }, []);

  const listLoad = async () => {
    const { _embedded } = await getArticle();
    const { articles } = _embedded;
    setItems(articles);
  };

  useEffect(() => {
    listLoad();
  }, []);

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target["search"].value);
  // };

  return (
    <div>
      <h2>글 목록</h2>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Link to="/meeting/write">
              <button>글쓰기</button>
            </Link>
          </Col>
          {/* <Col md={2}>
          <form onSubmit={handleSearchSubmit}>
            <input name="search" />
            <button type="submit">검색</button>
          </form>
        </Col> */}
        </Row>
        <Row>
          <Col>No.</Col>
          <Col md={4}>제목</Col>
          <Col>작성자</Col>
          <Col>작성일</Col>
          <Col>조회수</Col>
          <Col>댓글수</Col>
        </Row>
        {items
          ? items.map((item, idx) => {
              return (
                <div key={idx}>
                  <Row>
                    <Col>{item.id}</Col>
                    <Col md={4}>
                      <Link to={`${item.id}`}>{item.title}</Link>
                    </Col>
                    <Col>{item.createdBy}</Col>
                    <Col>{item.createdAt}</Col>
                    <Col>조회수</Col>
                    <Col>댓글수</Col>
                  </Row>
                  <Row md={4}></Row>
                </div>
              );
            })
          : ""}
        <Row>
          <Col>페이징</Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArticleList;
