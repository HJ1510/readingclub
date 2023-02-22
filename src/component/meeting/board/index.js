import ArticleList from "./ArticleList";

function Board({ title }) {
  return (
    <div>
      <h2>{title} 게시판</h2>
      <ArticleList title={title} />
    </div>
  );
}

export default Board;
