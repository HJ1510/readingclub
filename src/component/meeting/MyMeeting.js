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
            {mockList
              ? mockList.map((item, idx) => {
                  return (
                    <div key={idx} className="meetingItem">
                      {item.meetingStatus === "모집중" ? (
                        <h3>모집중</h3>
                      ) : item.meetingStatus === "진행중" ? (
                        <h3>진행중</h3>
                      ) : (
                        <h3>진행완료</h3>
                      )}
                      <p key={idx}>{item.title}</p>
                      {item.roll === "host" ? (
                        <div>
                          <h3>host</h3> <button>setting</button>
                        </div>
                      ) : (
                        <button>탈퇴하기</button>
                      )}
                    </div>
                  );
                })
              : ""}
          </Col>
        </Row>
        <MyMeetingList />
      </div>
    </Layout>
  );
}

export default MyMeeting;
