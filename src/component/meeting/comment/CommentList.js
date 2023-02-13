import CommentItem from "./CommentItem";
import { getArticle } from "api";
import { useEffect, useState } from "react";

function CommentList() {
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
      <h4>댓글리스트</h4>
      <div>
        {items
          ? items.map((item) => {
              return <CommentItem title={item.title} content={item.content} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default CommentList;
