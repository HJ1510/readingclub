import Tables from "./Tables";
import TableRow from "./TableRow";
import TableColumn from "./TableColumn";
import { Link } from "react-router-dom";
import { getArticle } from "api";
import { useEffect, useState } from "react";
import mockItems from "mock.json";

function ArticleList() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const { _embedded } = mockItems;

  // const listLoad = async (search) => {
  //   const { articles } = _embedded;
  //   setItems(articles);
  // };

  // useEffect(() => {
  //   listLoad(search);
  // }, []);

  const listLoad = async (search) => {
    const { foods } = await getArticle((search = { search }));
    setItems(foods);
  };

  useEffect(() => {
    listLoad(search);
  }, []);

  const handleSearchSubmit = (e) => {
    setSearch(e.target["search"].value);
  };

  return (
    <div>
      <h2>글 목록</h2>
      <Tables
        headersName={[
          "No.",
          "제목",
          "작성자",
          "작성일",
          "조회수",
          "댓글수",
          "",
        ]}
      >
        {items
          ? items.map((item) => {
              return (
                <TableRow key={item.createdAt}>
                  <TableColumn>{item.createdAt}</TableColumn>
                  <TableColumn>
                    <Link to={`${item.id}`}>{item.title}</Link>
                  </TableColumn>
                  <TableColumn>{item.createdBy}</TableColumn>
                  <TableColumn>{item.createdAt}</TableColumn>
                </TableRow>
              );
            })
          : ""}
      </Tables>
      <form onSubmit={handleSearchSubmit}>
        <input name="search" />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

export default ArticleList;
