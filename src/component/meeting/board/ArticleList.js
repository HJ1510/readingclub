import Tables from "./Tables";
import TableRow from "./TableRow";
import TableColumn from "./TableColumn";
import { articleList } from "Data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleList(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(articleList);
  }, []);

  return (
    <>
      <Tables
        headersName={["No.", "제목", "작성자", "작성일", "조회수", "댓글수"]}
      >
        {dataList
          ? dataList.map((item, idx) => {
              return (
                <TableRow key={idx}>
                  <TableColumn>{item.no}</TableColumn>
                  <TableColumn>
                    <Link to={`${item.no}`}>{item.title}</Link>
                  </TableColumn>
                  <TableColumn>{item.createUser}</TableColumn>
                  <TableColumn>{item.createDate}</TableColumn>
                  <TableColumn>{item.readCount}</TableColumn>
                  <TableColumn>{item.replyCount}</TableColumn>
                </TableRow>
              );
            })
          : ""}
      </Tables>
    </>
  );
}

export default ArticleList;
