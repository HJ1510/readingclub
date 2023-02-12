import { getArticle } from "api";
import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";

function NewBoard() {
  const [items, setItems] = useState([]);

  const listLoad = async () => {
    const { foods } = await getArticle();
    setItems(foods);
  };

  useEffect(() => {
    listLoad();
  },[])

  return (
    <div>
      <h2>모임후기 게시판</h2>
      <ArticleList items={items} />
    </div>
  );
}

export default NewBoard;
