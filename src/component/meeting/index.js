import Layout from "../../layout/Layout";
import Category from "./Category";
import MeetingCalender from "./MeetingCalender";
import UserForm from "./UserForm";
import MeetingList from "./MeetingList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/css/component/meeting/Meeting.css";

function Meeting() {
  return (
    <div className="Meeting">
      <Layout>
        <Row>
          <Col md={9}>{<MeetingCalender />}</Col>
          <Col md={2} className="UserForm">
            {<UserForm />}
          </Col>
        </Row>
        <Row className="Catergory">
          <Col>
            <Category />
          </Col>
        </Row>
        <Row>
          <Col className="MeetingList">
            <MeetingList />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default Meeting;
