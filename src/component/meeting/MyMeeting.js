import Layout from "layout/Layout";
import { Col, Row } from "react-bootstrap";
import MeetingCalender from "./MeetingCalender";
import { useEffect, useState } from "react";
import { meetingList } from "MeetigData";
import MyMeetingList from "./MyMeetingList";

function MyMeeting() {
  const [mockList, setMockList] = useState([]);

  useEffect(() => {
    setMockList(meetingList);
  }, []);

  return (
    <Layout>
      <div className="MyMeeting">
        <Row>
          <Col md={7}>
            <MeetingCalender className="Calender" />
          </Col>
          <Col md={5}>
            <MyMeetingList />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default MyMeeting;
