import { getArticle } from "api";
import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import { Link } from "react-router-dom";
import { deleteArticle } from "api";

function NewBoard() {
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
      <h2>모임후기 게시판</h2>
      <ArticleList items={items} />
      <Link to="/meeting/write">
        <button>글쓰기</button>
      </Link>
    </div>
  );
}

export default NewBoard;