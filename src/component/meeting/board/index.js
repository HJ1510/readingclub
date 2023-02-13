import ArticleList from "./ArticleList";
import { Link } from "react-router-dom";

function NewBoard() {
  return (
    <div>
      <h2>모임후기 게시판</h2>
      <ArticleList />
      <Link to="/meeting/write">
        <button>글쓰기</button>
      </Link>
    </div>
  );
}

export default NewBoard;
