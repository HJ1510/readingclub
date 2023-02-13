import Tables from "./Tables";
import TableRow from "./TableRow";
import TableColumn from "./TableColumn";
import { Link } from "react-router-dom";
import { getArticle } from "api";
import { useEffect, useState } from "react";

function ArticleList() {
  const [items, setItems] = useState([]);

  const listLoad = async () => {
    const { foods } = await getArticle();
    setItems(foods);
  };

  useEffect(() => {
    listLoad();
  }, []);

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
                <TableRow key={item.id}>
                  <TableColumn>{item.id}</TableColumn>
                  <TableColumn>
                    <Link to={`${item.id}`}>{item.title}</Link>
                  </TableColumn>
                  <TableColumn>{item.content}</TableColumn>
                  <TableColumn>{item.createdAt}</TableColumn>
                  <TableColumn>{item.calorie}</TableColumn>
                  <TableColumn>{item.calorie}</TableColumn>
                </TableRow>
              );
            })
          : ""}
      </Tables>
    </div>
  );
}

export default ArticleList;
