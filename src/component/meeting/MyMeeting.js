import Layout from "layout/Layout";
import { Col, Row } from "react-bootstrap";
import MeetingCalender from "./MeetingCalender";
import { useEffect, useState } from "react";
import { meetingList } from "MeetigData";

function MyMeeting() {
  const [mockList, setMockList] = useState([]);

  useEffect(() => {
    setMockList(meetingList);
  }, []);

  return (
    <Layout>
      <div className="MyMeeting">
        <Row>
          <MeetingCalender className="Calender" />
        </Row>
        <Row className="mymeetinglist">
          {mockList
            ? mockList.map((item, idx) => {
                return (
                  <div className="meetingItem">
                    {item.meetingStatus === "모집중" ? (
                      <h3>모집중</h3>
                    ) : item.meetingStatus === "진행중" ? (
                      <h3>진행중</h3>
                    ) : (
                      <h3>진행완료</h3>
                    )}
                    <h1 key={idx}>{item.title}</h1>
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
        </Row>
      </div>
    </Layout>
  );
}

export default MyMeeting;
