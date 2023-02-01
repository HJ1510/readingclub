import MeetingCalender from "component/MeetingCalender";
import "pages/Meeting.css";
import Category from "component/Category";
import Dropdown from "react-bootstrap/Dropdown";
import MeetingInfo from "component/MeetingInfo";

function Meeting() {
  return (
    <div className="Meeting">
      <h1>meeting</h1>
      <p>모임</p>
      <div>{<MeetingCalender />}</div>
      <div className="LoginForm">
        <p>
          <input defaultValue="ID"></input>
        </p>
        <p>
          <input defaultValue="PASSWORD"></input>
        </p>
        <p>
          <button>회원가입</button>
          <button>로그인</button>
        </p>
      </div>
      <div className="Catergory">
        <Category />
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            최신순
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">최신순</Dropdown.Item>
            <Dropdown.Item href="#/action-2">마감임박순</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <MeetingInfo />
      </div>
    </div>
  );
}

export default Meeting;
