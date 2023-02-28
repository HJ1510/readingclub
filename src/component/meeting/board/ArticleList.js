// import Tables from "./Tables";
// import TableRow from "./TableRow";
// import TableColumn from "./TableColumn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { getArticle } from "api";
import { useEffect, useState } from "react";
import "./Board.css";
import mockItems from "mock.json";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}. ${date.getDate().toString().padStart(2, "0")}`;
}

function ArticleList({ title }) {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  // mockjson
  // const { _embedded } = mockItems;

  // const listLoad = () => {
  //   const { articles } = _embedded;
  //   setItems(articles);
  // };

  // useEffect(() => {
  //   listLoad();
  // }, []);

  // 백엔드 api
  // const listLoad = async (search) => {
  //   const { _embedded } = await getArticle();
  //   const { articles } = _embedded;
  //   setItems(articles);
  // };

  // useEffect(() => {
  //   listLoad(search);
  // }, []);

  // 코드잇 api
  // const listLoad = async () => {
  //   const { foods } = await getArticle();
  //   setItems(foods);
  // };

  // useEffect(() => {
  //   listLoad();
  // }, []);

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target["search"].value);
  // };

  const listLoad = async () => {
    if (title === "FAQ") {
      const { content } = await getArticle();
      console.log(content);
      setItems(content);
    } else if (title === "모임후기") {
      const { _embedded } = mockItems;
      const { articles } = _embedded;
      setItems(articles);
    } else if (title === "모임원 게시판") {
      const { foods } = await getArticle();
      setItems(foods);
    } else {
      console.log("게시판이 생성되지 않았습니다");
      console.log(title);
      return;
    }
  };

  useEffect(() => {
    listLoad();
  }, []);

  return title ? (
    <div className="articleList">
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
        <Row className="boardHeader">
          <Col md={1}></Col>
          <Col md={1}>No.</Col>
          <Col md={5}>제목</Col>
          <Col md={1}>작성자</Col>
          <Col md={2}>작성일</Col>
          <Col md={1}>조회수</Col>
        </Row>
        {items
          ? items.map((item, idx) => {
              return (
                <div key={idx}>
                  <Row className="articles">
                    <Col md={1}></Col>
                    <Col md={1}>{item.id}</Col>
                    <Col md={5} className="articlesTitle">
                      <Link to={`${item.id}`}>{item.title}</Link>
                    </Col>
                    <Col md={1}>{item.createdBy}</Col>
                    <Col md={2}>{formatDate(item.createdAt)}</Col>
                    <Col md={1}>조회수</Col>
                  </Row>
                </div>
              );
            })
          : ""}
        <Row>
          <Col>페이징</Col>
        </Row>
      </Container>
    </div>
  ) : (
    ""
  );
}

export default ArticleList;
