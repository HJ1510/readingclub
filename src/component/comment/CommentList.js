import "../../assets/css/component/comment/Comment.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function CommentListItem({ item, onDelete }) {
  const deleteCommentClick = () => onDelete(item.id);

  return (
    <div>
      {/* <img src={item.imgUrl} alt={item.title} /> */}
      <div>
        <span>
          <h4>{item.title}</h4>
        </span>
        <span>{item.content}</span>
        <span>{item.rating}</span>
        <span>{formatDate(item.createdAt)}</span>
        <button onClick={deleteCommentClick}>삭제</button>
      </div>
    </div>
  );
}

function CommentList({ items, onDelete }) {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <CommentListItem item={item} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
