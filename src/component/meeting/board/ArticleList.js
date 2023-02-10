import Tables from "./Tables";
import TableRow from "./TableRow";
import TableColumn from "./TableColumn";

function ArticleList(props) {
  return (
    <>
      <Tables
        headersName={["No.", "제목", "작성자", "작성일", "조회수", "댓글수"]}
      >
        <TableRow>
          <TableColumn>1</TableColumn>
          <TableColumn>첫번째 게시글입니다.</TableColumn>
          <TableColumn>둘리</TableColumn>
          <TableColumn>2023-02-10</TableColumn>
          <TableColumn>6</TableColumn>
          <TableColumn>1</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>2</TableColumn>
          <TableColumn>두번째 게시글입니다.</TableColumn>
          <TableColumn>마이콜</TableColumn>
          <TableColumn>2023-02-10</TableColumn>
          <TableColumn>0</TableColumn>
          <TableColumn>0</TableColumn>
        </TableRow>
      </Tables>
    </>
  );
}

export default ArticleList;
