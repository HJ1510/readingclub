import Layout from "../../layout/Layout";
import Category from "./Category";
import MeetingCalender from "./MeetingCalender";
import LoginJoin from "./LoginJoin";
import MeetingInfo from "./MeetingInfo";
import Dropdown from "react-bootstrap/Dropdown";
import Board from "./board/Board";
import "../../assets/css/component/meeting/Meeting.css";

function Meeting() {
  return (
    <div className="Meeting">
      <Layout>
        <h1>meeting</h1>
        <div>{<MeetingCalender />}</div>
        <div>{<LoginJoin />}</div>
        <div className="Catergory">
          <Category />
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            최신순
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">최신순</Dropdown.Item>
            <Dropdown.Item href="#/action-2">마감임박순</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div>
          <MeetingInfo />
        </div>
        <div>
          <Board />
        </div>
      </Layout>
    </div>
  );
}

export default Meeting;
