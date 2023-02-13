import Tables from "./Tables";
import TableRow from "./TableRow";
import TableColumn from "./TableColumn";
import { Link } from "react-router-dom";
import ModalBasic from "./ModalBasic";
import { useState } from "react";
import { deleteArticle } from "api";

function ArticleList({ items }) {
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
          ? items.map((item, idx) => {
              return (
                <TableRow key={idx}>
                  <TableColumn>{item.id}</TableColumn>
                  <TableColumn>
                    <Link to={`${item.id}`}>{item.title}</Link>
                  </TableColumn>
                  <TableColumn>{item.content}</TableColumn>
                  <TableColumn>{item.createdAt}</TableColumn>
                  <TableColumn>{item.calorie}</TableColumn>
                  <TableColumn>{item.calorie}</TableColumn>
                  <TableColumn>
                    <button onClick={""}>삭제</button>
                  </TableColumn>
                </TableRow>
              );
            })
          : ""}
      </Tables>
    </div>
  );
}

export default ArticleList;
