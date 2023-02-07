import "../../assets/css/component/note/Note.css";
import Layout from "../../layout/Layout";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Note() {
  return (
    <div>
      <Layout>
        <div className="noteNav">
          <Link to={"/note/mynote"}>
            <Button className="Header-button" variant="secondary">
              나의 노트
            </Button>
          </Link>
          <Link to={"/note/notelist"}>
            <Button className="Header-button" variant="secondary">
              노트리스트
            </Button>
          </Link>
          <Link to={"/note/notebookmark"}>
            <Button className="Header-button" variant="secondary">
              저장노트
            </Button>
          </Link>
        </div>
        <div className="myNote">
          <h1>My Note</h1>
        </div>
      </Layout>
    </div>
  );
}

export default Note;
