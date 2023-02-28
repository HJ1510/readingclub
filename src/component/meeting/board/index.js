import ArticleList from "./ArticleList";
import "./Board.css";

function Board({ title }) {
  return (
    <div className="Board">
      <h2>{title}</h2>
      <ArticleList title={title} />
    </div>
  );
}

export default Board;
