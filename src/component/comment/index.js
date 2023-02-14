import { useEffect, useState } from "react";
import { getComments } from "api";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function Comment() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [loadingError, setLoadingError] = useState(null);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const newestClick = () => setOrder("createdAt");
  const bestClick = () => setOrder("rating");

  const commentDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  // options getComments에 전달할 파라미터(정렬)
  const commentLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      result = await getComments(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
    }
    const { reviews } = result;
    setItems(reviews);
  };


  useEffect(() => {
    commentLoad(order);
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={newestClick}>최신순</button>
        <button onClick={bestClick}>베스트순</button>
      </div>
      <CommentForm />
      <CommentList items={sortedItems} onDelete={commentDelete} />
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default Comment;
