import { Button } from "react-bootstrap";
import "../../assets/css/component/meeting/Meeting.css";

function UserForm() {
  return (
    <div>
      {/* <div className="LoginForm">
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
      <div className="LoginForm">
        <p>유저id</p>
        <p>현재모임</p>
        <p>
          <button>모임1</button>
          <button>모임2</button>
        </p>
        <p>
          <Button variant="outline-danger" size="lg">
            모임개설
          </Button>
        </p>
      </div>
    </div>
  );
}

export default UserForm;
