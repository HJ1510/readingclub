import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/component/meeting/Meeting.css";

function UserForm() {
  return (
    <div>
      {/* <div>
        <p>
          <input type={"text"} placeholder="ID"></input>
        </p>
        <p>
          <input type={"text"} placeholder="PASSWORD"></input>
        </p>
        <p>
          <button>회원가입</button>
          <button>로그인</button>
        </p>
      </div> */}
      <div>
        <p>유저id</p>
        <p>현재모임</p>
        <p>
          <button>모임1</button>
          <button>모임2</button>
        </p>
        <p>
          <Link to="/meeting/createmeeting">
            <Button variant="outline-danger" size="lg">
              모임개설
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserForm;
