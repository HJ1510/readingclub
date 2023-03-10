import Layout from "../../layout/Layout";
import Category from "./Category";
import MeetingCalender from "./MeetingCalender";
import UserForm from "./UserForm";
import MeetingList from "./MeetingList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";

function Meeting() {
  return (
    <div className="Meeting">
      <Layout>
        <Row>
          <Col md={9}>{<MeetingCalender className="Calender" />}</Col>
          <Col md={2} className="UserForm">
            <UserForm inLogin="True" />
          </Col>
        </Row>
        <Row className="Catergory">
          <Col>
            <Category />
          </Col>
        </Row>
        <Row>
          <Col className="MeetingList">
            <MeetingList title="wholeMeeting"/>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default Meeting;
