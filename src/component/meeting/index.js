import Layout from "../../layout/Layout";
import Category from "./Category";
import MeetingCalender from "./MeetingCalender";
import LoginJoin from "./LoginJoin";
import MeetingList from "./MeetingList";
import Dropdown from "react-bootstrap/Dropdown";
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
          <MeetingList />
        </div>
      </Layout>
    </div>
  );
}

export default Meeting;
